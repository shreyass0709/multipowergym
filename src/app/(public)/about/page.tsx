import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Clock, Target, Users, Award } from "lucide-react";

export const metadata: Metadata = { title: "About Us" };

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make strength training and fitness accessible to everyone in Navunda, with modern equipment and expert guidance at a fair price.",
  },
  {
    icon: Users,
    title: "Our Community",
    desc: "A judgment-free space for beginners and veterans alike — every member trains with support from staff and fellow gym-goers.",
  },
  {
    icon: Award,
    title: "Our Standard",
    desc: "Clean, well-maintained machines, hygienic facilities, and trainers who genuinely care about your progress.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Us"
        title="Multi Power Gym Navunda"
        description="Built for people who are serious about their fitness — whether that's your first workout or your thousandth."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Multi Power Gym Navunda was started with one goal: to bring a
              genuinely well-equipped, professionally run gym to Navunda.
              We&apos;ve grown into a home for people chasing weight loss,
              muscle gain, or simply a healthier lifestyle — with machines
              that work, trainers who know their craft, and a community that
              keeps you accountable.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Whether you&apos;re walking in for the first time or you&apos;ve
              been training with us for years, our aim stays the same: help
              you become stronger, fitter, and more confident.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold">Visit Us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-muted">Navunda, Karnataka, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-muted">+91 00000 00000</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-muted">
                  Monday – Saturday, 6:00 AM – 10:00 PM
                  <br />
                  Sunday, 7:00 AM – 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <v.icon size={22} />
              </span>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
