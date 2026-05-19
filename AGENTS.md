# AGENT HANDOVER: THE MEDICAL ARCHITECT

## 🎯 The Mission
Build a luxury surgical clinic booking system that feels like a premium digital concierge. The user experience must be "Editorial Luxury" — high contrast, sophisticated typography, and smooth 3D transitions.

## 🛠️ The Stack
- **Frontend**: Next.js 14 (App Router), React 19, GSAP, React Three Fiber.
- **Backend**: Supabase (Auth, PostgreSQL, Edge Functions).
- **Automation**: 
  - **Telegram**: Notifications to Admin when a new booking is PENDING.
  - **Google Calendar**: Event creation ONLY when a booking is CONFIRMED by an Admin.
  - **pg_cron**: Auto-cleanup of PENDING slots after 30 minutes.

## 🧠 Logic & Rules
1. **HIL (Human-in-the-Loop)**: No booking is automatically confirmed. It enters a `PENDING` state. The Admin must manually confirm it.
2. **3D State Sync**: 
   - `SLOT_IDLE` (Available) -> Floating 3D fragments.
   - `SLOT_LOCKED` (Pending) -> Glowing fragments.
   - `SLOT_TAKEN` (Confirmed) -> Absorbed fragments.
3. **Security**: 
   - RLS must be enabled on all tables. 
   - Public can only `SELECT` available slots.
   - Only `authenticated` users with `admin` role can see/edit bookings.

## 🚀 Priority Checklist for Builder
- [ ] **Context Sync**: Read `path.md` and `EFFICIENCY.md` first.
- [ ] **Secrets Setup**: Verify environment variables using `.env.example`.
- [ ] **Provisioning**: Create Supabase project and apply `SUPABASE_SCHEMA.sql` via Supabase MCP.
- [ ] **Dependency Injection**: Install `@supabase/supabase-js`, `googleapis`.
- [ ] **Hero Agent (Sonnet 4.6)**: Build the 3D Logo "Unfolding" logic and "Life-Pulse" (Ref: `hero.md`).
- [ ] **Booking Agent (Gemini 3 Pro)**: Build the `BookingForm` and HIL "Verifying" state (Ref: `booking.md`).
- [ ] **Backend Agent (Opus 4.6)**: Setup Supabase, RLS, and Edge Functions for Telegram/GCal (Ref: `backend.md`).

## 🔐 Secrets Setup (User Input Required)
The builder must ask the user for:
1. **Telegram**: `BOT_TOKEN` (Use @BotFather).
2. **Google Calendar**: Service Account JSON (Client Email & Private Key) + Calendar ID.
3. **Supabase**: URL and Keys if not automatically detected.

## 📝 Critical Files
- `path.md`: High-level roadmap and token optimization rules.
- `EFFICIENCY.md`: Token-saving protocols for the build.
- `SUPABASE_SCHEMA.sql`: Database definition.
- `DESIGN.md`: Visual identity and design tokens.
- `TECH_SPEC.md`: Technical architecture details.
- `hero.md`: 3D Logo assembly and interactive behavior.
- `booking.md`: HIL user flow and "Medical Review" states.
- `backend.md`: XML-based backend/automation logic.
- `.env.example`: Template for required secrets.

> [!IMPORTANT]
> **TOKEN EFFICIENCY**: Only read the files you need. Summarize your progress in `task.md` frequently. Use Gemini Flash for file edits and 3 Pro for architecture logic.
