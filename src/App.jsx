import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ArrowRight,
  Star,
  Award,
  Volleyball,
  Shirt,
  Footprints,
  Wrench,
  Gift,
  PlayCircle,
  Quote,
  Globe,
  MessageCircle,
  ExternalLink,
  Sun,
  Shield,
  Users,
  CalendarDays,
} from 'lucide-react'

/* ================================================================
   A-Z Tennis — Scottsdale's #1 Tennis Pro Shop
   Landing Page — React + Tailwind v4 + Framer Motion + Lucide
   ================================================================ */

// ---- Reusable fade-in wrapper ----
const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
)

// ---- Section heading helper ----
const SectionHeading = ({ eyebrow, title, description, light = false }) => (
  <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
    {eyebrow && (
      <p className={`text-sm font-semibold tracking-wider uppercase mb-3 ${light ? 'text-burnt-light' : 'text-burnt'}`}>
        {eyebrow}
      </p>
    )}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${light ? 'text-white' : 'text-forest'}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-white/60' : 'text-slate-light'}`}>
        {description}
      </p>
    )}
  </div>
)


/* ================================================================
   NAVBAR
   ================================================================ */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { label: 'Shop', href: '#shop' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-forest/8">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-6 lg:px-8 h-16 md:h-[4.5rem]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-[1.35rem] md:text-2xl font-display font-extrabold tracking-tight text-forest">
            A-Z <span className="text-burnt">Tennis</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-light hover:text-forest transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-burnt after:transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + phone */}
        <div className="hidden md:flex items-center gap-5">
          <a href="tel:4809919808" className="flex items-center gap-1.5 text-sm text-slate-light hover:text-forest transition-colors cursor-pointer">
            <Phone size={15} />
            (480) 991-9808
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest hover:bg-forest-light text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Visit Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 text-forest min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-0 z-50 bg-forest flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <span className="text-xl font-display font-extrabold text-white">
                A-Z <span className="text-burnt-light">Tennis</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-3xl font-display font-bold text-white hover:text-burnt-light transition-colors min-h-[44px] flex items-center cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:4809919808"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex items-center gap-2 text-white/60 text-lg"
              >
                <Phone size={18} /> (480) 991-9808
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


/* ================================================================
   HERO
   ================================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest min-h-[88vh] md:min-h-[92vh] flex items-center">
      {/* Background: AI-generated hero image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="A-Z Tennis pro shop interior with racquets, shoes, and apparel displays"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-forest-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-burnt-light text-xs font-semibold tracking-wider uppercase mb-6 border border-white/5">
              <Sun size={14} /> Scottsdale, Arizona &middot; Since 1993
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight">
              Scottsdale's <span className="italic">#1</span>
              <br />
              <span className="text-burnt-light">Tennis Pro Shop</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-white/65 max-w-lg leading-relaxed">
              Expert racquet stringing, top brands, demo programs, and
              personalized service from a staff of active tennis players.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-burnt hover:bg-burnt-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-burnt/20 min-h-[44px] cursor-pointer"
              >
                Shop Collection <ChevronRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/25 hover:border-white/50 text-white font-semibold rounded-lg transition-all hover:bg-white/5 min-h-[44px] cursor-pointer"
              >
                Our Services
              </a>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-white/40 text-xs font-medium uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Award size={16} className="text-burnt-light" />
                Voted Best Local Business
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <Shield size={16} className="text-burnt-light" />
                30+ Years Serving AZ
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-burnt-light" />
                Thousands of Happy Players
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}


/* ================================================================
   FEATURED COLLECTIONS — Product Categories
   ================================================================ */
