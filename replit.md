# CodSphere Web Application

## Overview
CodSphere is a Next.js-based corporate website showcasing AI-powered ERP, CRM, and automation solutions. The application features multiple pages including services, case studies, blog, and contact functionality.

## Recent Changes (September 5, 2025)
- Successfully imported GitHub repository to Replit environment
- Configured Next.js for Replit proxy support with allowedDevOrigins configuration
- Set up development workflow on port 5000 with proper host configuration (0.0.0.0)
- Disabled Turbopack to resolve symlink and compilation issues
- Configured autoscale deployment for production
- Implemented comprehensive mobile responsive design based on Figma specifications
- Enhanced service cards with larger images on mobile (240px height) to reduce white space
- Optimized mobile typography, spacing, and touch targets across all components

## Project Architecture
- **Framework**: Next.js 15.4.6 with TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI components with custom styling
- **Animation**: Framer Motion for animations
- **Build System**: Standard Next.js webpack (Turbopack disabled)
- **Package Manager**: npm

## Key Configuration
- **Development Server**: Runs on port 5000, bound to 0.0.0.0 for Replit compatibility
- **Cross-Origin Support**: Configured allowedDevOrigins for Replit proxy
- **Deployment**: Autoscale deployment target with npm build/start commands

## Structure
- `/src/app/`: Next.js app router pages
- `/src/components/`: Reusable React components organized by feature
- `/public/images/`: Static assets and images
- **API Routes**: Contact form endpoint at `/api/contact`

## Development Status
✅ Dependencies installed and working
✅ Development server running successfully
✅ All TypeScript errors resolved
✅ Replit proxy configuration complete
✅ Deployment configuration set up

## Known Issues
- Some static assets (fonts, video files) return 404 but don't affect core functionality
- Cross-origin warnings in console (expected behavior, doesn't affect functionality)