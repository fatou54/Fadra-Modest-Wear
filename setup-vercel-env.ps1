# Add environment variables to Vercel for all environments

# Firebase Config
echo "AIzaSyBP3oQOfEA5o5kZVO2zOYpd2F6EZxLkq5w" | vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production preview development

echo "fadra-modest-wear.firebaseapp.com" | vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production preview development

echo "fadra-modest-wear" | vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID production preview development

echo "fadra-modest-wear.firebasestorage.app" | vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET production preview development

echo "444046044803" | vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID production preview development

echo "1:444046044803:web:e309421d8060fc6de3f5b6" | vercel env add NEXT_PUBLIC_FIREBASE_APP_ID production preview development

echo "G-BMGG8KDCDC" | vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID production preview development

# Stripe Config
echo "pk_test_51Su4lG3RVfdWP7I9PceYLKY2fwXi8nIQC8PZ13l8ThJNKxbNenA2U0Tc41TB9633dinJnGHd1V7rJMneQlMXCEs00bYTiPcah" | vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production preview development

echo "sk_test_51Su4lG3RVfdWP7I9Hg2ARJheOW6Q1IxwtavigKyQCEOMTExBbvz5ql0Z7DYbQwgtwHJWhNsgXtvNJTnWp6YvvpX200hFUIiaIh" | vercel env add STRIPE_SECRET_KEY production preview development

Write-Host "All environment variables added to Vercel!"
