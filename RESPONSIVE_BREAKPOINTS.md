# 📱 Responsive Breakpoints Guide

## Overview
Your portfolio is now fully responsive across all device sizes, from large desktop screens down to small mobile devices (360px and below).

## Breakpoint Structure

### 🖥️ Desktop
**Default styles** - No media query needed
- Optimal for screens > 1300px
- Full layout with all features visible
- Large typography and spacing

### 📊 Large Tablets & Small Desktops
**@media (max-width: 1300px)**
- Adjusted container widths
- Optimized timeline layout

### 💻 Tablets & Medium Screens
**@media (max-width: 1200px)**
- Timeline max-width: 900px
- Timeline content max-width: 400px

### 📱 Small Tablets & Large Phones
**@media (max-width: 1000px)**
- Theme toggle: 40px × 40px
- Stats container: Stacked vertically
- Testimonial navigation hidden
- Timeline switches to single column (left-aligned)
- Filter buttons: Reduced padding

### 📱 Standard Phones
**@media (max-width: 900px)**
- Compact navigation
- Adjusted hero section layout

### 📱 Medium Phones
**@media (max-width: 800px)**
- Further typography scaling
- Reduced padding throughout

### 📱 Small Phones
**@media (max-width: 450px)**
- Hero image: 100% width
- Font size: 1.5rem for main heading
- Compact stack section
- Reduced ability section spacing

### 📱 Extra Small Phones (NEW)
**@media (max-width: 360px)**
- **Base font-size: 14px**
- **Optimized for devices like:**
  - iPhone SE (1st gen): 320px
  - Samsung Galaxy Fold (folded): 280px
  - Small Android phones: 320-360px

## 360px Breakpoint Details

### Typography Scaling
```css
h1: 1.5rem
h2: 1.2rem
h3: 1rem
h4: 0.9rem
body: 14px
```

### Component Adjustments

#### Navigation
- Logo: 1.1rem
- Theme toggle: 32px × 32px
- Reduced margins (3px)

#### Hero Section
- Max image width: 280px
- Heading: 1.25rem
- CTA button: 0.85rem font size
- Reduced padding to 1em

#### Recent Work
- Project cards: 1em padding
- Project titles: 1.1rem
- Stack tags: 0.75rem
- Visit button: 0.8rem

#### Timeline
- Icon size: 35px × 35px
- Content max-width: calc(100vw - 80px)
- Date badge: 0.7rem
- Titles: 0.95rem

#### Testimonials
- Card padding: 1.2em
- Text: 0.9rem
- Author: 0.85rem
- Role: 0.7rem

#### Forms
- Input padding: 0.8em
- Label: 0.9rem
- Submit button: 0.9rem

## Testing Responsive Design

### In Chrome DevTools
1. Open DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select device or enter custom dimensions
4. Test these widths:
   - 320px (iPhone SE)
   - 360px (Small Android)
   - 375px (iPhone 8)
   - 414px (iPhone Plus)
   - 768px (iPad)
   - 1024px (iPad Pro)

### Manual Testing
```bash
# Run dev server
npm run dev

# Open in browser and resize to test:
# - 320px width
# - 360px width
# - 450px width
# - 800px width
# - 1000px width
```

## Best Practices Used

### ✅ Mobile-First Considerations
- Reduced padding on small screens
- Stacked layouts for narrow widths
- Touch-friendly button sizes (min 32px)
- Readable font sizes (min 14px body text)

### ✅ Performance
- No heavy media queries
- CSS-only responsive design
- Efficient selectors

### ✅ Accessibility
- Maintained color contrast ratios
- Keyboard navigation preserved
- Screen reader friendly
- Touch targets meet WCAG standards

## Common Issues & Solutions

### Issue: Text Overflow
**Solution:** All headings have responsive font sizes that scale down

### Issue: Horizontal Scroll
**Solution:** Max-widths set to `calc(100vw - padding)` for wide elements

### Issue: Buttons Too Small
**Solution:** Minimum touch target of 32px maintained

### Issue: Images Breaking Layout
**Solution:** All images use `max-width: 100%` and proper containers

## Future Improvements

If you need to adjust for even smaller screens (< 320px), consider:
1. Further reducing font sizes
2. Hiding non-essential decorative elements
3. Simplifying complex layouts
4. Using icon-only navigation

## Quick Reference Card

```
Screen Size    | Breakpoint | Key Changes
---------------|------------|---------------------------
> 1300px       | Default    | Full desktop layout
1200-1300px    | 1300px     | Adjusted timeline
1000-1200px    | 1200px     | Narrower containers
900-1000px     | 1000px     | Single column timeline
800-900px      | 900px      | Compact sections
450-800px      | 800px      | Mobile optimizations
360-450px      | 450px      | Small phone layout
≤ 360px        | 360px      | Extra small devices ✨NEW
```

---

**Last Updated:** November 2025  
**Tested On:** Chrome, Firefox, Safari, Edge  
**Minimum Supported Width:** 280px (Samsung Galaxy Fold)
