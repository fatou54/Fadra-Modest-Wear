# Firebase Storage Rules Setup

Your admin dashboard is stuck on "Saving..." because Firebase Storage rules need to be configured.

## Steps to Fix:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **fadra-modest-wear**
3. Click on **Storage** in the left menu
4. Click on the **Rules** tab
5. Replace the rules with this:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;  // Anyone can read
      allow write: if true; // Anyone can write (change this in production!)
    }
  }
}
```

6. Click **Publish**

## For Production (More Secure):

Once you add authentication, use these rules instead:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
  }
}
```

## Firestore Rules:

Also check Firestore rules at **Firestore Database > Rules**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

After updating, try uploading again!
