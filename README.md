# SEO Analytics Dashboard

A modern, responsive SEO analytics platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features a beautiful landing page with glassmorphism design, smooth animations, and a comprehensive component library.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Beautiful UI**: Tailwind CSS with ShadCN UI components and glassmorphism design
- **Smooth Animations**: Framer Motion for delightful user interactions
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Dark Mode**: Built-in dark mode support with system preference detection
- **Type Safety**: Full TypeScript support with strict configuration
- **Performance**: Optimized with Turbopack for lightning-fast development

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN UI + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand (ready to use)
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SEO
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like UI elements with backdrop blur
- **Gradient Text**: Beautiful gradient text effects for headings
- **Smooth Animations**: Subtle hover effects and page transitions
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Color System**: Carefully crafted color palette with dark mode support
- **Responsive Grid**: Flexible layouts that work on all devices

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/
│   └── ui/                # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
└── lib/
    └── utils.ts           # Utility functions
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color system is defined in `src/app/globals.css` using CSS custom properties. You can easily customize the theme by modifying these variables.

### Components
All UI components are built with ShadCN UI and can be customized by modifying the component files in `src/components/ui/`.

### Animations
Framer Motion animations can be customized in the component files. The current setup uses subtle, professional animations.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [ShadCN UI](https://ui.shadcn.com/) for the beautiful component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Built with ❤️ using modern web technologies
