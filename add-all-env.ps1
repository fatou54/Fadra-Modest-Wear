# Script to add all environment variables to Vercel

Write-Host "Adding Firebase API Key..."
"AIzaSyBP3oQOfEA5o5kZVO2zOYpd2F6EZxLkq5w`n`n" | vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production preview development

Write-Host "Adding Firebase Auth Domain..."
"fadra-modest-wear.firebaseapp.com`n`n" | vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production preview development

Write-Host "Adding Firebase Project ID..."
"fadra-modest-wear`n`n" | vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID production preview development

Write-Host "Adding Firebase Storage Bucket..."
"fadra-modest-wear.firebasestorage.app`n`n" | vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET production preview development

Write-Host "Adding Firebase Messaging Sender ID..."
"444046044803`n`n" | vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID production preview development

Write-Host "Adding Firebase App ID..."
"1:444046044803:web:e309421d8060fc6de3f5b6`n`n" | vercel env add NEXT_PUBLIC_FIREBASE_APP_ID production preview development

Write-Host "Adding Firebase Measurement ID..."
"G-BMGG8KDCDC`n`n" | vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID production preview development

Write-Host "Adding Stripe Publishable Key..."
"pk_test_51Su4lG3RVfdWP7I9PceYLKY2fwXi8nIQC8PZ13l8ThJNKxbNenA2U0Tc41TB9633dinJnGHd1V7rJMneQlMXCEs00bYTiPcah`n`n" | vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production preview development

Write-Host "Adding Stripe Secret Key..."
"sk_test_51Su4lG3RVfdWP7I9Hg2ARJheOW6Q1IxwtavigKyQCEOMTExBbvz5ql0Z7DYbQwgtwHJWhNsgXtvNJTnWp6YvvpX200hFUIiaIh" | vercel env add STRIPE_SECRET_KEY production preview development

Write-Host "`n✅ All environment variables added! Now deploying..."
