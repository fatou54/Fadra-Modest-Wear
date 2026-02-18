'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn, resetPassword, setupRecaptcha, send2FAVerificationCode, verify2FACode } from '@/lib/auth';
import { MultiFactorResolver } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  
  // 2FA states
  const [show2FA, setShow2FA] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [resolver, setResolver] = useState<MultiFactorResolver | null>(null);
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const result = await signIn(email, password);

      if (result.success) {
        if (!result.emailVerified) {
          setError('Please verify your email before logging in. Check your inbox for the verification link.');
          setLoading(false);
          return;
        }
        
        // Successful login
        router.push('/');
      } else if (result.error === 'multi-factor-required' && result.resolver) {
        // 2FA is required
        setResolver(result.resolver);
        
        // Setup reCAPTCHA
        const recaptchaVerifier = setupRecaptcha('recaptcha-container-2fa');
        if (!recaptchaVerifier) {
          setError('Failed to setup reCAPTCHA');
          setLoading(false);
          return;
        }
        
        // Send verification code
        const codeResult = await send2FAVerificationCode(result.resolver, recaptchaVerifier);
        if (codeResult.success && codeResult.verificationId) {
          setVerificationId(codeResult.verificationId);
          setShow2FA(true);
          setMessage('2FA code sent to your phone');
        } else {
          setError(codeResult.error || 'Failed to send 2FA code');
        }
      } else {
        setError(result.error || 'Failed to sign in');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handle2FAVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resolver || !verificationId) return;
    
    setError('');
    setLoading(true);

    try {
      const result = await verify2FACode(resolver, verificationId, verificationCode);
      
      if (result.success) {
        router.push('/');
      } else {
        setError(result.error || 'Invalid verification code');
      }
    } catch (err: any) {
      setError(err.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const result = await resetPassword(resetEmail);
      if (result.success) {
        setMessage(result.message || 'Password reset email sent!');
        setResetEmail('');
        setTimeout(() => setShowResetPassword(false), 2000);
      } else {
        setError(result.error || 'Failed to send reset email');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (show2FA) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#faf9f7' }}>
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 animate-fadeIn">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <h1 className="text-4xl font-serif font-bold tracking-wider mb-2" style={{ color: '#1a1a1a' }}>
                  FADRA
                </h1>
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: '#d4a574' }}>
                  Luxury Modest Fashion
                </p>
              </Link>
            </div>

            <div className="text-center mb-8">
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mb-4">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2" style={{ color: '#1a1a1a' }}>
                Two-Factor Authentication
              </h2>
              <p className="text-sm" style={{ color: '#666' }}>
                Enter the verification code sent to your phone
              </p>
            </div>
            
            <form className="space-y-5" onSubmit={handle2FAVerification}>
              <div>
                <label htmlFor="verification-code" className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
                  Verification Code
                </label>
                <input
                  id="verification-code"
                  name="code"
                  type="text"
                  required
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-center text-2xl tracking-widest font-mono"
                  style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
                  placeholder="••••••"
                  maxLength={6}
                />
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded animate-shake">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {message && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-sm text-green-800">{message}</p>
                </div>
              )}

              <div id="recaptcha-container-2fa"></div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#1a1a1a',
                  backgroundImage: loading ? 'none' : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  'Verify & Continue'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (showResetPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#faf9f7' }}>
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 animate-fadeIn">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <h1 className="text-4xl font-serif font-bold tracking-wider mb-2" style={{ color: '#1a1a1a' }}>
                  FADRA
                </h1>
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: '#d4a574' }}>
                  Luxury Modest Fashion
                </p>
              </Link>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold mb-2" style={{ color: '#1a1a1a' }}>
                Reset Your Password
              </h2>
              <p className="text-sm" style={{ color: '#666' }}>
                Enter your email to receive a password reset link
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleResetPassword}>
              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
                  Email Address
                </label>
                <input
                  id="reset-email"
                  name="email"
                  type="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
                  placeholder="your.email@example.com"
                />
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded animate-shake">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              {message && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-sm text-green-800">{message}</p>
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowResetPassword(false)}
                  className="flex-1 py-3 px-6 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-400 transition-all duration-200"
                  style={{ color: '#333' }}
                >
                  Back to Login
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: '#1a1a1a',
                    backgroundImage: loading ? 'none' : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                  }}
                >
                  {loading ? 'Sending...' : 'Send Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#faf9f7' }}>
      {/* Left Side - Image (Hidden on mobile) */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=1600&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Welcome Back
          </h2>
          <p className="text-lg opacity-90 leading-relaxed max-w-md">
            Sign in to continue your journey with FADRA's curated collection of luxury modest fashion.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8 animate-fadeIn">
            <Link href="/" className="inline-block">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-wider mb-2" style={{ color: '#1a1a1a' }}>
                FADRA
              </h1>
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: '#d4a574' }}>
                Luxury Modest Fashion
              </p>
            </Link>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3" style={{ color: '#1a1a1a' }}>
              Welcome Back
            </h2>
            <p className="text-sm" style={{ color: '#666' }}>
              Sign in to continue your modest journey with us
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 pr-12"
                  style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-sm font-medium hover:underline transition-all"
                style={{ color: '#1a1a1a' }}
              >
                Forgot Password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded animate-shake">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {message && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-sm text-green-800">{message}</p>
              </div>
            )}

            <div id="recaptcha-container"></div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#1a1a1a',
                backgroundImage: loading ? 'none' : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-sm" style={{ color: '#666' }}>
                Don't have an account?{' '}
                <Link 
                  href="/signup" 
                  className="font-semibold hover:underline transition-all"
                  style={{ color: '#1a1a1a' }}
                >
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-shake {
          animation: shake 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
