# Quick Start Guide

Get your portfolio up and running in 5 minutes! 🚀

## ⚡ 5-Minute Setup

### 1. Install Dependencies (1 min)
```bash
npm install
```

### 2. Run Development Server (1 min)
```bash
npm run dev
```
Visit `http://localhost:3000` - Your portfolio is live locally!

### 3. Customize Your Data (2 min)
Edit `src/data/portfolio.ts` and update:
- Your name, email, phone
- Social media links
- Project details
- Skills and experience

### 4. Test Locally (1 min)
- Check all sections render correctly
- Test responsive design (resize browser)
- Click all links

## 🎨 Common Customizations

### Change Colors
Edit `tailwind.config.ts` and update accent color:
```typescript
colors: {
  accent: '#3b82f6',  // Change this
}
```

### Update Projects
In `src/data/portfolio.ts`, modify the `projects` array:
```typescript
projects: [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    // ... other fields
  }
]
```

### Add New Section
1. Create component in `src/components/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to JSX

### Update About Section
Edit the `about` object in `src/data/portfolio.ts`

## 📝 Editing Checklist

- [ ] Update name and email
- [ ] Update social links (GitHub, LinkedIn, etc.)
- [ ] Update project titles and descriptions
- [ ] Update skills list
- [ ] Update work experience
- [ ] Update education details
- [ ] Test contact form
- [ ] Test all navigation links

## 🚀 Deploy in 2 Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "My portfolio"
git push origin main
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your portfolio repo
5. Click "Deploy"

**Done!** Your portfolio is live 🎉

## 🌐 Get Custom Domain

1. Buy domain on [Namecheap](https://namecheap.com) (~$10/year)
2. Add domain in Vercel → Settings → Domains
3. Update DNS records (Vercel will guide you)
4. Wait 24-48 hours for DNS to propagate

## 📱 Mobile Check

Make sure to test on phone:
```bash
# Get your local IP
ipconfig getifaddr en0  # Mac
ipconfig             # Windows

# Visit http://YOUR_IP:3000 on phone
```

## 🔧 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📧 Contact Form

Currently uses `mailto:` links. To add backend email support:

1. Sign up for [Resend](https://resend.com) (free)
2. Follow README.md email integration section
3. Update `src/components/Contact.tsx`

## 🎯 Before Going Live

- [ ] Proofread all text
- [ ] Check all links work
- [ ] Test on mobile
- [ ] Update resume with portfolio URL
- [ ] Share on LinkedIn
- [ ] Share on GitHub
- [ ] Add portfolio to job applications

## 💡 Pro Tips

1. **Add Project Images**: Save screenshots in `public/projects/`
2. **Keep Data Fresh**: Update projects as you build new ones
3. **Link Everything**: GitHub repos, live demos, LinkedIn, etc.
4. **Mobile First**: Verify mobile experience before deploying
5. **Fast Deployments**: Every git push auto-deploys to Vercel

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| npm install fails | Delete `node_modules/`, run `npm install` again |
| Port 3000 in use | `npm run dev -- -p 3001` (use different port) |
| Styles not loading | Make sure Tailwind is configured in `tailwind.config.ts` |
| Links not working | Check navigation links in `Header.tsx` match section IDs |
| Images not showing | Ensure images are in `public/` folder |

## 📞 Next Steps

1. ✅ Get it running locally
2. ✅ Customize your data
3. ✅ Deploy to Vercel
4. ✅ Get custom domain
5. ✅ Share everywhere!

## 🎓 Learn More

- **Next.js**: [nextjs.org](https://nextjs.org)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

**That's it! You now have a professional portfolio. Go build amazing things! 🚀**
