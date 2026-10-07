import { motion } from 'framer-motion';
import { Check, Store } from 'lucide-react';

const POINTS = [
  'List products or events in minutes, no tech skills needed',
  'A real dashboard to manage orders and shipments',
  'Reach the South Asian community actively looking for you',
  'Simple 10% platform fee — no hidden costs',
];

export default function ForVendors() {
  return (
    <section id="vendors" className="px-6 py-28">
      <div className="max-w-content mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
            <Store size={22} className="text-accent" strokeWidth={1.8} />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Sell to a community that's looking for you
          </h2>
          <p className="mt-5 text-muted text-base leading-relaxed max-w-md">
            Whether you run a grocery store in Hyderabad, a boutique of handloom
            sarees, or host the biggest garba night in your city — DesiDots gives
            you a direct line to customers who want exactly what you offer.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink/90">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                  <Check size={12} className="text-accent" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#download"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-accent hover:bg-accentDeep px-7 py-3.5 text-sm font-bold transition-colors"
          >
            Become a Vendor
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-line bg-bgCard p-8 shadow-card"
        >
          <div className="space-y-4">
            {[
              { label: 'List your products or events', value: 'Minutes' },
              { label: 'Manage orders', value: 'One dashboard' },
              { label: 'Reach customers', value: 'Nationwide' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-5 py-4">
                <span className="text-muted text-sm">{stat.label}</span>
                <span className="font-display font-bold text-lg">{stat.value}</span>
              </div>
            ))}
          </div>
          <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-br from-accent to-transparent rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
