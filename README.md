# Varun Kanneganti - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Cloud Engineer and Java Backend Developer.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Contact Form**: Functional contact form with email integration
- **Performance Optimized**: Fast loading with modern web technologies

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Deployment**: AWS S3 + CloudFront
- **Build Tool**: Vite

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExtrasSection.tsx
│   └── ContactSection.tsx
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/varunkanneganti/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Deploy to AWS S3

The project includes GitHub Actions workflow for automated deployment to AWS S3:

1. Configure AWS credentials in GitHub Secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

2. Update the S3 bucket name in `.github/workflows/deploy.yml`

3. Push to main branch to trigger deployment

## 🎨 Customization

### Colors & Themes

The design system uses CSS custom properties defined in `src/index.css`. You can customize:

- Primary colors
- Background colors
- Typography
- Shadows and effects

### Content

Update the content in each section component:

- **Hero**: `src/components/HeroSection.tsx`
- **About**: `src/components/AboutSection.tsx`
- **Skills**: `src/components/SkillsSection.tsx`
- **Projects**: `src/components/ProjectsSection.tsx`
- **Contact**: `src/components/ContactSection.tsx`

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `src/components/ContactSection.tsx`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- UI components built with [Radix UI](https://www.radix-ui.com/)