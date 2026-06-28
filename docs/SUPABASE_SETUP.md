# Supabase setup — contact form backend

Sets up the database table behind the **INQUIRIES** form. ~5 minutes.

---

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → **New project**.
2. Name it (e.g. `2x-aocd`), set a strong DB password, pick the closest region.
3. Wait for it to spin up (~2 min).

---

## 2. Get your API keys

1. In the dashboard → **Project Settings** → **API**.
2. Copy two values:
   - **Project URL** (looks like `https://abcdefg.supabase.co`)
   - **anon / public key** (the long `eyJ…` string — NOT the service_role key)

Paste them into `js/supabase.js`:

```js
const SUPABASE_URL      = 'https://abcdefg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...your-anon-key...';
```

> **Never paste the `service_role` key into client-side JS.** It bypasses all security. The `anon` key is safe to ship.

---

## 3. Create the `messages` table

In the Supabase dashboard → **SQL Editor** → New query, paste this, run:

```sql
-- Inquiries table
create table public.messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 100),
  email       text not null check (email ~* '^\S+@\S+\.\S+$'),
  message     text not null check (char_length(message) between 1 and 5000)
);

-- Enable Row Level Security
alter table public.messages enable row level security;

-- Allow anyone to INSERT (so the public form can send)
create policy "anon can insert messages"
  on public.messages
  for insert
  to anon
  with check (true);

-- Nobody but you (via dashboard / service_role) can read them
-- (no select policy = no select access via anon key)
```

That's it. Form submissions will land in `public.messages`. You read them by:
- Dashboard → **Table Editor** → `messages`
- or set up email forwarding (step 4 below, optional)

---

## 4. Email notifications (optional)

If you want 2X to get an email every time someone submits the form, the cleanest way is a **Database Webhook** that triggers a free service like [Resend](https://resend.com), [Postmark](https://postmarkapp.com), or a Supabase Edge Function.

Quick path with Resend:

1. Sign up at resend.com (free tier: 3,000 emails/mo).
2. Verify a sending domain.
3. In Supabase → **Database** → **Webhooks** → New webhook:
   - Table: `messages`
   - Events: `Insert`
   - Type: HTTP request → POST to Resend's API
   - Headers: `Authorization: Bearer YOUR_RESEND_KEY`
   - Payload: build a JSON body with the new row data

(Doc: [Supabase webhooks](https://supabase.com/docs/guides/database/webhooks))

If that's too much for July 1st, **skip this step** — the form still works, messages just sit in the dashboard until you check them.

---

## 5. Test it

1. Open the site locally (just open `index.html` in a browser — no server needed).
2. Scroll to **INQUIRIES**, fill it out, hit SEND.
3. You should see `// message received. 2X will respond.` in green.
4. Check the dashboard → Table Editor → `messages` — your row should be there.

If you see `// transmission failed`, open DevTools console for the actual error (usually a typo'd key or RLS policy missing).

---

## Anti-spam (optional, if it becomes a problem after launch)

Lowest-friction options:

- **Rate limit at Supabase** via a policy that blocks more than N inserts per IP per hour (requires the `realtime_rls` extension or a custom function).
- Add a honeypot field to the form (hidden input that bots fill but humans don't). I left the form clean for now since underground rap drops don't usually attract spam day one.
