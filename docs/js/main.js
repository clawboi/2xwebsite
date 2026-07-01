/* ============================================================
   2X — AOCD :: main.js
   ============================================================ */

// -----------------------------------------------------------
// CONSOLE EASTER EGG — for the curious ones who open DevTools
// -----------------------------------------------------------
(function consoleBrand() {
  const art = `
%c
   █████╗  ██████╗  ██████╗██████╗
  ██╔══██╗██╔═══██╗██╔════╝██╔══██╗
  ███████║██║   ██║██║     ██║  ██║
  ██╔══██║██║   ██║██║     ██║  ██║
  ██║  ██║╚██████╔╝╚██████╗██████╔╝
  ╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═════╝

  2X / AOCD / OUT SOON
  ────────────────────
%c  hint: ↑ ↑ ↓ ↓ ← → ← → B A
`;
  console.log(
    art,
    'color:#BD0906;font-weight:700;font-family:monospace',
    'color:#00FF33;font-family:monospace'
  );
})();

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
        const link = document.getElementById('game-link');
        const href = link && link.getAttribute('href');
        if (href && href !== '#') {
          window.open(href, '_blank');
        }
        pos = 0;
      }
    } else {
      pos = 0;
    }
  });
})();

// -----------------------------------------------------------
// SMOOTH SCROLL for footer nav + block scroll-to-top on
// any href="#" placeholder so unfilled links don't fire the
// page upward when someone clicks them mid-deploy.
// -----------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id === '#') {
      e.preventDefault();
      console.warn('[2X/AOCD] Placeholder link clicked — fill in real URL before launch.');
      return;
    }
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
// PLACEHOLDER GUARD — logs to console which links still need
// real URLs. Covers all 10 placeholder hrefs (presave, discord,
// game, 3 streaming services, 6 shop tiles).
// -----------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  const missing = [];

  // Named-id checks (presave / discord / game)
  [
    ['presave-link', 'PRIMARY CTA'],
    ['discord-link', 'DISCORD'],
    ['game-link',    'GAME'],
  ].forEach(([id, name]) => {
    const el = document.getElementById(id);
    if (el && el.getAttribute('href') === '#') missing.push(name);
  });

  // Streaming tiles
  document.querySelectorAll('.follow__tile').forEach(tile => {
    if (tile.getAttribute('href') === '#') {
      missing.push(`FOLLOW: ${tile.dataset.platform || '?'}`);
    }
  });

  // Shop tiles
  document.querySelectorAll('.shop__item').forEach((tile, i) => {
    if (tile.getAttribute('href') === '#') missing.push(`SHOP #${i + 1}`);
  });

  if (missing.length) {
    console.warn(
      '[2X/AOCD] Placeholder links still need real URLs:\n  • ' +
      missing.join('\n  • ')
    );
  } else {
    console.log('%c[2X/AOCD] All links filled in. Ready to ship.', 'color:#00FF33');
  }
});
