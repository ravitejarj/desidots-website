import { motion } from 'framer-motion';
import { Search, CalendarDays, ShoppingBag, Shirt, MapPin } from 'lucide-react';

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto"
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[270px] sm:w-[300px] rounded-[2.75rem] border-[6px] border-[#1c0f12] bg-[#0a0506] shadow-glow"
        style={{ boxShadow: '0 50px 140px rgba(200,39,62,0.3), 0 0 0 1px rgba(255,255,255,0.06)' }}
      >
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20" />

        {/* screen */}
        <div className="relative rounded-[2.2rem] overflow-hidden bg-gradient-to-b from-[#1a0c0f] to-[#0a0506] aspect-[9/19.5]">
          {/* hero header */}
          <div className="bg-gradient-to-br from-accent to-accentDeep px-5 pt-10 pb-5 rounded-b-[1.6rem]">
            <p className="text-white/70 text-[10px] font-medium tracking-wide">Hey, Ravi 👋</p>
            <p className="text-white font-display font-bold text-lg mt-0.5">Events, grocery & fashion</p>
            <div className="mt-3 flex items-center gap-2 bg-white/15 rounded-full px-3 py-2 backdrop-blur-sm">
              <Search size={13} className="text-white/80" />
              <span className="text-white/70 text-[11px]">Search events, stores…</span>
            </div>
          </div>

          {/* category row */}
          <div className="flex gap-2 px-4 mt-4">
            {[
              { icon: CalendarDays, label: 'Events' },
              { icon: ShoppingBag, label: 'Grocery' },
              { icon: Shirt, label: 'Fashion' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 flex flex-col items-center gap-1.5">
                <Icon size={15} className="text-accentSoft" />
                <span className="text-white/70 text-[9px] font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* featured card */}
          <div className="mx-4 mt-4 rounded-xl bg-white/5 border border-white/10 p-3">
            <span className="text-[8px] font-bold tracking-wider text-accentSoft uppercase">Featured</span>
            <p className="text-white font-display font-semibold text-sm mt-1.5">Garba Night 2026</p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={10} className="text-white/50" />
              <span className="text-white/50 text-[9px]">Dallas, TX</span>
            </div>
          </div>

          {/* store rows */}
          <div className="px-4 mt-4 space-y-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg p-2">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-accentSoft/40 to-accent/40 flex-shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-2/3 bg-white/20 rounded-full" />
                  <div className="h-1.5 w-1/3 bg-white/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ambient glow behind phone */}
      <div className="absolute -z-10 inset-0 blur-3xl opacity-50 bg-gradient-to-b from-accent to-transparent" />
    </motion.div>
  );
}
