# Design Updates - Modern Portfolio (dev.io Style)

## Overview

Portfolio Anda telah diupdate dengan desain modern seperti dev.io, menggunakan **Tailwind CSS** dan tema **dark mode** yang elegan dengan aksen **purple gradient**.

## Perubahan Utama

### 1. **Tailwind CSS Integration**

- ✅ Installed Tailwind CSS dengan PostCSS
- ✅ Configured `tailwind.config.js` dengan custom colors
- ✅ Updated `main.css` dengan @tailwind directives

### 2. **Navbar Component**

**File:** `/src/components/layout/Navbar.vue`

- Logo: "dev.io" dengan gradient text
- Navigation: Home, Work, Blog, Contact
- "Hire Me" button dengan purple gradient
- Mobile responsive hamburger menu
- Glass effect backdrop dengan blur

### 3. **Hero Section**

**File:** `/src/components/layout/Hero.vue`

- "Available for work" badge dengan green dot
- Main title dengan gradient highlight pada "experiences"
- Subtitle dan CTA buttons (View My Work, Contact Me)
- Skills cards grid (Frontend, Backend, Architecture, DevOps)
- "Have a project in mind?" CTA section

### 4. **Project Cards**

**File:** `/src/components/projects/ProjectCard.vue`

- Glass effect card design
- Image with overlay on hover
- Tech stack badges
- GitHub dan Live Demo links
- Smooth hover animations

### 5. **Projects Page**

**File:** `/src/views/Projects.vue`

- "My Work" header dengan subtitle
- Filter buttons untuk filter by technology
- Responsive grid layout
- Status loading dan error handling

### 6. **Home Page**

**File:** `/src/views/Home.vue`

- Hero section full screen
- "Selected Work" - Featured projects grid
- "Latest Articles" - Blog posts grid
- Smooth animations dengan staggered delays

### 7. **Contact Page**

**File:** `/src/views/About.vue`

- "Let's work together" header
- Contact form (Name, Email, Message)
- Contact info cards (Email, Location, Availability)
- Social media links
- Technical Arsenal skills grid

### 8. **Footer**

**File:** `/src/components/layout/Footer.vue`

- Brand section dengan gradient text
- Quick navigation links
- Social media buttons
- Copyright info

## Color Palette

```css
Primary: #6366f1 (Purple)
Secondary: #1e293b (Dark Blue-Gray)
Accent: #a78bfa (Light Purple)
Background: #0f172a (Dark)
Card Background: #1e293b with 50% opacity
Border: #334155

Emerald (Accent): #34d399 (Available status)
```

## Key Features

### 🎨 Design

- Dark mode dengan purple gradient accents
- Glass effect cards dengan backdrop blur
- Smooth transitions dan animations
- Responsive mobile design

### ✨ Components

- Reusable badge component
- Glass-effect cards
- Gradient text
- Smooth hover effects
- Loading states

### 📱 Responsive

- Mobile-first design
- Tablet optimized
- Desktop enhanced layouts

## Usage

### Button Classes

```html
<!-- Primary Button (White) -->
<button class="btn btn-primary">View My Work</button>

<!-- Secondary Button (Outline) -->
<button class="btn btn-secondary">Contact Me</button>

<!-- Accent Button (Purple) -->
<button class="btn btn-accent">Hire Me</button>
```

### Card Classes

```html
<!-- Glass Effect Card -->
<div class="card-glass p-6">Content</div>

<!-- Badge Component -->
<div class="badge">
  <span class="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
  Available for work
</div>
```

### Typography

```html
<!-- Section Title -->
<h1 class="section-title">Building digital experiences that matter.</h1>

<!-- Section Subtitle -->
<p class="section-subtitle">Subtitle text</p>

<!-- Gradient Text -->
<span class="gradient-text">Highlighted text</span>
```

## Animation Classes

- `.fade-in` - Fade in animation
- `.float` - Float up and down
- `.pulse-glow` - Pulsing glow effect
- `.transition-smooth` - Smooth transitions

## File Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.vue (✅ Updated)
│   │   │   ├── Hero.vue (✅ Updated)
│   │   │   └── Footer.vue (✅ Updated)
│   │   ├── projects/
│   │   │   ├── ProjectCard.vue (✅ Updated)
│   │   │   └── ProjectList.vue (✅ Updated)
│   │   └── common/
│   │       └── Button.vue
│   ├── views/
│   │   ├── Home.vue (✅ Updated)
│   │   ├── Projects.vue (✅ Updated)
│   │   ├── About.vue (✅ Updated)
│   │   ├── Blog.vue
│   │   └── BlogDetail.vue
│   └── assets/
│       └── styles/
│           ├── main.css (✅ Updated with Tailwind)
│           └── variables.css
├── tailwind.config.js (✅ New)
├── postcss.config.js (✅ New)
└── package.json (✅ Updated)
```

## Dependencies Added

```json
{
  "devDependencies": {
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

## Next Steps

1. **Customize Content**

   - Update profile data di profile store
   - Replace placeholder images dengan real project images
   - Update social media links

2. **Add Missing Components**

   - Update Blog components styling
   - Complete BlogCard styling
   - Add loading spinners styling

3. **Connect Backend API**

   - Ensure API endpoints match expected data format
   - Test project, blog, and profile data fetching

4. **Deploy**
   - Build untuk production: `npm run build`
   - Configure nginx untuk serving assets
   - Test responsive design di berbagai devices

## Development Tips

### Hot Reload

Dev server berjalan di `http://localhost:3000` dengan hot module replacement

### Tailwind Utilities

Gunakan Tailwind utility classes untuk styling:

```html
<!-- Responsive padding -->
<div class="p-4 md:p-8 lg:p-12">
  <!-- Gradient backgrounds -->
  <div class="bg-gradient-dark">
    <!-- Responsive grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
  </div>
</div>
```

### Custom Classes

Defined di `main.css`:

- `.btn` - Button base styles
- `.badge` - Badge component
- `.card-glass` - Glass effect cards
- `.section-title` - Section headings
- `.gradient-text` - Gradient text

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

---

**Last Updated:** December 27, 2025
**Design Inspiration:** dev.io portfolio
**Framework:** Vue 3 + Tailwind CSS
