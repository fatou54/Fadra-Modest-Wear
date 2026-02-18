import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  sendEmailVerification,
  applyActionCode,
  checkActionCode,
  multiFactor,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  RecaptchaVerifier,
  MultiFactorResolver,
  sendPasswordResetEmail,
  updateProfile,
  PhoneMultiFactorInfo
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './firebase';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  emailVerified?: boolean;
  has2FA?: boolean;
  phoneNumber?: string;
  lastLogin?: Date;
}

// Sign up new user
export const signUp = async (email: string, password: string, displayName?: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update display name if provided
    if (displayName) {
      await updateProfile(user, { displayName });
    }
    
    // Send email verification
    await sendEmailVerification(user);
    
    // Create user profile in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: displayName || '',
      createdAt: serverTimestamp(),
      emailVerified: false,
      has2FA: false,
      lastLogin: serverTimestamp(),
    });
    
    return { success: true, user, message: 'Verification email sent! Please check your inbox.' };
  } catch (error: any) {
    console.error('Error signing up:', error);
    return { success: false, error: error.message };
  }
};

// Sign in existing user
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update last login in Firestore
    await updateDoc(doc(db, 'users', user.uid), {
      lastLogin: serverTimestamp(),
    });
    
    return { 
      success: true, 
      user, 
      emailVerified: user.emailVerified,
      requires2FA: multiFactor(user).enrolledFactors.length > 0
    };
  } catch (error: any) {
    console.error('Error signing in:', error);
    
    // Check if error is due to 2FA requirement
    if (error.code === 'auth/multi-factor-auth-required') {
      return { 
        success: false, 
        error: 'multi-factor-required',
        resolver: error.resolver as MultiFactorResolver
      };
    }
    
    return { success: false, error: error.message };
  }
};

// Sign out
export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error('Error signing out:', error);
    return { success: false, error: error.message };
  }
};

// Get current user profile
export const getUserProfile = async (uid: string) => {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
};

// Listen to auth state changes
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Resend verification email
export const resendVerificationEmail = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: 'No user logged in' };
    }
    if (user.emailVerified) {
      return { success: false, error: 'Email already verified' };
    }
    await sendEmailVerification(user);
    return { success: true, message: 'Verification email sent!' };
  } catch (error: any) {
    console.error('Error resending verification:', error);
    return { success: false, error: error.message };
  }
};

// Verify email with action code
export const verifyEmail = async (oobCode: string) => {
  try {
    await applyActionCode(auth, oobCode);
    
    // Update user profile in Firestore
    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, 'users', user.uid), {
        emailVerified: true,
      });
    }
    
    return { success: true, message: 'Email verified successfully!' };
  } catch (error: any) {
    console.error('Error verifying email:', error);
    return { success: false, error: error.message };
  }
};

// Check action code
export const checkEmailVerificationCode = async (oobCode: string) => {
  try {
    const info = await checkActionCode(auth, oobCode);
    return { success: true, info };
  } catch (error: any) {
    console.error('Error checking code:', error);
    return { success: false, error: error.message };
  }
};

// Send password reset email
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset email sent!' };
  } catch (error: any) {
    console.error('Error sending password reset:', error);
    return { success: false, error: error.message };
  }
};

// Setup reCAPTCHA for phone verification
export const setupRecaptcha = (containerId: string) => {
  try {
    const recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: 'normal',
      callback: () => {
        // reCAPTCHA solved
      },
      'expired-callback': () => {
        // Response expired
      }
    });
    return recaptchaVerifier;
  } catch (error) {
    console.error('Error setting up reCAPTCHA:', error);
    return null;
  }
};

// Enroll in 2FA with phone number
export const enrollIn2FA = async (phoneNumber: string, recaptchaVerifier: RecaptchaVerifier) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: 'No user logged in' };
    }

    const session = await multiFactor(user).getSession();
    const phoneInfoOptions = {
      phoneNumber,
      session
    };

    const phoneAuthProvider = new PhoneAuthProvider(auth);
    const verificationId = await phoneAuthProvider.verifyPhoneNumber(
      phoneInfoOptions,
      recaptchaVerifier
    );

    return { success: true, verificationId };
  } catch (error: any) {
    console.error('Error enrolling in 2FA:', error);
    return { success: false, error: error.message };
  }
};

// Complete 2FA enrollment
export const complete2FAEnrollment = async (verificationId: string, verificationCode: string, displayName: string) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: 'No user logged in' };
    }

    const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
    
    await multiFactor(user).enroll(multiFactorAssertion, displayName);
    
    // Get phone number from enrolled factors
    const enrolledFactors = multiFactor(user).enrolledFactors;
    const phoneInfo = enrolledFactors[0] as PhoneMultiFactorInfo;
    
    // Update user profile in Firestore
    await updateDoc(doc(db, 'users', user.uid), {
      has2FA: true,
      phoneNumber: phoneInfo?.phoneNumber || '',
    });

    return { success: true, message: '2FA enabled successfully!' };
  } catch (error: any) {
    console.error('Error completing 2FA enrollment:', error);
    return { success: false, error: error.message };
  }
};

// Verify 2FA code during login
export const verify2FACode = async (resolver: MultiFactorResolver, verificationId: string, verificationCode: string) => {
  try {
    const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
    
    const userCredential = await resolver.resolveSignIn(multiFactorAssertion);
    
    // Update last login
    await updateDoc(doc(db, 'users', userCredential.user.uid), {
      lastLogin: serverTimestamp(),
    });
    
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error('Error verifying 2FA code:', error);
    return { success: false, error: error.message };
  }
};

// Send 2FA verification code during login
export const send2FAVerificationCode = async (resolver: MultiFactorResolver, recaptchaVerifier: RecaptchaVerifier) => {
  try {
    const phoneInfoOptions = {
      multiFactorHint: resolver.hints[0],
      session: resolver.session
    };
    
    const phoneAuthProvider = new PhoneAuthProvider(auth);
    const verificationId = await phoneAuthProvider.verifyPhoneNumber(
      phoneInfoOptions,
      recaptchaVerifier
    );
    
    return { success: true, verificationId };
  } catch (error: any) {
    console.error('Error sending 2FA code:', error);
    return { success: false, error: error.message };
  }
};

// Unenroll from 2FA
export const unenrollFrom2FA = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: 'No user logged in' };
    }

    const enrolledFactors = multiFactor(user).enrolledFactors;
    if (enrolledFactors.length === 0) {
      return { success: false, error: 'No 2FA enrolled' };
    }

    await multiFactor(user).unenroll(enrolledFactors[0]);
    
    // Update user profile in Firestore
    await updateDoc(doc(db, 'users', user.uid), {
      has2FA: false,
      phoneNumber: '',
    });

    return { success: true, message: '2FA disabled successfully!' };
  } catch (error: any) {
    console.error('Error unenrolling from 2FA:', error);
    return { success: false, error: error.message };
  }
};
