import Link from "next/link";
import { Dumbbell, Users, CalendarCheck, BellRing, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "Cardio, strength and free-weight machines maintained to the highest standard.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Personalised workout plans for weight loss, muscle gain and general fitness.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Plans",
    desc: "Monthly, quarterly and yearly memberships to suit every goal and budget.",
  },
  {
    icon: BellRing,
    title: "Never Miss a Renewal",
    desc: "Automatic reminders before your membership expires — renew online in seconds.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/10 via-background to-background" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-brand" /> Now open in Navunda
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Train hard.{" "}
            <span className="text-brand">Live strong.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Multi Power Gym Navunda is your home for strength and fitness — modern
            machines, expert workout plans, and a community that pushes you
            forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
            >
              View Membership Plans <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-card"
            >
              About the Gym
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <h.icon size={22} />
              </span>
              <h3 className="mt-4 font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm text-muted">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl bg-brand px-8 py-12 text-center text-white sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to start your fitness journey?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/90">
            Visit us in Navunda to enroll, then activate your account online to
            track your plan and renew anytime.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-brand transition-transform hover:scale-105"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
