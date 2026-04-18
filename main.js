/* ============================================================
   Sai Teja Reddy Vanga — Portfolio JavaScript
   Features: Dark mode, scroll reveal, sticky nav, mobile menu,
             staggered animations, contact form
   ============================================================ */

/* ── DARK / LIGHT MODE TOGGLE ── */
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme() {
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀' : '☾';
}

applyTheme();
themeBtn.addEventListener('click', () => {
  dark = !dark;
  applyTheme();
});

/* ── MOBILE HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ── SCROLL REVEAL (IntersectionObserver) ── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

reveals.forEach(r => revealObserver.observe(r));

/* ── STAGGERED SECTION ANIMATIONS ── */
document.querySelectorAll(
  '.skills-grid .skill-card, .exp-list .exp-item, .edu-grid .edu-card'
).forEach((el, i) => {
  el.style.transitionDelay = (i * 80) + 'ms';
});

/* ── STICKY NAV SHADOW ON SCROLL ── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,0.07)'
    : 'none';
});

/* ── CONTACT FORM HANDLER ── */
function submitForm() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmsg').value.trim();

  if (!name || !email || !msg) return;

  const successEl = document.getElementById('formSuccess');
  successEl.style.display = 'block';

  document.getElementById('fname').value  = '';
  document.getElementById('femail').value = '';
  document.getElementById('fmsg').value   = '';

  setTimeout(() => {
    successEl.style.display = 'none';
  }, 5000);
}
