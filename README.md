# Lithionix Software LLP - Premium Company Website

A production-ready, enterprise-grade website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Fully Responsive**: Mobile-first design with premium animations
- **SEO Optimized**: Meta tags, OpenGraph, sitemap.xml, robots.txt
- **20+ Pages**: Home, About, Services, Solutions, Industries, Portfolio, Case Studies, Technologies, Careers, Blog, Contact, and legal pages
- **Premium Animations**: Scroll reveals, typing effects, counters, hover effects
- **KYC Compliant**: Business information, contact details, legal policies
- **Static Site Generation**: Zero backend cost, fast performance
- **Vercel Ready**: Optimized for deployment

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Email**: EmailJS (client-side)
- **SEO**: next-seo

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd lithionix_website
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
- `NEXT_PUBLIC_SITE_URL`: Your domain name
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service ID (for contact form)
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [https://vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Click "Deploy"

Or use Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx       # About Us
│   ├── services/page.tsx    # Services
│   ├── solutions/page.tsx   # Solutions
│   ├── industries/page.tsx  # Industries
│   ├── portfolio/page.tsx   # Portfolio
│   ├── case-studies/page.tsx
│   ├── technologies/page.tsx
│   ├── careers/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx     # Contact form
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── refund-policy/page.tsx
│   ├── cookie-policy/page.tsx
│   ├── shipping-delivery/page.tsx
│   ├── disclaimer/page.tsx
│   ├── sitemap.xml/route.ts
│   ├── robots.txt/route.ts
│   ├── layout.tsx           # Root layout with SEO
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Homepage sections
│   ├── animations/          # ScrollReveal, TypingAnimation, CountAnimation
│   ├── forms/               # ContactForm (client component)
│   └── ui/                  # Shadcn UI components
├── lib/
│   ├── constants.ts         # Company info, services, industries
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript types
```

## 🎨 Customization

### Update Company Information
Edit `src/lib/constants.ts`:
- Company name, tagline, contact details
- Services list with icons
- Industries served
- Technologies
- Navigation items
- Footer links

### Update SEO
Edit `src/app/layout.tsx`:
- Site title and description
- OpenGraph and Twitter Card metadata
- Google verification code

### Update Contact Form
Edit `src/components/forms/ContactForm.tsx`:
- Configure EmailJS credentials
- Add form validation with Zod
- Customize form fields

### Update Colors
Edit `src/app/globals.css`:
- Primary colors (blue/purple gradients)
- Background colors
- Typography settings

## 📄 Legal Pages

The following legal pages are included for KYC compliance:
- Privacy Policy
- Terms & Conditions
- Refund & Cancellation Policy
- Cookie Policy
- Shipping & Delivery Policy
- Disclaimer

**Important**: Update the placeholder company details (GST, CIN, address) before going live.

## 🔧 Configuration

### EmailJS Setup (Contact Form)
1. Create account at [https://www.emailjs.com](https://www.emailjs.com)
2. Add email service
3. Create email template
4. Update `.env.local` with credentials
5. Uncomment EmailJS code in `ContactForm.tsx`

### Google Analytics (Optional)
1. Create GA4 property
2. Add tracking ID to `.env.local`
3. Add analytics script to layout

### Google Maps (Optional)
1. Get API key from Google Cloud Console
2. Add to `.env.local`
3. Update map component in contact page

## 🎯 Performance

- **Static Site Generation**: All pages pre-rendered
- **Optimized Images**: Next.js Image component
- **Code Splitting**: Automatic by Next.js
- **Minimal JavaScript**: Client components only where needed
- **Lighthouse Score**: Target 100/100

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a private project for Lithionix Software LLP.

## 📝 License

Copyright © 2025 Lithionix Software LLP. All rights reserved.

## 📞 Contact

- **Email**: support@lithionixgroup.in
- **Sales**: sales@lithionixgroup.in
- **Website**: https://lithionixgroup.in

---

Built with ❤️ by Lithionix Software LLP