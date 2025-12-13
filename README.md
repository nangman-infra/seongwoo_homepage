# Cloud Portfolio - DevOps Engineer

A modern, single-page personal portfolio website for a Cloud/DevOps Engineer student, built with Next.js 15 and featuring smooth animations and responsive design.

## 🚀 Features

- **Modern Design**: Minimalist design with bold typography and monochrome color scheme
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered scroll-triggered animations
- **Bento Grid Layout**: Trendy grid system for project showcase
- **Architecture Focus**: Highlights system architecture over UI screenshots
- **Performance Optimized**: Built with Next.js 15 and Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Next.js 15.x
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Projects.tsx     # Projects section
│   │   ├── Skills.tsx       # Skills section
│   │   └── Footer.tsx       # Footer
│   └── ui/
│       └── ProjectCard.tsx  # Project card component
├── data/
│   └── portfolio.ts         # Portfolio data
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design Identity

- **Reference**: POSTECH Developer Academy style
- **Key Concepts**: Impactful Storytelling, Bold Typography, Minimalism, Tech-Savvy
- **Color System**: Monochrome base (Black/Dark Grey/White) + Electric Blue/Purple accent
- **Layout**: Bento Grid style for project section

## 📱 Sections

1. **Hero Section**: Full viewport height with centered tagline and scroll indicator
2. **About Section**: Storytelling narrative with profile image placeholder
3. **Projects Section**: Bento grid layout highlighting system architecture
4. **Skills Section**: Categorized skill pills (Infrastructure & Cloud, CI/CD & Automation, Backend & Networking)
5. **Footer**: Contact links and back-to-top functionality

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cloud-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Portfolio Data
Edit `src/data/portfolio.ts` to customize:
- Personal information
- Project details
- Skills and technologies
- Contact information

### Modify Styling
- Global styles: `src/app/globals.css`
- Component styles: Individual component files using Tailwind CSS classes

### Add New Sections
1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update portfolio data if needed

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

- **next**: ^16.0.10
- **react**: ^19.0.0
- **framer-motion**: Latest
- **lucide-react**: Latest
- **tailwindcss**: Latest
- **typescript**: Latest

## 🌟 Key Features Implemented

- ✅ Responsive design with mobile-first approach
- ✅ Smooth scroll animations with Framer Motion
- ✅ Architecture diagram placeholders for DevOps projects
- ✅ Tech stack badges and categorized skills
- ✅ Professional contact links
- ✅ SEO optimized metadata
- ✅ Clean, maintainable code structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for Cloud/DevOps Engineers