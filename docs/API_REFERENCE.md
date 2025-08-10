### API Reference

This document provides comprehensive documentation for all public APIs, components, hooks, utilities, constants, configuration, and types in this repository. Example usage snippets are provided for each export.

- Components
  - Layout and Structure: `Layout`, `Section`, `Navbar`, `MainContent`
  - Hero: `Hero`, `ProfileInfo`, `ProfileImage` (hero), `CustomCursor`, `ScrollIndicator`, `TechSkills`, `HeroBackground`
  - About: `About`, `ProfileImage` (about), `KeyPoint`, `StatCard`
  - Experience: `Experience`, `ExperienceTimeline`, `ExperienceCard`, `TechnologyFilter`, `AchievementsSection`, `BackgroundEffects`, `CompanyLogos`, `CompanyLogoCard`
  - Skills: `Skills`, `SkillsBackground`, `StarRating`
  - Projects: `Projects`, `ProjectsBackground`, `ProjectCard`, `GitHubRepos`, `ProjectSearch`
  - Shared: `ResponsiveImage` (+ variants), `SectionHeader`, `AnimatedWrapper` (+ variants), `ErrorBoundary`, `withErrorBoundary`
- Hooks: `useResponsive`, `useMobileDetection`, `useCustomCursor`, `useScrollAnimation`, `useProjectFilter`, `useScrollSmooth`
- Utilities: filtering, sorting, grouping, formatting, debounce/throttle, etc.
- Constants: animation variants, responsive breakpoints, z-index, colors, etc.
- Config: env/app/performance/seo/analytics/feature flags/theme/content/error/accessibility/dev
- Types: core interfaces and aliases
- Analytics: `pageview`, `trackEvent`

---

### Components

#### Layout

- Export: default `Layout({ children }: { children: ReactNode })`
- Purpose: Wraps pages with a sticky progress bar and `Navbar`.
- Usage:
```tsx
import Layout from '@/app/components/layout/Layout';

export default function Page() {
  return (
    <Layout>
      {/* content */}
    </Layout>
  );
}
```

#### Section

- Export: default `Section({ children, className?, id? })`
- Purpose: Animated section wrapper with scroll-based opacity.
- Props:
  - `id?: string`
  - `className?: string`
- Usage:
```tsx
import Section from '@/app/components/Section';

<Section id="about" className="py-24">
  <div>Content</div>
</Section>
```

#### Navbar

- Export: default `Navbar()`
- Purpose: Top navigation with desktop links and animated mobile menu. Uses `data/navbar.json`.
- Usage:
```tsx
import Navbar from '@/app/components/Navbar';

<Navbar />
```

#### MainContent

- Export: default `MainContent()`
- Purpose: Orchestrates all site sections using an internal `SectionConfig[]`.
- Usage: Typically rendered inside `Layout`.

```tsx
import MainContent from '@/app/components/MainContent';

<MainContent />
```

#### Hero

- Export: named `Hero`, default legacy export.
- Purpose: Landing section with `ProfileInfo`, `TechSkills`, custom cursor, and background.
- Usage:
```tsx
import { Hero } from '@/app/components/hero/Hero';

<Hero />
```

##### ProfileInfo (Hero)
- Export: named `ProfileInfo`, default legacy export.
- Purpose: Name, rotating titles (typewriter), CTAs.

##### ProfileImage (Hero)
- Export: default `ProfileImage()`
- Purpose: Displays profile image with animation.

##### CustomCursor
- Export: default `CustomCursor({ cursorPosition, showCursor })`
- Props:
  - `cursorPosition: { x: number; y: number }`
  - `showCursor: boolean`

##### ScrollIndicator
- Export: default `ScrollIndicator()`
- Purpose: Animated scroll cue.

##### TechSkills
- Export: default `TechSkills()`
- Purpose: Grid of skill cards; tracks click events.

##### HeroBackground
- Export: named `HeroBackground`
- Purpose: Gradient orbs, wave SVG, geometric pattern.

#### About

- Export: default `About()`
- Purpose: About section with animated stats and key points; data from `data/about.json`.

##### KeyPoint
- Export: default `KeyPoint({ title, description, icon })`

##### ProfileImage (About)
- Export: default `ProfileImage()`

##### StatCard
- Export: default `StatCard({ label, value })`

#### Experience

- Export: default `Experience()`
- Purpose: Experience section with filter, timeline, and achievements; data from `data/experience.json`.

##### ExperienceTimeline
- Export: default `ExperienceTimeline({ experiences, animateTimeline, animation, onTechClick })`

##### ExperienceCard
- Export: default `ExperienceCard({ experience, index, onTechClick })`

##### TechnologyFilter
- Export: default `TechnologyFilter({ technologies, currentFilter, onFilterChange })`

##### AchievementsSection
- Export: default `AchievementsSection({ achievements })`

##### BackgroundEffects
- Export: default `BackgroundEffects()`

##### CompanyLogos
- Export: default `CompanyLogos()`

##### CompanyLogoCard
- Export: default `CompanyLogoCard({ company, index })`

