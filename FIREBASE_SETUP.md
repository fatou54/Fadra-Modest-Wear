# Firebase Setup Instructions

## Step 1: Get Firebase Configuration

1. Go to Firebase Console: https://console.firebase.google.com/u/3/project/fadra-modest-wear
2. Click the gear icon ⚙️ next to "Project Overview"
3. Click "Project settings"
4. Scroll to "Your apps" section
5. Click "</>" (Web icon) to register a web app
6. Enter nickname: "Fadra Modest Wear Website"
7. Click "Register app"
8. Copy the config values

## Step 2: Update .env.local

Replace the values in .env.local file with your actual Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=fadra-modest-wear.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=fadra-modest-wear
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=fadra-modest-wear.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
```

## Step 3: Enable Firebase Services

### Firestore Database:
1. Click "Firestore Database" in left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select location (closest to your users)
5. Click "Enable"

### Authentication:
1. Click "Authentication" in left sidebar
2. Click "Get started"
3. Enable sign-in methods you want (Email/Password, Google, etc.)

### Storage:
1. Click "Storage" in left sidebar
2. Click "Get started"
3. Start in test mode
4. Click "Done"

## Step 4: Restart Development Server

After updating .env.local:
```bash
npm run dev
```

## Your Firebase Project ID:
fadra-modest-wear
