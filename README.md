# 🚀 Portfolio Website

A beautiful, responsive, and performant portfolio website built with cutting-edge web technologies. This project showcases a clean architecture, type-safe code, and modern design patterns.

## ✨ Features

- **⚡ Next.js 15** - Latest App Router with React Server Components
- **🎨 Modern UI** - Beautiful animations and smooth transitions
- **🌗 Dark Mode** - Seamless theme switching with next-themes
- **📱 Responsive Design** - Looks great on all devices
- **🎯 Type-Safe** - Full TypeScript support with strict mode
- **🎭 Component Architecture** - Modular, reusable, and maintainable
- **♿ Accessible** - Following WCAG guidelines
- **🔍 SEO Optimized** - Comprehensive metadata and OpenGraph tags
- **⚙️ Well-Organized** - Clear separation of concerns

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   │
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   │   ├── hero.tsx       # Hero/Landing section
│   │   │   ├── about.tsx      # About section
│   │   │   ├── skills.tsx     # Skills section
│   │   │   ├── projects.tsx   # Projects section
│   │   │   ├── experience.tsx # Experience section
│   │   │   ├── contact.tsx    # Contact section
│   │   │   ├── socials.tsx    # Social links
│   │   │   └── index.ts       # Section exports
│   │   │
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── floating-dock.tsx
│   │   │   └── ...
│   │   │
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── theme-toggle.tsx   # Theme switcher component
│   │
│   ├── constants/             # Static data
│   │   ├── skills.ts          # Skills data
│   │   ├── projects.ts        # Projects data
│   │   ├── experience.ts      # Work experience data
│   │   ├── personal-info.ts   # Personal information
│   │   ├── social-links.ts    # Social media links
│   │   └── index.ts           # Constant exports
│   │
│   ├── types/                 # TypeScript definitions
│   │   └── index.ts           # Type definitions
│   │
│   ├── config/                # Configuration
│   │   ├── site.ts            # Site-wide config
│   │   └── index.ts           # Config exports
│   │
│   └── lib/                   # Utilities
│       └── utils.ts           # Helper functions
│
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🏗️ Architecture & Design Patterns

### 1. **Separation of Concerns**
- **Components**: Pure presentation logic
- **Constants**: Static data separated from components
- **Types**: Centralized TypeScript interfaces
- **Config**: Application-wide settings

### 2. **Component Organization**
- **Sections**: Large page sections (Hero, About, Projects, etc.)
- **UI Components**: Reusable, atomic components
- **Layout Components**: Structure and theme providers

### 3. **Type Safety**
- Comprehensive TypeScript interfaces for all data structures
- Strict type checking enabled
- No implicit `any` types

### 4. **Scalability**
- Easy to add new sections
- Simple to extend with new features
- Clear file organization

### 5. **Best Practices**
- **Single Responsibility**: Each component has one job
- **DRY Principle**: Data defined once in constants
- **Composition**: Components built from smaller pieces
- **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### 1. Personal Information
Update your personal details in `src/constants/personal-info.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  email: 'your.email@example.com',
  location: 'Your Location',
};
```

### 2. Skills
Add or modify your skills in `src/constants/skills.ts`:

```typescript
export const SKILLS: Skill[] = [
  { name: 'React', category: 'frontend', proficiency: 'expert' },
  // Add more skills...
];
```

### 3. Projects
Showcase your projects in `src/constants/projects.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'Project description...',
    technologies: ['Next.js', 'TypeScript'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
];
```

### 4. Experience
Add your work experience in `src/constants/experience.ts`:

```typescript
export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    title: 'Job Title',
    company: 'Company Name',
    startDate: '2023-01',
    endDate: 'Present',
    description: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech 1', 'Tech 2'],
  },
];
```

### 5. Social Links
Configure your social media in `src/constants/social-links.ts`:

```typescript
export const SOCIAL_LINKS = [
  {
    title: 'GitHub',
    href: 'https://github.com/username',
    iconName: 'IconBrandGithub',
  },
  // Add more links...
];
```

### 6. Site Configuration
Update metadata and site config in `src/config/site.ts` and `src/app/layout.tsx`

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Aceternity UI](https://ui.aceternity.com) && [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Tabler Icons](https://tabler-icons.io/)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Code Quality**: [Biome](https://biomejs.dev/)

## 📜 Available Scripts

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint and format check
pnpm lint

# Format code
pnpm format
```

## 🎯 Adding New Sections

1. **Create the section component** in `src/components/sections/new-section.tsx`
2. **Add data constants** in `src/constants/new-data.ts`
3. **Define types** in `src/types/index.ts` if needed
4. **Export the section** in `src/components/sections/index.ts`
5. **Import and use** in `src/app/page.tsx`

Example:
```typescript
// src/components/sections/testimonials.tsx
export function Testimonials() {
  return (
    <section id="testimonials">
      {/* Your content */}
    </section>
  );
}

// src/app/page.tsx
import { Testimonials } from "@/components/sections";

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <Testimonials />
    </main>
  );
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy! 🎉

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- **Netlify**: Full support for Next.js
- **AWS Amplify**: Great for AWS integration
- **Cloudflare Pages**: Fast edge deployment
- **Docker**: Use the included Dockerfile (if you create one)

## 🔧 Performance Optimization

- ✅ Server-side rendering with Next.js
- ✅ Image optimization with `next/image`
- ✅ Code splitting and lazy loading
- ✅ Font optimization with `next/font`
- ✅ Turbopack for faster builds

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).


## 📧 Contact

cadunass - [@cadunass](https://cadunass.com) - cadunass0@gmail.com



