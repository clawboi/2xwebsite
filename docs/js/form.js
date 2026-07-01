/* ============================================================
   2X — AOCD :: form.js
   Posts INQUIRIES to Formspree. If the API is unreachable
   (offline, rate-limited, etc.) falls back to mailto: so
   the message never goes into a void.
   ============================================================ */

const FORMSPREE_URL  = 'https://formspree.io/f/xeebrqqe';
const FALLBACK_EMAIL = '2x2slattyy@gmail.com';

(function initInquiryForm() {
  const sendBtn  = document.getElementById('f-send');
  const statusEl = document.getElementById('f-status');
  if (!sendBtn || !statusEl) return;

  const setStatus = (msg, state = 'info') => {
    statusEl.textContent = msg;
    statusEl.setAttribute('data-state', state);
  };

  const openMailto = (name, email, message) => {
    const subject = encodeURIComponent(`AOCD inquiry from ${name}`);
    const body    = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
  };

  sendBtn.addEventListener('click', async () => {
    const name    = document.getElementById('f-name').value.trim();
    const email   = document.getElementById('f-email').value.trim();
    const message = document.getElementById('f-message').value.trim();

    if (!name || !email || !message) {
      setStatus('// all fields required', 'err');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('// invalid email', 'err');
      return;
    }

    sendBtn.disabled = true;
    setStatus('// transmitting...', 'info');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) {
        // Try to surface the actual error from Formspree
        let errMsg = 'submission rejected';
        try {
          const data = await res.json();
          if (data && data.errors && data.errors.length) {
            errMsg = data.errors.map(e => e.message).join(', ');
          }
        } catch (_) {}
        throw new Error(errMsg);
      }

      setStatus('// message received. 2X will respond.', 'ok');
      document.getElementById('f-name').value = '';
      document.getElementById('f-email').value = '';
      document.getElementById('f-message').value = '';
    } catch (err) {
      console.error('[2X/AOCD] Formspree submission failed:', err);
      setStatus('// opening email fallback...', 'info');
      openMailto(name, email, message);
    } finally {
      sendBtn.disabled = false;
    }
  });
})();
