// Small, dependency-free motion for the website. Everything here is optional: if this file does not run, all content is still visible.
// Respects "reduce motion" settings and only uses transform / opacity.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

/* ---------- reveal on scroll (with optional stagger for children) ---------- */
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach(group => {
  const step = Number(group.dataset.stagger) || 90;
  Array.from(group.querySelectorAll<HTMLElement>('[data-reveal]')).forEach((el, i) => el.style.setProperty('--d', `${i * step}ms`));
});
document.querySelectorAll<HTMLElement>('[data-reveal][data-delay]').forEach(el => el.style.setProperty('--d', `${el.dataset.delay}ms`));

if (reduce || !('IntersectionObserver' in window)) {
  document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
}

/* ---------- scroll progress bar, header shadow, parallax, drawing line ---------- */
const bar = document.getElementById('progress');
const header = document.querySelector<HTMLElement>('header[data-header]');
const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
const lines = Array.from(document.querySelectorAll<HTMLElement>('[data-progress]'));
const phone = document.querySelector<HTMLElement>('[data-stage]');
let ticking = false;
let mouseTilt = false;      // when the pointer drives the 3D phone, scroll does not

const onScroll = () => {
  ticking = false;
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  bar?.style.setProperty('--sp', String(max > 0 ? clamp(y / max) : 0));
  header?.classList.toggle('is-scrolled', y > 8);
  if (!reduce) {
    for (const el of parallax) {
      const speed = Number(el.dataset.parallax) || 0.1;
      const r = el.getBoundingClientRect();
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
    }
    for (const el of lines) {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--p', String(clamp((window.innerHeight * 0.85 - r.top) / Math.max(r.height, 1))));
    }
    // phones and tablets: the 3D phone turns gently as you scroll
    if (phone && !mouseTilt) {
      phone.style.setProperty('--ry', `${(Math.sin(y / 260) * 9).toFixed(2)}deg`);
      phone.style.setProperty('--rx', `${(Math.cos(y / 320) * 4).toFixed(2)}deg`);
    }
  }
};
const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
window.addEventListener('scroll', request, { passive: true });
window.addEventListener('resize', request, { passive: true });
onScroll();

/* ---------- pointer effects (desktop only) ---------- */
if (!reduce && finePointer) {
  // the 3D phone follows the pointer, smoothly
  const scene = document.querySelector<HTMLElement>('[data-scene]');
  if (scene && phone) {
    mouseTilt = true;
    let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
    const loop = () => {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      phone.style.setProperty('--ry', `${cx.toFixed(2)}deg`);
      phone.style.setProperty('--rx', `${cy.toFixed(2)}deg`);
      if (Math.abs(tx - cx) > 0.01 || Math.abs(ty - cy) > 0.01) requestAnimationFrame(loop); else running = false;
    };
    const kick = () => { if (!running) { running = true; requestAnimationFrame(loop); } };
    window.addEventListener('pointermove', e => {
      const r = scene.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const nx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;       // -0.5 .. 0.5 across the screen
      const ny = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      tx = clamp(nx, -0.6, 0.6) * 34; ty = clamp(ny, -0.6, 0.6) * -22; kick();
    }, { passive: true });
    document.addEventListener('pointerleave', () => { tx = 0; ty = 0; kick(); });
  }

  // cards lean toward the pointer, and a soft light follows it
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(card => {
    const max = Number(card.dataset.tilt) || 6;
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', `${((x - 0.5) * 2 * max).toFixed(2)}deg`);
      card.style.setProperty('--rx', `${((0.5 - y) * 2 * max).toFixed(2)}deg`);
      card.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  });

  // buttons are gently pulled toward the pointer
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate3d(${((e.clientX - (r.left + r.width / 2)) * 0.18).toFixed(1)}px, ${((e.clientY - (r.top + r.height / 2)) * 0.28).toFixed(1)}px, 0)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
}