#### Skills

- Export: default `Skills()`
- Purpose: Skills section; data from `data/skills.json`.

##### SkillsBackground
- Export: named `SkillsBackground`

##### StarRating
- Export: named `StarRating({ rating, size?, className? })`
- Usage:
```tsx
import { StarRating } from '@/app/components/StarRating';

<StarRating rating={4.5} size="lg" />
```

#### Projects

- Export: named `Projects`, default legacy export.
- Purpose: Projects with filters, search, and cards; data from `data/projects.json`.

##### ProjectsBackground
- Export: named `ProjectsBackground`

##### ProjectCard
- Export: named `ProjectCard({ project, index })`, default legacy export.

##### GitHubRepos
- Export: default `GitHubRepos()`

##### ProjectSearch
- Export: named `ProjectSearch({ projects, onSearchResults, className? })`
- Usage:
```tsx
import { ProjectSearch } from '@/app/components/shared/ProjectSearch';

<ProjectSearch projects={projects} onSearchResults={setResults} />
```

#### Shared Components

##### ResponsiveImage
- Export: named `ResponsiveImage(props)`, default legacy export.
- Variants:
  - `ProfileImage` (rounded, priority)
  - `ProjectImage` (rounded, blur placeholder)
  - `BackgroundImage` (fill cover)
- Common props: `src`, `alt`, `width?`, `height?`, `className?`, `priority?`, `quality?`, `sizes?`, `fill?`, `placeholder?`, `blurDataURL?`, `onLoad?`, `onError?`
- Usage:
```tsx
import ResponsiveImage, { ProfileImage, BackgroundImage } from '@/app/components/shared/ResponsiveImage';

<ResponsiveImage src="/img.png" alt="Example" width={800} height={600} />
<ProfileImage src="/me.jpg" alt="Me" width={256} height={256} />
<BackgroundImage src="/bg.jpg" alt="BG" className="h-64 w-full" />
```

##### SectionHeader
- Export: default `SectionHeader({ title, subtitle, className? })`

##### AnimatedWrapper and Variants
- Export: named `AnimatedWrapper(props)` plus `FadeInUp`, `FadeInDown`, `ScaleOnHover`
- Key props: `animation?`, `customAnimation?`, `delay?`, `duration?`, `threshold?`, `triggerOnce?`, `as?`
- Usage:
```tsx
import { AnimatedWrapper, FadeInUp } from '@/app/components/shared/AnimatedWrapper';

<FadeInUp className="mt-6"><div>Content</div></FadeInUp>
<AnimatedWrapper animation="custom" customAnimation={{ initial:{}, animate:{}, transition:{ duration: 0.4 } }}>
  <button>Click</button>
</AnimatedWrapper>
```

##### ErrorBoundary and withErrorBoundary
- Exports:
  - default `ErrorBoundary`
  - named `withErrorBoundary(Component, errorBoundaryProps?)`
- Props: `fallback?`, `onError?`, `retryAttempts?`, `retryDelay?`
- Usage:
```tsx
import ErrorBoundary, { withErrorBoundary } from '@/app/components/shared/ErrorBoundary';

<ErrorBoundary><ProblematicComponent /></ErrorBoundary>

const SafeComponent = withErrorBoundary(MyComponent, { retryAttempts: 2 });
```

---

### Hooks

#### useResponsive
- Export: named `useResponsive()`
- Returns: `{ isMobile, isTablet, isDesktop, isMobileLarge, isTabletLarge, screenWidth, screenHeight, orientation, isAbove(), isBelow(), isBetween() }`
- Usage:
```tsx
import { useResponsive } from '@/app/hooks/useResponsive';

const { isMobile, isAbove } = useResponsive();
if (isAbove('tablet')) { /* ... */ }
```

#### useMobileDetection
- Export: named `useMobileDetection()`
- Returns: `{ mobile, isTablet, isDesktop }`

#### useCustomCursor
- Export: named `useCustomCursor()`
- Returns: `{ cursorPosition, showCursor }`

#### useScrollAnimation
- Export: named `useScrollAnimation(elementId, options?)`
- Params:
  - `elementId: string`
  - `options?: { threshold?: number; triggerOnce?: boolean }`
- Returns: `{ isAnimated, animateTimeline }`

#### useProjectFilter
- Export: named `useProjectFilter(projects, defaultFilter)`
- Params:
  - `projects: IProject[]`
  - `defaultFilter: string`
- Returns: `{ activeFilter, setActiveFilter, filteredProjects }`

#### useScrollSmooth
- Export: default `useScrollSmooth()`
- Purpose: Adds smooth scrolling behavior for in-page anchor links.

---

### Utilities (`app/utils/index.ts`)

- `filterProjects(projects, filter): Project[]`
  - Filters by tech or category; `filter === 'All'` returns input.
  - Example:
```ts
import { filterProjects } from '@/app/utils';
const mobileProjects = filterProjects(projects, 'Mobile');
```

- `sortProjects(projects, sortBy?, order?): Project[]`
  - `sortBy` defaults to `'title'`; `order` is `'asc' | 'desc'`.

