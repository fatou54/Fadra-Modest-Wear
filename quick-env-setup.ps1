# Script to add environment variables one by one

Write-Host "Adding environment variables to Vercel..."

# Add each variable for production
Write-Host "`nAdding to Production..."
echo "AIzaSyBP3oQOfEA5o5kZVO2zOYpd2F6EZxLkq5w" | vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production
echo "fadra-modest-wear.firebaseapp.com" | vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production
echo "fadra-modest-wear" | vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID production
echo "fadra-modest-wear.firebasestorage.app" | vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET production
echo "444046044803" | vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID production
echo "1:444046044803:web:e309421d8060fc6de3f5b6" | vercel env add NEXT_PUBLIC_FIREBASE_APP_ID production
echo "G-BMGG8KDCDC" | vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID production
echo "pk_test_51Su4lG3RVfdWP7I9PceYLKY2fwXi8nIQC8PZ13l8ThJNKxbNenA2U0Tc41TB9633dinJnGHd1V7rJMneQlMXCEs00bYTiPcah" | vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
echo "sk_test_51Su4lG3RVfdWP7I9Hg2ARJheOW6Q1IxwtavigKyQCEOMTExBbvz5ql0Z7DYbQwgtwHJWhNsgXtvNJTnWp6YvvpX200hFUIiaIh" | vercel env add STRIPE_SECRET_KEY production

Write-Host "`n✅ Done!"
