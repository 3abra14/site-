# CLAUDE.md | The Medical Architect

## Build Environment
- **Framework**: Next.js 14+ (App Router)
- **Runtime**: Node.js / Deno (for Edge Functions)
- **DB**: Supabase (PostgreSQL)
- **Styles**: Vanilla CSS + Tailwind v4

## Code Style & Rules
- **Naming**: `camelCase` for TS/JS, `snake_case` for DB columns.
- **Components**: Functional components only. Use `Server Actions` for data mutations.
- **Security**: Never expose Service Role keys on the frontend. Use RLS.
- **Testing**: Use Telegram for admin notifications during development.

## Critical Project Logic
- **Booking Flow**: `User Input` -> `PENDING Booking` -> `Admin Telegram Notification` -> `Manual Admin Confirmation` -> `Google Calendar Sync` + `CONFIRMED Status`.
- **Auto-Cleanup**: `pg_cron` deletes `PENDING` bookings older than 30 mins to release the slot.

## Key Files
- Roadmap: `path.md`
- DB Schema: `SUPABASE_SCHEMA.sql`
- Handover Context: `AGENTS.md`
- Design Tokens: `DESIGN.md`
