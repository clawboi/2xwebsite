/* ============================================================
   2X — AOCD :: supabase.js
   Wires the INQUIRIES form to a Supabase 'messages' table.
   See SUPABASE_SETUP.md for the SQL schema + RLS policy.
   ============================================================ */

// REPLACE these two values with your Supabase project's keys.
// You can find them in: Supabase Dashboard → Project Settings → API
const SUPABASE_URL      = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// REPLACE with 2X's destination email (optional — Supabase Edge Function
// or a trigger can forward new rows to this address; see SUPABASE_SETUP.md)
const NOTIFY_EMAIL = 'YOUR_EMAIL@EXAMPLE.COM';

(function initInquiryForm() {
  const sendBtn = document.getElementById('f-send');
  const statusEl = document.getElementById('f-status');
  if (!sendBtn || !statusEl) return;

  const setStatus = (msg, state = 'info') => {
    statusEl.textContent = msg;
    statusEl.setAttribute('data-state', state);
  };

  // Bail clearly if the project hasn't been configured yet.
  const configured =
    SUPABASE_URL && SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' &&
    SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';

  if (!configured) {
    setStatus('// form not yet connected to backend', 'info');
  }

  let client = null;
  if (configured && window.supabase) {
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

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
    if (!configured || !client) {
      setStatus('// backend not configured yet — see SUPABASE_SETUP.md', 'err');
      return;
    }

    sendBtn.disabled = true;
    setStatus('// transmitting...', 'info');

    try {
      const { error } = await client
        .from('messages')
        .insert([{ name, email, message }]);

      if (error) throw error;

      setStatus('// message received. 2X will respond.', 'ok');
      document.getElementById('f-name').value = '';
      document.getElementById('f-email').value = '';
      document.getElementById('f-message').value = '';
    } catch (err) {
      console.error('[2X/AOCD] Supabase insert failed:', err);
      setStatus('// transmission failed. try again.', 'err');
    } finally {
      sendBtn.disabled = false;
    }
  });
})();
