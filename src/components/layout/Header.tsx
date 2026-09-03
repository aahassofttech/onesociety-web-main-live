"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-[0_2px_20px_rgba(30,58,95,0.10)]" : "bg-white border-b border-gray-100"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 z-10">
              <img src="images/one-society-logo.png" alt="OneSociety logo" width={200} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${pathname === link.href
                    ? "text-[#F5A623] font-semibold"
                    : "text-[#1E3A5F] hover:text-[#F5A623] hover:bg-orange-50"
                    }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F5A623]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-[#F5A623] hover:bg-amber-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 bg-[#1E3A5F] rounded-full transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"
                  }`}
              />
              <span
                className={`block h-0.5 bg-[#1E3A5F] rounded-full transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-5"
                  }`}
              />
              <span
                className={`block h-0.5 bg-[#1E3A5F] rounded-full transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile slide-in drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <img src="images/one-society-logo.png" alt="OneSociety logo" width={200}/>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-4 pt-4 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-colors duration-150 ${pathname === link.href
                ? "bg-orange-50 text-[#F5A623] font-semibold"
                : "text-[#1E3A5F] hover:bg-gray-50"
                }`}
            >
              {pathname === link.href && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA at bottom of drawer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-white">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-[#F5A623] hover:bg-amber-600 text-white font-semibold text-center text-sm py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Free
          </Link>
          <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>
        </div>
      </div>
    </>
  );
}
