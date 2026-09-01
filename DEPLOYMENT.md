# Deployment Guide

Complete guide for deploying your portfolio to production.

## 🚀 Quick Deploy to Vercel (Recommended)

### Step 1: Prepare Your Code

```bash
# Initialize git repository (if not already done)
git init

# Create .gitignore (already included)

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Create GitHub repository
# 1. Go to github.com and create a new repository named "portfolio"
# 2. Do NOT initialize with README
# 3. Copy the commands to push existing repository

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "portfolio" repository
   - Click "Import"

3. **Configure Project**
   - Project name: `portfolio` (or your preferred name)
   - Framework: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Environment variables: Leave empty for now

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)
   - Your site will be live at `portfolio.vercel.app`

## 🌐 Connect Custom Domain

### Option 1: Buy Domain from Namecheap (Cheapest)

1. **Buy Domain**
   - Go to [namecheap.com](https://namecheap.com)
   - Search for domain (e.g., `irshad.dev` or `irshad.codes`)
   - Select domain and add to cart
   - Complete purchase (~$10/year)

2. **Connect to Vercel**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain name (e.g., `irshad.dev`)
   - Vercel will show you DNS records to add

3. **Update DNS in Namecheap**
   - Log in to Namecheap
   - Go to "Domain List"
   - Click "Manage" next to your domain
   - Go to "Advanced DNS" tab
   - Add the DNS records provided by Vercel:
     - Type: `A` Record → Value: `76.76.19.165`
     - Type: `CNAME` Record → Value: `cname.vercel-dns.com`
   - Save changes
   - Wait 24-48 hours for DNS to propagate

4. **Verify in Vercel**
   - After DNS updates, click "Verify" in Vercel
   - Your domain should now point to your portfolio

### Option 2: Domain Transfer/Using Existing Domain

If you already have a domain:

1. **In Vercel Dashboard**
   - Go to Settings → Domains
   - Click "Add Domain"
   - Enter your domain

2. **Point DNS to Vercel**
   - Log in to your domain registrar
   - Find DNS settings
   - Update nameservers to Vercel's:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```
   - OR add these DNS records:
     ```
     A: 76.76.19.165
     CNAME: cname.vercel-dns.com (for www subdomain)
     ```

3. **Verify**
   - Click "Verify" in Vercel
   - DNS changes can take up to 48 hours

## 🔄 Automatic Deployments

Your portfolio is now set up for **automatic deployments**:

- Every time you push to `main` branch, Vercel automatically deploys
- Deployments usually complete in 1-2 minutes
- You can see deployment status in Vercel dashboard

```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel automatically deploys! 🚀
```

## 📝 Update Your Resume

Make sure to update your resume with your new portfolio URL:

**Before:**
- Portfolio: GitHub link or local file

**After:**
- Portfolio: https://irshad.dev
- GitHub: https://github.com/irshad

## 🔍 SEO Setup

### Add to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "URL prefix"
3. Enter your domain: `https://irshad.dev`
4. Follow verification steps
5. Submit sitemap: `https://irshad.dev/sitemap.xml` (if you add one)

### Verify with Bing

1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Verify ownership

## 📊 Analytics Setup

### Add Google Analytics

1. Create Google Analytics account at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🔒 SSL Certificate

Vercel automatically provides free SSL certificate for your domain. Your site will have HTTPS automatically.

## 📱 Mobile Testing

Test on mobile before finalizing:

1. **Local Testing**
   ```bash
   npm run build
   npm run start
   # Open http://localhost:3000 on phone
   ```

2. **Online Testing**
   - Visit `https://irshad.dev` on phone
   - Test all functionality
   - Check navigation, forms, links

## 🚨 Common Issues

### Domain not pointing to portfolio

**Problem**: Typing domain shows "ERR_NAME_NOT_RESOLVED"

**Solution**:
- DNS changes take up to 48 hours
- Clear browser cache: Ctrl+Shift+Delete (Chrome)
- Try incognito mode
- Verify DNS records in Vercel dashboard

### Vercel shows "Domain not found"

**Problem**: Domain shows pending in Vercel

**Solution**:
- Wait 24-48 hours
- Check DNS records are correctly added
- Contact domain registrar support if still not working

### Form submissions not working

**Problem**: Contact form doesn't send emails

**Current Setup**: Uses `mailto:` links (opens email client)

**Solution for Backend Emails**:
- Set up email service (Resend, SendGrid, etc.)
- Create API route for form submission
- See README.md for email integration

## 📈 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Connect custom domain
3. ✅ Add to Google Search Console
4. ✅ Set up Google Analytics
5. ✅ Share on LinkedIn
6. ✅ Optimize project descriptions
7. ✅ Add more projects as you build them

## 🎯 Performance Checklist

- [ ] Lighthouse score > 90
- [ ] Page load time < 2s
- [ ] All images optimized
- [ ] Mobile responsive test passed
- [ ] Form submission working
- [ ] All links working (no 404s)
- [ ] Social links verified
- [ ] Email link working
- [ ] Sitemap.xml created (optional)

## 📞 Support

If you face issues during deployment:

1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Reach out to domain registrar support

---

**Congratulations! Your portfolio is live! 🎉**

Now go out and share it with the world! 🚀
