# Mohd Irshad's Portfolio Website

A modern, responsive portfolio website showcasing full-stack development projects, competitive programming achievements, and technical skills.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive on mobile, tablet, and desktop
- **Performance**: Optimized with Next.js for fast load times
- **SEO Friendly**: Built-in SEO optimization with metadata
- **Dark Mode Ready**: Easy to adapt to dark mode
- **Component-Based**: Reusable React components for easy maintenance
- **Type-Safe**: Full TypeScript support

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)

## 📋 Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **Achievements** - Competitive programming rankings and stats
3. **Projects** - Featured full-stack projects with details
4. **Skills** - Organized technical skills by category
5. **About** - Professional background and experience
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/irshad/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Customization

### Update Portfolio Data

Edit `src/data/portfolio.ts` to customize:
- Personal information
- Project details
- Skills and experience
- Social links
- Achievements

### Modify Sections

Edit component files in `src/components/`:
- `Hero.tsx` - Hero section
- `Achievements.tsx` - Achievements
- `Projects.tsx` - Projects
- `Skills.tsx` - Skills
- `About.tsx` - About section
- `Contact.tsx` - Contact form

### Styling

Tailwind CSS is configured in `tailwind.config.ts`. Modify the theme to change colors, fonts, etc.

## 🎨 Colors

- **Primary**: Blue (#3b82f6)
- **Dark**: Gray (#1f2937)
- **Light**: Light gray (#f9fafb)

To change colors, edit `tailwind.config.ts` and update references in component files.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Select your portfolio repository
   - Click "Deploy"

3. **Configure Domain**
   - Buy domain (Namecheap, GoDaddy, etc.)
   - Add domain in Vercel settings
   - Update DNS records (Vercel will guide you)

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Connect to Netlify via GitHub
```

**GitHub Pages:**
1. Update `next.config.js` for static export
2. Run `npm run build`
3. Push `out/` folder to `gh-pages` branch

## 📧 Contact Form

The contact form currently uses `mailto:` for email submissions. To use a backend service:

1. Install email service (e.g., Resend, SendGrid)
2. Create API route in `src/app/api/contact/route.ts`
3. Update form submission in `src/components/Contact.tsx`

Example with Resend:
```typescript
// src/app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  
  await resend.emails.send({
    from: 'contact@irshad.dev',
    to: 'mohdirshad1306@gmail.com',
    subject: `New message from ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`
  });

  return Response.json({ success: true });
}
```

## 🔍 SEO Optimization

The site includes:
- Meta tags and descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast page load times
- Mobile-friendly design

## 📈 Performance

- **Lighthouse Score**: 90+ (target)
- **Page Speed**: < 2s load time
- **Core Web Vitals**: All green

To check performance:
```bash
npm run build
npm run start
# Use Chrome DevTools Lighthouse tab
```

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Hero.tsx            # Hero section
│   ├── Achievements.tsx     # Achievements
│   ├── Projects.tsx        # Projects
│   ├── Skills.tsx          # Skills
│   ├── About.tsx           # About
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
└── data/
    └── portfolio.ts        # Portfolio data

public/
└── projects/               # Project images (add here)

Configuration files:
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── postcss.config.js       # PostCSS config
```

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use.

## 📄 License

This project is open source and available under the MIT License.

## 🎯 TODO

- [ ] Add dark mode toggle
- [ ] Add blog section
- [ ] Add testimonials slider
- [ ] Add project filtering
- [ ] Add newsletter signup
- [ ] Add analytics

## 📞 Support

For questions or issues:
- Email: mohdirshad1306@gmail.com
- GitHub: https://github.com/irshad
- LinkedIn: https://linkedin.com/in/irshad/

---

**Last Updated**: 2024
**Made with ❤️ by Mohd Irshad**
