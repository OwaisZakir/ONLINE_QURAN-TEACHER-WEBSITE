# Modern Design & Animation Guide

## Overview
This project has been completely redesigned with modern animations and interactions using Framer Motion and GSAP. The new design system provides a premium, engaging user experience with smooth transitions and interactive elements.

## Key Features

### 🎬 Animation Libraries

#### Framer Motion
- Component-level animations
- Gesture-based animations (hover, tap, drag)
- Advanced layout animations
- Page transition animations
- Stagger animations for lists and grids

#### GSAP (GreenSock Animation Platform)
- Scroll-triggered animations
- Parallax effects
- Timeline-based animations
- High-performance scroll animations
- Advanced easing functions

### 🎨 Design System

#### Color Palette
- **Primary**: Emerald Green (`hsl(166 93% 22%)`)
- **Gold/Accent**: Gold (`hsl(47 69% 53%)`)
- **Secondary**: Cream/Beige (`hsl(40 20% 96%)`)
- **Modern Gradients**: Sophisticated gradient combinations

#### Typography
- **Sans**: Inter, system-ui
- **Urdu**: Noto Nastaliq Urdu (for bilingual support)
- Responsive scaling and optimal line heights

### ✨ Animation Components

#### 1. **Header Component**
```tsx
Features:
- Sticky header with scroll-based transparency
- Animated logo on load
- Staggered navigation items
- Smooth menu animations
- Responsive mobile menu with transitions
```

#### 2. **ServiceCard Component**
```tsx
Features:
- Hover lift effect
- Icon scale and rotate on hover
- Gradient background fade on hover
- Staggered list items animation
- Smooth border color transitions
```

#### 3. **TestimonialCard Component**
```tsx
Features:
- Entrance animations from multiple directions
- Star rating hover effects
- Quote icon animation
- Divider scale animation
- Avatar scale and border animations
```

#### 4. **Footer Component**
```tsx
Features:
- Staggered section animations
- Link hover effects with arrow indicators
- Icon scale animations on hover
- Smooth color transitions
- Grouped animations for contact items
```

#### 5. **WhatsApp Button**
```tsx
Features:
- Spring-based scale animation on load
- Pulse effect on hover
- Rotation animation on interaction
- Smooth tooltip appearance
- Responsive shadow effects
```

### 🚀 New Components

#### AnimatedBackground
A reusable component for animated gradient backgrounds with floating orbs.

```tsx
import AnimatedBackground from "@/components/AnimatedBackground";

<AnimatedBackground variant="primary" animated={true} />
```

#### ScrollIndicator
Floating scroll indicator that appears on page load and disappears on scroll.

```tsx
import ScrollIndicator from "@/components/ScrollIndicator";

<ScrollIndicator />
```

#### SectionDivider
Multiple animated divider styles for section separation.

```tsx
import SectionDivider from "@/components/SectionDivider";

<SectionDivider variant="wave" />
<SectionDivider variant="diagonal" />
<SectionDivider variant="dots" />
<SectionDivider variant="line" />
```

#### SkeletonLoader
Modern loading skeleton with shimmer effects.

```tsx
import SkeletonLoader from "@/components/SkeletonLoader";

<SkeletonLoader variant="card" count={3} />
<SkeletonLoader variant="text" count={5} />
```

#### AnimatedCounter
Animated number counter for statistics.

```tsx
import AnimatedCounter from "@/components/AnimatedCounter";

<AnimatedCounter from={0} to={500} suffix="+" duration={2} />
```

### 🎯 Animation Hooks

#### useGsapScroll
Trigger animations on scroll.

```tsx
const ref = useGsapScroll(".item", {
  from: { opacity: 0, y: 50 },
  to: { opacity: 1, y: 0, duration: 0.8 }
});
```

#### useGsapParallax
Create parallax scroll effects.

```tsx
const ref = useGsapParallax(".parallax-element", 0.5);
```

#### useGsapHover
Handle hover animations with GSAP.

```tsx
const ref = useGsapHover(".card", {
  enter: { scale: 1.1 },
  leave: { scale: 1 }
});
```

#### useGsapStagger
Create staggered animations for multiple elements.

```tsx
const ref = useGsapStagger(".item", {
  from: { opacity: 0, y: 30 },
  to: { opacity: 1, y: 0 }
});
```

### 📱 Responsive Design

