import Logo from './Logo.jsx';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const COLUMNS = [
  {
    heading: 'Discover',
    links: [
      { label: 'Events', href: '#events' },
      { label: 'Grocery', href: '#grocery' },
      { label: 'Fashion', href: '#fashion' },
    ],
  },
  {
    heading: 'Sellers',
    links: [
      { label: 'Become a Vendor', href: '#vendors' },
      { label: 'Vendor Dashboard', href: '#vendors' },
      { label: 'List an Event', href: '#vendors' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#top' },
      { label: 'Community', href: '#top' },
      { label: 'Contact', href: '#top' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pt-16 pb-10">
      <div className="max-w-content mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted max-w-xs leading-relaxed">
              Events, grocery from India, and fashion — one app for the South
              Asian community in the US.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-mutedDark hover:text-accent transition-colors">
                <Instagram size={18} strokeWidth={1.8} />
              </a>
              <a href="#" aria-label="Twitter" className="text-mutedDark hover:text-accent transition-colors">
                <Twitter size={18} strokeWidth={1.8} />
              </a>
              <a href="#" aria-label="Facebook" className="text-mutedDark hover:text-accent transition-colors">
                <Facebook size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-mutedDark">
                {col.heading}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mutedDark">
            © {new Date().getFullYear()} DesiDots. All rights reserved.
          </p>
          <p className="text-xs font-bold tracking-[3px] text-mutedDark">
            DESIDOTS.COM
          </p>
        </div>
      </div>
    </footer>
  );
}
