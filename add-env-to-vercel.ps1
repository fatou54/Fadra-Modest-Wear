# Login to Vercel first
vercel login

# Add all environment variables to Vercel
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY preview  
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY development

vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production
vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN preview
vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN development

vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID production
vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID preview
vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID development

vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET production
vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET preview
vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET development

vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID production
vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID preview
vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID development

vercel env add NEXT_PUBLIC_FIREBASE_APP_ID production
vercel env add NEXT_PUBLIC_FIREBASE_APP_ID preview
vercel env add NEXT_PUBLIC_FIREBASE_APP_ID development

vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID production
vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID preview
vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID development

vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY preview
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY development

vercel env add STRIPE_SECRET_KEY production
vercel env add STRIPE_SECRET_KEY preview
vercel env add STRIPE_SECRET_KEY development

Write-Host "Environment variables added! Redeploy your project to apply changes."