- `groupProjectsByCategory(projects): Record<string, Project[]>`

- `getUniqueTechnologies(projects): string[]`

- `formatDate(dateString, options?): string`

- `truncateText(text, maxLength, suffix?): string`

- `generateKey(prefix, id): string`

- `debounce(func, wait): (...args) => void`

- `throttle(func, limit): (...args) => void`

- `isInRange(value, min, max): boolean`

- `capitalize(str): string`

- `generateRandomId(length?): string`

- `deepClone<T>(obj: T): T`

Usage:
```ts
import { debounce, throttle, capitalize } from '@/app/utils';

const onScroll = throttle(() => {/* ... */}, 100);
const onSearch = debounce((q: string) => {/* ... */}, 300);
const title = capitalize('hello');
```

---

### Constants (`app/constants/index.ts`)

- Animation:
  - `ANIMATION_DURATIONS`, `ANIMATION_DELAYS`, `ANIMATION_EASINGS`
  - Variants: `FADE_IN_UP`, `FADE_IN_DOWN`, `SCALE_ON_HOVER`
- Responsive:
  - `RESPONSIVE_BREAKPOINTS` (extends `BREAKPOINTS` from types)
- Layers: `Z_INDEX`
- Design tokens: `COLORS`, `SPACING`, `TYPOGRAPHY`, `SHADOWS`, `BORDER_RADIUS`
- API: `API_CONFIG`
- Social: `SOCIAL_LINKS`
- Navigation: `NAVIGATION`

Example:
```ts
import { FADE_IN_UP, RESPONSIVE_BREAKPOINTS, Z_INDEX } from '@/app/constants';
```

---

### Config (`app/config/index.ts`)

- `ENV_CONFIG`: `{ isDevelopment, isProduction, isTest }`
- `APP_CONFIG`: app metadata
- `PERFORMANCE_CONFIG`: animation/image/lazy-loading tunables
- `SEO_CONFIG`: default SEO metadata
- `ANALYTICS_CONFIG`: GA and optional Simple Analytics toggles
- `FEATURE_FLAGS`: feature switches
- `THEME_CONFIG`: colors and spacing
- `CONTENT_CONFIG`: pagination/search/social settings
- `ERROR_CONFIG`: error boundary and API retry configuration
- `ACCESSIBILITY_CONFIG`: ARIA/keyboard/reader/contrast settings
- `DEV_CONFIG`: logging and dev tools settings

Usage:
```ts
import { SEO_CONFIG, ANALYTICS_CONFIG, FEATURE_FLAGS } from '@/app/config';
```

---

### Types (`app/types/index.ts`)

- Core data:
  - `IProject`, `ITechSkill`, `IProjectsData`, `ICompany`, `IEducationItem`, `ISkill`, `IContactInfo`, `IHeroData`, `IAboutData`
- Components:
  - `ISectionConfig`
- Hooks:
  - `IProjectFilterReturn`, `IMobileDetectionReturn`, `IScrollAnimationReturn`
- Animation:
  - `IAnimationConfig`
- Responsive:
  - `BREAKPOINTS`, `Breakpoint`
- Theme:
  - `IThemeConfig`
- API/Data:
  - `IApiResponse<T>`, `IGitHubRepo`
- Utility aliases (legacy): `Project`, `TechSkill`, `ProjectsData`, ...

Types are exported for reuse across components and external integrations.

---

### Analytics (`app/GoogleAnalytics.tsx`)

- `pageview(url: string): void`
- `trackEvent(action: string, category: string, label: string, value?: number): void`

Usage:
```ts
import { pageview, trackEvent } from '@/app/GoogleAnalytics';

pageview(window.location.pathname);
trackEvent('click', 'hero', 'contact_button');
```

---

### Data Files (`/data/*.json`)

Several components hydrate from JSON files for copy and lists:
- `about.json`, `contact.json`, `education.json`, `experience.json`, `githubrepo.json`, `hero.json`, `navbar.json`, `projects.json`, `skills.json`

Update these to change content without touching code.

---

### Examples

#### Using Projects with search and filters
```tsx
import { Projects } from '@/app/components/Projects';

export default function ProjectsPage() {
  return <Projects />;
}
```

#### Wrapping a component with ErrorBoundary
```tsx
import ErrorBoundary from '@/app/components/shared/ErrorBoundary';
import Problematic from './Problematic';

export default function Page() {
  return (
    <ErrorBoundary>
      <Problematic />
    </ErrorBoundary>
  );
}
```

#### Using hooks
```tsx
import { useResponsive } from '@/app/hooks/useResponsive';

export function Widget() {
  const { isMobile } = useResponsive();
  return <div className={isMobile ? 'p-4' : 'p-8'}>Responsive</div>;
}
```

---

### Notes

- Many components are client components ('use client') and rely on browser APIs and animations. Use them in client-side contexts.
- Named exports are preferred; several components also include a default export for legacy imports.
- Follow the Google TypeScript Style Guide for contributions (see `README.md`).