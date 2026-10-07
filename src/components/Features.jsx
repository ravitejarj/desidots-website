import { motion } from 'framer-motion';
import { CalendarDays, ShoppingBag, Shirt, ArrowUpRight } from 'lucide-react';

const FEATURES = [
  {
    id: 'events',
    icon: CalendarDays,
    title: 'Events',
    tagline: 'Garba nights, Diwali, concerts & more',
    body:
      'Discover and book tickets to the South Asian events happening near you — from garba and Diwali celebrations to live concerts and community meetups.',
  },
  {
    id: 'grocery',
    icon: ShoppingBag,
    title: 'Grocery',
    tagline: 'Shipped straight from India',
    body:
      'Pickles, spices, snacks, sweets, and dry fruits from verified Indian stores — shipped to your door in the US, with real order tracking along the way.',
  },
  {
    id: 'fashion',
    icon: Shirt,
    title: 'Fashion',
    tagline: 'Ethnic wear & more',
    body:
      'Sarees, kurtas, lehengas, and festive wear from independent South Asian clothing vendors — browse, shop, and get it delivered.',
  },
];

export default function Features() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Everything desi, in one app
          </h2>
          <p className="mt-4 text-muted text-base">
            Three worlds, one marketplace — built for how our community actually lives.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ id, icon: Icon, title, tagline, body }, i) => (
            <motion.a
              key={id}
              id={id}
              href={`#${id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-line bg-bgCard p-8 shadow-card transition-colors hover:border-accent/40"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accentDeep flex items-center justify-center">
                <Icon size={22} className="text-white" strokeWidth={1.8} />
              </div>

              <h3 className="font-display font-bold text-xl mt-6">{title}</h3>
              <p className="text-accentSoft text-sm font-medium mt-1">{tagline}</p>
              <p className="text-muted text-sm leading-relaxed mt-4">{body}</p>

              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink opacity-70 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
