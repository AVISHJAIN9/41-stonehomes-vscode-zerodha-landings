// Lightweight interactions for Stone Homes

// Smooth scroll for internal links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  const id = a.getAttribute('href');
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
});

// Reveal on scroll
const reveals2 = document.querySelectorAll('.reveal-on-scroll');
const revealObserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.15 });
reveals2.forEach(r => revealObserver2.observe(r));

// Simple hover lift for cards
const cards = document.querySelectorAll('.home');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('is-lifted'));
  card.addEventListener('mouseleave', () => card.classList.remove('is-lifted'));
});

// Small button focus indicator
document.addEventListener('focusin', (e) => {
  const b = e.target.closest('.btn');
  if (b) b.classList.add('is-focused');
});

document.addEventListener('focusout', (e) => {
  const b = e.target.closest('.btn');
  if (b) b.classList.remove('is-focused');
});
