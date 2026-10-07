import { motion } from 'framer-motion';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative px-6 py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(200,39,62,0.18) 0%, transparent 60%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
          Your culture is one download away
        </h2>
        <p className="mt-5 text-muted text-base max-w-md mx-auto">
          Join the community already using DesiDots for events, grocery, and fashion.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-2xl bg-accentDeep hover:bg-accent border border-white/10 px-6 py-3.5 transition-colors"
          >
            <span className="text-left leading-tight">
              <span className="block text-[10px] text-white/70">Download on the</span>
              <span className="block text-sm font-bold">App Store</span>
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-2xl bg-accentDeep hover:bg-accent border border-white/10 px-6 py-3.5 transition-colors"
          >
            <span className="text-left leading-tight">
              <span className="block text-[10px] text-white/70">Get it on</span>
              <span className="block text-sm font-bold">Google Play</span>
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
