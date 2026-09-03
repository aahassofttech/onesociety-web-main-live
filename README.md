# OneSociety - Community Management Website

A production-ready Next.js website for OneSociety, a gated community management platform.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **HeroUI** (component library)
- **Framer Motion** (animations)
- **React Hook Form** (form handling)
- **React CountUp + Intersection Observer** (animated counters)

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata + font imports
│   ├── providers.tsx           # HeroUI client provider
│   ├── globals.css             # Global styles + Tailwind directives
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us page
│   ├── contact/page.tsx        # Contact Us page
│   ├── privacy-policy/page.tsx # Privacy Policy page
│   └── terms-and-conditions/
│       └── page.tsx            # Terms & Conditions page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky responsive header (used on all pages)
│   │   ├── Footer.tsx          # Footer with links, social icons (used on all pages)
│   │   └── PageBanner.tsx      # Page hero banner with breadcrumbs
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx     # Homepage hero + app download banner
│   │   ├── FeaturesSection.tsx # Community ecosystem / feature cards
│   │   ├── WhyChooseUsSection.tsx  # 6-card why choose us grid
│   │   ├── CounterSection.tsx  # Animated stats counters (reusable)
│   │   ├── PlatformSection.tsx # All-in-one platform features
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   ├── AdPlatformSection.tsx   # Ad platform promo section
│   │   ├── PricingSection.tsx  # Pricing comparison table
│   │   ├── FAQSection.tsx      # Reusable FAQ with HeroUI Accordion
│   │   ├── CTASection.tsx      # Reusable CTA banner
│   │   └── ContactSection.tsx  # Reusable contact form + info
│   │
│   └── ui/
│       └── SectionHeading.tsx  # Reusable heading component (tag + title + subtitle)
```

---

## Page Breakdown

| Page | Route | Reused Components |
|------|-------|-------------------|
| Home | `/` | Hero, Features, WhyChooseUs, Counter, Platform, Testimonials, AdPlatform, Pricing, FAQ, CTA |
| About | `/about` | PageBanner, Counter, FAQ (aboutFAQs), CTA |
| Contact | `/contact` | PageBanner, ContactSection, FAQ (contactFAQs), CTA |
| Privacy Policy | `/privacy-policy` | PageBanner |
| Terms & Conditions | `/terms-and-conditions` | PageBanner |

---

## Key Design Decisions

- **Color palette**: Deep navy (`#1E3A5F`) primary, amber (`#F5A623`) accent - matching the brand image
- **Typography**: Plus Jakarta Sans (display/headings) + Inter (body)
- **Animated counters**: Triggered by scroll using `react-intersection-observer`
- **FAQ**: Powered by `HeroUIAccordion`, data passed via props - each page uses different FAQ array
- **Contact form**: Client-side validation with error states, success confirmation state
- **Header**: Sticky, transparent→shadow on scroll, mobile hamburger menu
- **All sections are prop-driven**: Easy to customize content without touching component logic

---

## Customization

### Changing Brand Colors
Edit `tailwind.config.ts` - update `primary` and `accent` color objects.

### Adding FAQ Items
Each page imports from `FAQSection.tsx`. Add items to `homeFAQs`, `aboutFAQs`, or `contactFAQs` arrays.

### Counter Stats
Pass a custom `counters` array prop to `<CounterSection />` on any page.

### Adding New Pages
1. Create `src/app/[route]/page.tsx`
2. Import `Header`, `Footer`, `PageBanner`
3. Compose from existing section components
