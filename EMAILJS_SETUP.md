# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to https://dashboard.emailjs.com/admin
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - Select "Gmail"
   - Click "Connect Account"
   - Sign in with your Gmail account
   - Allow EmailJS permissions
4. Your Service ID will be shown (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click "Save"
5. Your Template ID will be shown (e.g., "template_xyz789")

## Step 4: Get Your Public Key
1. Go to "Account" in the dashboard
2. Find "Public Key" section
3. Copy your public key (e.g., "aBcDeFgHiJkLmNoP")

## Step 5: Update .env File
Open the `.env` file in your project root and update:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoP
```

Replace with your actual IDs from the dashboard.

## Step 6: Test Your Contact Form
1. Restart your dev server: `npm run dev`
2. Go to the contact page
3. Fill out the form and submit
4. Check your email inbox (Gmail)

## Free Tier Limits
- 200 emails per month
- No credit card required
- Perfect for portfolio websites

## Troubleshooting
- **Emails not sending?** Check browser console for errors
- **Wrong template?** Verify template ID matches
- **Not receiving emails?** Check spam folder
- **CORS errors?** Make sure to use environment variables

## Security Note
The `.env` file is already in `.gitignore`, so your keys won't be pushed to GitHub.
However, the public key is meant to be public (used in browser), so it's safe.

## Need Help?
- EmailJS Docs: https://www.emailjs.com/docs/
- Dashboard: https://dashboard.emailjs.com/