const collections = [
  {
    title: 'Racquets',
    description: 'Top frames from Babolat, Head, Wilson, Prince, Yonex, Volkl, Tecnifibre & more.',
    Icon: Volleyball,
    image: '/images/racquets.webp',
    imageAlt: 'Premium tennis racquets with fresh string jobs',
  },
  {
    title: 'Tennis Shoes',
    description: 'Court-ready footwear from Nike, Adidas, Asics, New Balance, K-Swiss & more.',
    Icon: Footprints,
    image: '/images/shoes.webp',
    imageAlt: 'Performance tennis court shoes',
  },
  {
    title: 'Apparel',
    description: "Men's, women's, and junior tennis wear built for the Arizona heat.",
    Icon: Shirt,
    image: '/images/apparel.webp',
    imageAlt: 'Tennis apparel collection including shirts, skirts, and accessories',
  },
  {
    title: 'Accessories',
    description: 'Grips, dampeners, bags, hats, visors, gifts & novelties for every player.',
    Icon: Star,
    image: '/images/accessories.webp',
    imageAlt: 'Tennis accessories including grips, dampeners, visors, and wristbands',
  },
]

function Collections() {
  return (
    <section id="shop" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Shop"
            title="Curated for Performance"
            description="Everything you need to dominate the court, hand-picked by our team of active tennis players."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {collections.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-forest/8 hover:border-forest/20 bg-white overflow-hidden transition-colors cursor-pointer"
              >
                {/* Image or icon fallback */}
                {item.image ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-sand flex items-center justify-center">
                    <item.Icon className="text-forest/30" size={48} />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-forest group-hover:text-burnt transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-light leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-burnt group-hover:gap-2 transition-all">
                    Browse <ArrowRight size={15} />
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ================================================================
   SERVICES — Stringing, Demos, Gift Certificates
   ================================================================ */
const servicesList = [
  {
    Icon: Wrench,
    title: 'Expert Stringing',
    desc: 'Custom racquet stringing done on premises by a tennis professional. Wide variety of strings available. Fast turnaround plus a Frequent Stringing Program.',
  },
  {
    Icon: PlayCircle,
    title: 'Demo Program',
    desc: 'Try before you buy — test-drive up to 3 racquets for 30 days. Find your perfect match with zero risk.',
  },
  {
    Icon: Gift,
    title: 'Gift Certificates',
    desc: 'Available in any denomination. The perfect gift for family, friends, teammates, and tennis lovers.',
  },
  {
    Icon: Users,
    title: 'Personalized Fitting',
    desc: 'Our staff of active tennis players provides expert advice on racquets, shoes, and gear tailored to your game.',
  },
]

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-forest">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="More Than a Pro Shop"
            description="World-class service from a knowledgeable staff that truly knows the game."
            light
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.08}>
              <div className="text-center group">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-white/8 flex items-center justify-center mb-5 group-hover:bg-burnt/20 transition-colors">
                  <svc.Icon className="text-burnt-light" size={28} />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed max-w-[260px] mx-auto">
                  {svc.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ================================================================
   BRANDS — Infinite scrolling logo marquee
   ================================================================ */
const brandLogos = [
  { name: 'Babolat', file: 'babolat.svg' },
  { name: 'Wilson', file: 'wilson.svg' },
  { name: 'Head', file: 'head.svg' },
  { name: 'Yonex', file: 'yonex.svg' },
  { name: 'Prince', file: 'prince.svg' },
  { name: 'Nike', file: 'nike.svg' },
  { name: 'Adidas', file: 'adidas.svg' },
  { name: 'Asics', file: 'asics.svg' },
  { name: 'K-Swiss', file: 'k-swiss.svg' },
  { name: 'New Balance', file: 'new-balance.svg' },
  { name: 'Volkl', file: 'volkl.svg' },
  { name: 'Tecnifibre', file: 'tecnifibre.svg' },
  { name: 'ProKennex', file: 'prokennex.svg' },
]

function Brands() {
  // Duplicate the list for seamless infinite scroll
  const doubled = [...brandLogos, ...brandLogos]

  return (
    <section className="py-14 md:py-18 bg-sand overflow-hidden">
      <FadeIn>
        <p className="text-center text-sm font-semibold tracking-wider uppercase text-slate-light mb-10">
          Trusted Brands We Carry
        </p>
      </FadeIn>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-sand to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-sand to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex items-center gap-12 md:gap-16 w-max"
          style={{
            animation: 'marquee 40s linear infinite',
          }}
        >
          {doubled.map((brand, i) => (
            <img
              key={`${brand.name}-${i}`}
              src={`/logos/${brand.file}`}
              alt={`${brand.name} logo`}
              className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity grayscale hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex[style*="marquee"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}


/* ================================================================
   TESTIMONIALS
   ================================================================ */
const testimonials = [
  {
    name: 'Sarah M.',
    text: "Best tennis shop in the Valley, hands down. Kent and the team are incredibly knowledgeable and always help me find exactly what I need.",
    role: 'USTA League Player',
  },
  {
    name: 'James R.',
    text: "The demo program saved me from buying the wrong racquet. I tested three frames over a month and found my perfect match. Service like this is rare.",
    role: 'Competitive 4.0 Player',
  },
  {
    name: 'Michelle T.',
    text: "I've been coming here since they were The Tennis Boutique. Over 20 years of incredible service — they always string my racquets perfectly.",
    role: 'Scottsdale Resident',
  },
]

function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by Players Across Arizona"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="rounded-2xl bg-white border border-forest/8 p-7 md:p-8 flex flex-col h-full">
                <Quote size={24} className="text-burnt/30 mb-4 shrink-0" />
                <p className="text-slate leading-relaxed flex-1">
                  {t.text}
                </p>
                <div className="mt-6 pt-5 border-t border-forest/8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest">{t.name}</p>
                      <p className="text-xs text-slate-light">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-burnt fill-burnt" />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ================================================================
   ABOUT / HISTORY — Trust & Authority
   ================================================================ */
function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image placeholder */}
          <FadeIn>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img
                src="/images/about.webp"
                alt="A-Z Tennis storefront in Scottsdale, Arizona"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <Award size={22} className="text-burnt-light" />
                </div>
                <div>
                  <p className="text-white font-display text-lg font-bold">Est. 1993</p>
                  <p className="text-white/60 text-xs">Scottsdale, Arizona</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Story */}
          <FadeIn delay={0.15}>
            <div>
              <p className="text-burnt font-semibold text-sm tracking-wider uppercase mb-3">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest leading-tight mb-6">
                Serving Arizona Tennis Players for Over 30 Years
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Founded in 1993 as "The Tennis Boutique," A-Z Tennis has been a
                  cornerstone of the Scottsdale tennis community for over three
                  decades. Today, under the ownership of lifelong Valley resident
                  Kent Rasmussen, the shop continues its tradition of world-class
                  service.
                </p>
                <p>
                  Voted Scottsdale's Best Local Small Business, A-Z Tennis is one of
                  the finest tennis pro shops in Arizona — offering premium equipment,
                  accessories, and apparel for men, women, and juniors, backed by a
                  knowledgeable staff of active tennis players.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-forest/10">
                {[
                  { value: '30+', label: 'Years' },
                  { value: '13+', label: 'Top Brands' },
                  { value: '1000s', label: 'Players Served' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-display font-bold text-forest">{stat.value}</p>
                    <p className="text-xs text-slate-light uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}


/* ================================================================
   MONTHLY SPECIALS CTA
   ================================================================ */
function Specials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl bg-gradient-to-br from-forest to-forest-dark overflow-hidden px-6 py-14 md:px-16 md:py-20">
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-burnt/10 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-burnt-light/5 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-burnt-light font-semibold text-sm tracking-wider uppercase mb-3">
                  Monthly Specials
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  String Specials & Hot Deals
                </h2>
                <p className="text-white/55 leading-relaxed mb-6">
                  Check out our rotating monthly string specials and equipment deals.
                  Save on premium strings from Yonex, Babolat, and more — plus discounted
                  shoes and apparel.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-burnt hover:bg-burnt-dark text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-burnt/25 min-h-[44px] cursor-pointer"
                >
                  View Specials <ArrowRight size={18} />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'String Jobs', note: 'From $25.99' },
                  { label: 'Tennis Shoes', note: 'From $69.99' },
                  { label: 'Apparel', note: 'From $25.99' },
                  { label: 'Demo Racquets', note: 'Try 3 for 30 days' },
                ].map((deal) => (
                  <div key={deal.label} className="rounded-xl bg-white/8 border border-white/10 p-4 text-center">
                    <p className="text-white font-semibold text-sm">{deal.label}</p>
                    <p className="text-burnt-light text-xs mt-1">{deal.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}


/* ================================================================
   NEWSLETTER
   ================================================================ */
function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="py-16 md:py-20 bg-sand">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <Mail size={32} className="text-burnt mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-3">
            Stay in the Game
          </h2>
          <p className="text-slate-light mb-8 max-w-md mx-auto">
            Get exclusive deals, monthly specials, and pro tips delivered to your inbox.
            We never spam or sell your info.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-lg bg-white border border-forest/15 text-slate placeholder-slate-light/60 focus:outline-none focus:ring-2 focus:ring-burnt focus:border-transparent min-h-[44px]"
            />
            <button
              type="submit"
              className="px-7 py-3 bg-forest hover:bg-forest-light text-white font-semibold rounded-lg transition-colors min-h-[44px] cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}


/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  return (
    <footer id="contact" className="bg-forest-dark text-white/55">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-display font-extrabold text-white">
              A-Z <span className="text-burnt-light">Tennis</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Scottsdale's premier tennis destination since 1993. Performance
              gear, expert stringing, and a community that loves the game.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com/aztennisshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-burnt/25 flex items-center justify-center transition-colors min-h-[44px] min-w-[44px] cursor-pointer"
                aria-label="Facebook"
              >
                <Globe size={18} className="text-white/65" />
              </a>
              <a
                href="https://twitter.com/AtoZtennis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-burnt/25 flex items-center justify-center transition-colors min-h-[44px] min-w-[44px] cursor-pointer"
                aria-label="Twitter"
              >
                <MessageCircle size={18} className="text-white/65" />
              </a>
              <a
                href="https://greenfuzzblog.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-burnt/25 flex items-center justify-center transition-colors min-h-[44px] min-w-[44px] cursor-pointer"
                aria-label="Blog"
              >
                <ExternalLink size={18} className="text-white/65" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Racquets', 'Tennis Shoes', 'Apparel', 'Specials', 'Stringing', 'Demo Program'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors cursor-pointer">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-burnt-light" />
                <span>
                  9699 N. Hayden Rd, Suite 108
                  <br />Scottsdale, AZ 85258
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-burnt-light" />
                <a href="tel:4809919808" className="hover:text-white transition-colors cursor-pointer">
                  (480) 991-9808
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-burnt-light" />
                <a href="mailto:Kent@a-zTennis.com" className="hover:text-white transition-colors cursor-pointer">
                  Kent@a-zTennis.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Store Hours
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-burnt-light" />
                <span>Mon &ndash; Fri: 10 AM &ndash; 6 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <CalendarDays size={16} className="shrink-0 text-burnt-light" />
                <span>Saturday: 10 AM &ndash; 4 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-burnt-light" />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} A-Z Tennis. All rights reserved.</p>
          <p className="italic">Be Your Very Best</p>
        </div>
      </div>
    </footer>
  )
}


/* ================================================================
   APP — Compose all sections
   ================================================================ */
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Collections />
      <Services />
      <Brands />
      <Testimonials />
      <About />
      <Specials />
      <Newsletter />
      <Footer />
    </div>
  )
}
