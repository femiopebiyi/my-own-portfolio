# 🎨 Component Reference Guide

## Component Overview

This document provides a quick reference for all the new components added to your portfolio.

---

## 🌓 ThemeToggle

**Location:** `src/components/ThemeToggle.tsx`

**Purpose:** Switches between light and dark themes

**Usage:**
```tsx
import ThemeToggle from './components/ThemeToggle';
<ThemeToggle />
```

**Styling:** Uses `.theme-toggle` class in App.css

---

## 📊 ScrollProgress

**Location:** `src/components/ScrollProgress.tsx`

**Purpose:** Shows reading progress at top of page

**Usage:**
```tsx
import ScrollProgress from './components/ScrollProgress';
<ScrollProgress />
```

**Features:**
- Auto-calculates scroll percentage
- Smooth spring animation
- Gradient color bar

---

## 📈 AnimatedStats

**Location:** `src/components/AnimatedStats.tsx`

**Purpose:** Display animated counting statistics

**Customization:**
```tsx
<Counter 
  end={15}              // Final number
  label="Projects"      // Label text
  suffix="+"           // Optional suffix
  duration={2}         // Animation duration in seconds
/>
```

**How to Edit:**
1. Open `AnimatedStats.tsx`
2. Modify the `<Counter>` components
3. Change numbers, labels, or add/remove counters

---

## 💬 Testimonials

**Location:** `src/components/Testimonials.tsx`

**Purpose:** Carousel of client testimonials

**How to Add Testimonial:**
```tsx
const testimonials: Testimonial[] = [
  {
    name: "Client Name",
    role: "Job Title",
    company: "Company Name",
    text: "Testimonial text here...",
  },
  // Add more here
];
```

**Features:**
- Auto-sliding carousel
- Manual navigation arrows
- Dot indicators
- Smooth transitions

---

## 📅 Timeline

**Location:** `src/components/Timeline.tsx`

**Purpose:** Visual career timeline

**How to Add Timeline Item:**
```tsx
const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "Your Achievement",
    description: "Description here",
    icon: "🎯" // Any emoji
  },
];
```

**Features:**
- Alternating left/right layout
- Scroll-triggered animations
- Icon bubbles
- Responsive design

---

## 🔍 ProjectFilter

**Location:** `src/components/ProjectFilter.tsx`

**Purpose:** Filter and search projects

**Integration Example:**
```tsx
const [filteredProjects, setFilteredProjects] = useState(projects);

<ProjectFilter 
  projects={allProjects} 
  onFilter={setFilteredProjects}
/>

{filteredProjects.map(project => (
  // Render project
))}
```

**Features:**
- Category filtering
- Real-time search
- Technology tag search

---

## 🎬 LoadingScreen

**Location:** `src/components/LoadingScreen.tsx`

**Purpose:** Beautiful loading animation

**Usage:**
```tsx
import LoadingScreen from './components/LoadingScreen';

<Suspense fallback={<LoadingScreen />}>
  <YourComponent />
</Suspense>
```

**Customization:**
- Change logo text in component
- Modify colors in App.css
- Adjust animation duration

---

## 🎮 EasterEgg

**Location:** `src/components/EasterEgg.tsx`

**Purpose:** Hidden Konami code activation

**Activation:**
1. Press: ↑ ↑ ↓ ↓ ← → ← → B A
2. Watch the magic happen!

**How to Customize:**
```tsx
// Change the code sequence
const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  // ... your custom sequence
];
```

---

## 🏷️ SEO Component

**Location:** `src/components/SEO.tsx`

**Purpose:** Add meta tags for SEO

**Usage in Pages:**
```tsx
import SEO from '../components/SEO';

<SEO 
  title="Custom Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
  url="https://yoursite.com/page"
/>
```

**What it Does:**
- Sets page title
- Adds meta descriptions
- Adds Open Graph tags (Facebook)
- Adds Twitter Card tags
- Improves search rankings

---

## 🎯 Advanced Component Tips

### Combining Components

**Example: Enhanced Project Page**
```tsx
<>
  <SEO title="My Projects" />
  <ProjectFilter projects={projects} onFilter={setFiltered} />
  <AnimatePresence>
    {filtered.map(project => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        {/* Project card */}
      </motion.div>
    ))}
  </AnimatePresence>
</>
```

### Animation Patterns

**Stagger Children:**
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div variants={childVariant}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

**Scroll Triggered:**
```tsx
import { useInView } from 'react-intersection-observer';

const { ref, inView } = useInView({
  threshold: 0.3,
  triggerOnce: true
});

<motion.div
  ref={ref}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  initial={{ opacity: 0, y: 50 }}
/>
```

---

## 🎨 Styling Guide

### Using Theme Variables

All components use CSS variables that change with theme:

```css
.your-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
}
```

**Available Variables:**
- `--bg-primary` - Main background
- `--bg-secondary` - Secondary background
- `--bg-tertiary` - Accent background
- `--text-primary` - Main text color
- `--text-secondary` - Secondary text
- `--text-inverse` - Opposite theme text
- `--accent-color` - Accent color
- `--accent-hover` - Hover state
- `--border-color` - Border color
- `--shadow` - Box shadow color

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Styles */
}

/* Tablet */
@media (max-width: 1000px) {
  /* Styles */
}

/* Desktop */
@media (min-width: 1001px) {
  /* Styles */
}
```

---

## 🔧 Common Customizations

### Change Animation Speed

**In Component:**
```tsx
transition={{ duration: 0.5 }} // Faster
transition={{ duration: 1.5 }} // Slower
```

**In CSS:**
```css
transition: all 0.3s ease; /* Adjust 0.3s */
```

### Disable Animations

```tsx
// In component
const shouldAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={shouldAnimate ? { ... } : {}}
/>
```

### Custom Color Scheme

Edit `:root` in `App.css`:
```css
:root {
  --accent-color: #YOUR_COLOR;
  --accent-hover: #YOUR_HOVER_COLOR;
}
```

---

## 📱 Mobile Optimization

All components are mobile-responsive:

- **Timeline**: Switches to vertical layout
- **Testimonials**: Hides navigation arrows
- **Stats**: Stacks vertically
- **ProjectFilter**: Smaller buttons
- **ThemeToggle**: Scaled down

Test on mobile:
1. Open DevTools (F12)
2. Toggle device toolbar
3. Select mobile device
4. Check all pages

---

## 🚀 Performance Tips

1. **Lazy Load Images:**
```tsx
<img loading="lazy" src="..." alt="..." />
```

2. **Code Split Routes:**
```tsx
const LazyComponent = lazy(() => import('./Component'));
```

3. **Memoize Expensive Calculations:**
```tsx
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

4. **Debounce Search:**
```tsx
const debouncedSearch = useMemo(
  () => debounce(handleSearch, 300),
  []
);
```

---

## 🐛 Debugging Tips

**Check Theme Issues:**
```javascript
// In console
localStorage.getItem('theme')
document.documentElement.getAttribute('data-theme')
```

**Test Animations:**
```javascript
// Disable animations temporarily
document.body.style.animation = 'none'
document.querySelectorAll('*').forEach(el => {
  el.style.animation = 'none';
});
```

**Monitor Performance:**
1. Open DevTools
2. Go to Performance tab
3. Record interaction
4. Check for janky animations

---

## 📚 Further Reading

- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)

---

**Happy Customizing! 🎉**
