import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* ambient glow */}
      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] max-w-[180vw] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(200,39,62,0.28) 0%, rgba(200,39,62,0.06) 45%, transparent 70%)',
        }}
      />

      <div className="relative max-w-content mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold text-[#f0b9c1] mb-9"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#c8273e]" />
            Coming Soon — Download Now
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display font-extrabold leading-[1.02] tracking-tight text-[44px] sm:text-6xl lg:text-7xl"
          >
            Your Culture.
            <br />
            <span className="text-accent">Your Marketplace.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 text-lg text-muted max-w-md mx-auto lg:mx-0"
          >
            Events. Grocery from India. Fashion. One app built for the South Asian
            community in the US.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-accentDeep hover:bg-accent border border-white/10 px-6 py-3.5 transition-colors"
            >
              <AppleIcon />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-white/70">Download on the</span>
                <span className="block text-sm font-bold">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-accentDeep hover:bg-accent border border-white/10 px-6 py-3.5 transition-colors"
            >
              <PlayIcon />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-white/70">Get it on</span>
                <span className="block text-sm font-bold">Google Play</span>
              </span>
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-6 text-xs font-bold tracking-[3px] text-accent"
          >
            DESIDOTS.COM
          </motion.p>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
      <path d="M16.365 1.43c0 1.14-.47 2.26-1.15 3.06-.75.87-1.98 1.55-3.01 1.55-.14 0-.27-.02-.37-.03-.02-.11-.05-.3-.05-.49 0-1.15.55-2.3 1.21-3.06.78-.88 2.07-1.55 3.08-1.59.02.19.02.34.02.56zM20.6 17.1c-.58 1.26-.86 1.83-1.6 2.95-1.03 1.56-2.49 3.5-4.29 3.52-1.6.02-2.01-1.03-4.18-1.02-2.17.01-2.62 1.04-4.22 1.02-1.8-.02-3.18-1.77-4.21-3.33-2.9-4.4-3.2-9.57-1.41-12.32 1.27-1.96 3.28-3.1 5.17-3.1 1.92 0 3.13 1.06 4.72 1.06 1.54 0 2.48-1.06 4.7-1.06 1.68 0 3.46.92 4.73 2.5-4.16 2.28-3.48 8.22.59 9.78z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3.6 2.6c-.4.3-.6.8-.6 1.4v16c0 .6.2 1.1.6 1.4l.1.1L13 12.2v-.4L3.7 2.5l-.1.1z" fill="#fff" />
      <path d="M16 15.2l-3-3-9.3 9.4c.4.4 1 .4 1.6.1L16 15.2z" fill="#fff" opacity=".9" />
      <path d="M16 9l-3 3 3 3 3.6-2.1c.9-.5.9-1.3 0-1.8L16 9z" fill="#fff" opacity=".7" />
      <path d="M4.7 2.6l9.3 9.4 3-3L5.7 2.5c-.5-.3-1-.3-1.4-.1z" fill="#fff" opacity=".55" />
    </svg>
  );
}
