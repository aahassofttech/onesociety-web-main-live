import Link from "next/link";
import { SITE } from "@/data/site";
import { filter } from "framer-motion/client";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Why Choose", href: "/why-choose-us" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/tnc" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: SITE.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: SITE.instagram,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: SITE.facebook,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="images/one-society-logo-white.png" alt="OneSociety logo" width={200} />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-xs">
              {SITE.description}
            </p>
            {/* App Badges */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-lg px-4 py-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[10px] text-blue-200">Download on the</p>
                  <p className="text-xs font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-lg px-4 py-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.35.2.8.2 1.24-.02l12.11-6.97-2.76-2.77-10.59 9.76zm-1.12-20.3C1.73 3.9 1.5 4.4 1.5 5.05v13.9c0 .65.23 1.15.56 1.59l.09.08 7.78-7.78v-.18L2.06 3.46zm17.01 8.64l-2.33-1.34-3.08 3.08 3.08 3.08 2.35-1.36c.67-.39.67-1.03 0-1.42l-.02-.04zM4.42.23L16.54 7.2l-2.76 2.76L3.18.24C3.63.03 4.07.03 4.42.23z" />
                </svg>
                <div>
                  <p className="text-[10px] text-blue-200">Get it on</p>
                  <p className="text-xs font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="font-display font-semibold text-sm mb-4 text-white uppercase tracking-wide">
                {title}
              </h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <h3 key={link.label}>
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </h3>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h2 className="font-display font-semibold text-sm mb-4 text-white uppercase tracking-wide">
              Contact
            </h2>
            <ul className="space-y-2">
              <li className="text-blue-200 hover:text-white text-sm transition-colors">
                <strong className="text-white">Email:</strong> {SITE.email}
              </li>
              <li className="text-blue-200 hover:text-white text-sm transition-colors">
                <strong className="text-white">Phone Number:</strong> {SITE.phone}
              </li>
              <li className="text-blue-200 hover:text-white text-sm transition-colors">
                <strong className="text-white">Address:</strong> {SITE.address}
              </li>
              <li className="text-blue-200 hover:text-white text-sm transition-colors">
                <strong className="text-white">Support Hours:</strong> {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-blue-200 hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