All animations are responsive and adapt to different screen sizes:
- Mobile-optimized animations
- Touch-friendly interactions
- Reduced motion support for accessibility
- Smooth scaling across devices

### ♿ Accessibility

- Respects `prefers-reduced-motion` preference
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast colors

### 🎬 Page Animations

#### Home Page
- Parallax hero section
- Staggered stat counters
- Scroll-triggered service cards
- Animated testimonials
- Floating background orbs
- CTA button animations

#### Header
- Smooth scroll state transitions
- Animated navigation underlines
- Mobile menu expand/collapse
- Logo rotation on hover

#### Footer
- Staggered column animations
- Link hover effects with arrows
- Contact icon animations
- Smooth section transitions

## CSS Animation Classes

### Utility Classes
```css
.transition-smooth     /* Smooth transitions */
.transition-fast       /* Fast transitions */
.transition-slow       /* Slow transitions */
.animate-float         /* Floating motion */
.animate-glow          /* Glow effect */
.animate-shimmer       /* Shimmer effect */
.hover-lift            /* Hover lift effect */
.hover-scale           /* Hover scale effect */
.hover-glow            /* Hover glow effect */
```

### Tailwind Animation Utilities
```css
.animate-fade-in       /* Fade in animation */
.animate-slide-in-up   /* Slide in from bottom */
.animate-slide-in-down /* Slide in from top */
.animate-slide-in-left /* Slide in from left */
.animate-slide-in-right /* Slide in from right */
.animate-scale-in      /* Scale in animation */
.animate-bounce-soft   /* Soft bounce */
.animate-float         /* Float animation */
```

## Color Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, hsl(166 93% 22%), hsl(166 85% 16%));
```

### Gold Gradient
```css
background: linear-gradient(135deg, hsl(47 69% 53%), hsl(40 75% 48%));
```

### Hero Gradient
```css
background: linear-gradient(135deg, hsl(166 93% 22% / 0.95), hsl(166 85% 16% / 0.98));
```

## Performance Optimizations

- Hardware-accelerated animations using `transform` and `opacity`
- Lazy loading with scroll triggers
- Optimized GSAP animations with proper cleanup
- Reduced motion support for accessibility
- Efficient re-renders with proper dependency tracking

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Best Practices

### When Creating New Components

1. **Use Framer Motion for:**
   - Component entrance/exit animations
   - Hover and tap interactions
   - Layout animations
   - Gesture-based effects

2. **Use GSAP for:**
   - Scroll-triggered animations
   - Complex timelines
   - High-performance scroll effects
   - Parallax and advanced effects

3. **CSS Animations for:**
   - Simple, repeating animations
   - Utility-based effects
   - Loading states

### Performance Tips

1. Use `whileInView` with `viewport={{ once: true }}` to animate once
2. Clean up GSAP animations in useEffect returns
3. Use `transform` and `opacity` for best performance
4. Avoid animating too many elements simultaneously
5. Use `css` instead of `box-shadow` for hover effects when possible

## Customization

### Changing Colors

Edit `/src/index.css`:
```css
:root {
  --primary: 166 93% 22%;
  --gold: 47 69% 53%;
  /* ... other colors ... */
}
```

### Modifying Animation Timing

Edit component animation `transition` props or `/src/App.css` for keyframe animations.

### Adding New Animations

1. Add keyframes to `/src/App.css` or `tailwind.config.ts`
2. Create reusable variants in components
3. Use GSAP hooks for scroll-based animations
4. Document new animations here

## Future Enhancements

- [ ] Page transition animations
- [ ] Advanced scroll animations
- [ ] Gesture-based micro-interactions
- [ ] Dark mode animations
- [ ] Form input animations
- [ ] Loading skeleton improvements

## Troubleshooting

### Animations Not Working
- Check browser console for errors
- Ensure Framer Motion and GSAP are installed
- Verify component ref is properly attached
- Check z-index layering

### Performance Issues
- Reduce number of animated elements
- Use `will-change` CSS property
- Implement virtual scrolling for long lists
- Profile with Chrome DevTools

### Mobile Animation Issues
- Test on actual devices
- Reduce animation complexity
- Enable hardware acceleration
- Check touch event handling

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS Animation](https://tailwindcss.com/docs/animation)
- [Web Animation Performance](https://web.dev/animations-guide/)

---

Last Updated: 2024
Version: 2.0 (Modern Design)
