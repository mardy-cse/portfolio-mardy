# John Liton Mardy Portfolio Website

## Overview

This is a fully optimized, responsive portfolio website for John Liton Mardy, a professional Flutter developer from Bangladesh. Built with HTML, CSS, and JavaScript, the website showcases his expertise in cross-platform mobile application development. The site features comprehensive SEO optimization, responsive design across all devices, and real project portfolio including EBS, iCommune, and Namjari applications published on Google Play Store.

## User Preferences

- Preferred communication style: Simple, everyday language (Bengali/English)
- Mobile-first responsive design approach
- Professional portfolio with real projects (no mock/placeholder data)
- SEO optimization for search ranking

## Recent Changes

**September 13, 2025**: Email functionality improvements and content updates
- **Email Service Fix**: Replaced manual token handling with Replit Mail integration for reliable deployment
- **About Me Section**: Shortened content from 3 paragraphs to 2 concise paragraphs for better readability
- **Project Descriptions**: Updated to reflect collaborative development rather than solo work
- **Navigation Update**: Added Education and Work Experience sections with proper ordering
- **Production Ready**: Contact form now works reliably in both development and production environments

**September 12, 2025**: Complete SEO optimization and mobile layout improvements
- **SEO Optimization**: Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Search Engine Targeting**: Optimized for "John Liton Mardy" and "Flutter developer" searches
- **Mobile Hero Layout**: Fixed image positioning (Title → Image → Content structure)
- **Profile Image Size**: Increased from 200px to 280px (desktop), 120px to 180px (mobile)  
- **Skills Section**: Fixed text overlap issues on mobile with proper flexbox layout
- **Contact Form**: Left-aligned labels with centered submit button for better UX
- **Sitemap & Robots.txt**: Added for better search engine crawling
- **Real Project Integration**: EBS, iCommune, Namjari apps with authentic descriptions and Play Store links

**Previous Updates**: 
- Created comprehensive portfolio with Hero, About, Skills, Projects, and Contact sections
- Implemented fully responsive design with mobile/tablet/desktop breakpoints
- Replaced generic icons with custom technology logos (Flutter, Dart, Firebase, MySQL, Postman)
- Added interactive hover effects and smooth animations
- Set up HTTP server workflow on port 5000

## System Architecture

### Frontend Architecture
- **Static Site Structure**: Pure HTML/CSS/JavaScript implementation without frameworks
- **Single Page Application**: All content sections (home, about, skills, projects, contact) are contained within a single HTML file
- **Component-based Styling**: CSS organized around reusable components (navbar, hero, sections)
- **Mobile-First Design**: Responsive layout with mobile navigation toggle functionality
- **SEO-Optimized Structure**: Semantic HTML5, structured data (JSON-LD), and comprehensive meta tags
- **Real Content Integration**: Authentic project portfolio with Google Play Store links

### Design Patterns
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features
- **Semantic HTML Structure**: Proper use of HTML5 semantic elements for accessibility and SEO
- **CSS Custom Properties**: Modern CSS features for maintainable styling
- **Event-Driven JavaScript**: DOM manipulation through event listeners for user interactions
- **Mobile-Responsive Layouts**: Flexible CSS Grid/Flexbox with breakpoint-specific ordering
- **SEO-First Content**: Optimized content structure for search engine ranking

### Navigation System
- **Fixed Navigation Bar**: Sticky header with backdrop blur effects
- **Smooth Scrolling**: JavaScript-powered smooth transitions between sections
- **Active Link Highlighting**: Dynamic navigation state based on scroll position
- **Mobile Hamburger Menu**: Collapsible navigation for mobile devices

### Styling Architecture
- **Google Fonts Integration**: Poppins font family for typography
- **Material Icons**: Google Material Design icons for UI elements
- **CSS Grid/Flexbox**: Modern layout techniques for responsive design
- **CSS Transitions**: Smooth animations and hover effects

## SEO Optimization

### Meta Tags & Social Media
- **Title Tag**: "John Liton Mardy - Flutter Developer | Portfolio" (optimized for name + profession searches)
- **Meta Description**: 150-character description targeting key search terms
- **Keywords**: "John Liton Mardy, Flutter Developer, Mobile App Developer, Bangladesh Developer"
- **Open Graph**: Facebook/LinkedIn sharing optimization with profile image
- **Twitter Cards**: Professional summary cards for social media sharing
- **Canonical URL**: Prevents duplicate content issues

### Structured Data (JSON-LD Schema)
- **Person Schema**: Complete professional profile with contact details, skills, location
- **Website Schema**: Site information with search functionality
- **SoftwareApplication Schema**: Individual schemas for EBS, iCommune, and Namjari apps
- **Local Business Elements**: Bangladesh location targeting for regional searches

### Technical SEO
- **Sitemap.xml**: Complete site structure for search engine crawling
- **Robots.txt**: Proper crawler instructions and sitemap reference
- **Image Alt Tags**: Descriptive alt text for all images including project logos
- **Semantic HTML**: H1-H6 hierarchy optimized for search ranking
- **Mobile-First Indexing**: Responsive design prioritizing mobile experience

## External Dependencies

### Fonts and Icons
- **Google Fonts**: Poppins font family (weights: 300, 400, 500, 600, 700)
- **Google Material Icons**: Icon library for UI elements
- **Font Awesome**: Additional icon support

### Browser APIs
- **Intersection Observer**: For scroll-based navigation highlighting
- **Smooth Scroll API**: Native browser smooth scrolling functionality
- **CSS Backdrop Filter**: Modern browser blur effects for navigation

### Development Tools
- **No Build Process**: Direct file serving without compilation or bundling
- **Static Asset Structure**: Organized file hierarchy (assets/css/, assets/js/, assets/images/)
- **Custom Technology Logos**: Authentic Flutter, Dart, Firebase, MySQL, Postman logos