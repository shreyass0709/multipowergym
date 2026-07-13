# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Multi Power Gym — gym management site (Next.js 16 App Router + Prisma 7 + Postgres + Tailwind 4). Public marketing pages exist; member dashboard, admin area, payments (Razorpay), and notifications are planned phases (see `.env.example` for the phase roadmap).

## Commands

```bash
npm run dev                # dev server at http://localhost:3000
npm run build              # production build (also the de-facto type check)
npm run lint               # eslint

npx prisma migrate dev     # apply/create migrations (needs DATABASE_URL)
npx prisma db seed         # runs prisma/seed.ts via tsx (admin user + plans)
npx prisma generate        # regenerate client after schema changes
```

There is no test suite. Copy `.env.example` to `.env`; `DATABASE_URL` and `SESSION_SECRET` are required.

## Version gotchas (read before coding)

- **Next.js 16.2.10** — breaking changes vs. training data. Consult `node_modules/next/dist/docs/` for anything nontrivial. Known rename already in use here: Middleware is now **Proxy** — `src/proxy.ts` exports `proxy()`, not `middleware()`.
- **Prisma 7** — the datasource URL lives in `prisma.config.ts` (used by CLI commands), NOT in `schema.prisma`. The runtime client requires a driver adapter: `src/lib/db.ts` builds `PrismaClient` with `PrismaPg`. Standalone scripts (e.g. `prisma/seed.ts`) must construct their own adapter-based client and import `dotenv/config`.
- **Zod 4** — error messages use `{ error: "..." }` (not `{ message: ... }`), and email validation is top-level `z.email()`.

## Architecture

Three-layer auth model — keep these responsibilities separate:

1. **`src/proxy.ts`** — optimistic, cookie-only route protection (no DB calls). Routes: `/admin` requires ADMIN, `/dashboard` requires login, logged-in users are bounced off `/login`/`/register`.
2. **`src/lib/dal.ts`** — the real authorization layer. `getSession` / `verifySession` / `verifyAdmin` / `getCurrentUser`, all memoized with React `cache()`. Server components and actions must gate through these, never trust the proxy alone.
3. **`src/lib/session.ts`** — JWT (jose, HS256) in an httpOnly `session` cookie, 7-day expiry. Payload type is `SessionPayload` in `src/lib/definitions.ts`.

Server mutations follow one pattern: a `"use server"` action in `src/server/actions/` that takes `(prevState: FormState, formData: FormData)`, validates with a Zod schema from `src/lib/validators/` (or `src/lib/definitions.ts` for auth schemas), and returns `FormState` (`{ errors }` or `{ message }`) for `useActionState` on the client — see `src/server/actions/enquiry.ts` + `src/components/EnquiryForm.tsx`.

Other conventions:

- `@/*` maps to `src/*`. Server-only modules start with `import "server-only"`.
- Money is stored in **paise** (Int) throughout — never floats or rupees.
- Member onboarding is admin-first: admin creates a `User` with `status: PENDING_ACTIVATION` and no password; the member activates via 6-digit OTP (`otpCode`/`otpExpires` on User, helpers in `src/lib/auth-utils.ts`) and sets a password. `/register` is activation, not open signup.
- Public pages live in the `src/app/(public)` route group with its own layout (Navbar/Footer); shared UI in `src/components/` (use `PageHeader` for page tops).
