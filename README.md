# Riha Hart Portfolio - Next.js + TypeScript + Tailwind CSS

A modern, responsive portfolio website for Riha Hart, Product Designer based in New York City.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server runs on `http://localhost:3000`

## 🏗️ Project Structure

```
riha-hart-portfolio/
├── public/               # Static assets (images, SVGs, GIFs)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   ├── about/        # About page
│   │   └── globals.css   # Global styles with Tailwind
│   ├── components/       # React components (.tsx)
│   └── styles/           # Additional CSS files
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
└── README.md             # This file
```

## 🎨 Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript with strict mode
- ✅ Tailwind CSS with custom theme
- ✅ Server-side rendering (SSR)
- ✅ Optimized images with next/image
- ✅ File-based routing
- ✅ Fast refresh for instant feedback
- ✅ Fully responsive design
- ✅ Custom brand colors
- ✅ IBM Plex Sans Condensed font
- ✅ Path aliases (@/_ for src/_)

## 🎨 Custom Tailwind Theme

Custom colors configured in `tailwind.config.js`:

- `brand-teal`: #64DBBE
- `brand-bg`: #F6FCFA
- `brand-dark`: #292929

Use them in your components:

```tsx
<div className="bg-brand-teal text-brand-dark">Hello World</div>
```

## 📝 TypeScript

TypeScript is configured with:

- Strict mode enabled
- Path aliases: `@/*` maps to `src/*`
- Full type checking for React and Next.js

Example usage:

```tsx
import MyComponent from "@/components/MyComponent";

interface Props {
  title: string;
  description: string;
}

export default function Page({ title, description }: Props) {
  return <div>{title}</div>;
}
```

## 🌐 Deployment

Deploy to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or deploy to:

- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

---

**Made with ❤️ by Riha Hart**
