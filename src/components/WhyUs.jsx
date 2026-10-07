import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, Smartphone } from 'lucide-react';

const POINTS = [
  {
    icon: ShieldCheck,
    title: 'Verified vendors',
    body: 'Every store and host on DesiDots is reviewed before they can sell — real people, real community.',
  },
  {
    icon: Truck,
    title: 'Real order tracking',
    body: 'Once a vendor ships, you get a carrier, a tracking number, and a delivery estimate — no guessing.',
  },
  {
    icon: Users,
    title: 'Built by the community',
    body: "We're desi too. Every feature exists because someone in our community actually needed it.",
  },
  {
    icon: Smartphone,
    title: 'One app, not five',
    body: 'Stop switching between a ticketing site, a grocery WhatsApp group, and three Instagram shops.',
  },
];

export default function WhyUs() {
  return (
    <section className="px-6 py-28 bg-bgElevated border-y border-line">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Why DesiDots
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {POINTS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Icon size={26} className="text-accent" strokeWidth={1.6} />
              <h3 className="font-display font-semibold text-base mt-4">{title}</h3>
              <p className="text-muted text-sm leading-relaxed mt-2">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
