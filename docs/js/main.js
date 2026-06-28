/* ============================================================
   2X — AOCD :: main.js
   ============================================================ */

// -----------------------------------------------------------
// KONAMI CODE EASTER EGG — opens the hidden game
// up up down down left right left right b a
// -----------------------------------------------------------
(function konamiEasterEgg() {
  const sequence = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  let pos = 0;

  document.addEventListener('keydown', (e) => {
    const expected = sequence[pos];
    if (e.code === expected) {
      pos += 1;
      if (pos === sequence.length) {
        const link = document.getElementById('hidden-game');
        if (link && link.href && link.href !== '#' && link.href !== window.location.href + '#') {
          window.open(link.href, '_blank');
        }
        pos = 0;
      }
    } else {
      pos = 0;
    }
  });
})();

// -----------------------------------------------------------
// SMOOTH SCROLL for footer nav (gracefully handled by CSS,
// but ensure no jump on click)
// -----------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// -----------------------------------------------------------
// PLACEHOLDER GUARD — visual hint in dev when links aren't set
// (disabled in production-feeling output; only logs to console)
// -----------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  const checks = [
    { id: 'presave-link', name: 'PRESAVE' },
    { id: 'discord-link', name: 'DISCORD' },
    { id: 'hidden-game',  name: 'GAME (hidden)' },
  ];
  const missing = checks.filter(c => {
    const el = document.getElementById(c.id);
    if (!el) return false;
    const h = el.getAttribute('href');
    return !h || h === '#';
  });
  if (missing.length) {
    console.warn('[2X/AOCD] These links are still placeholders:',
      missing.map(m => m.name).join(', '));
  }
});
