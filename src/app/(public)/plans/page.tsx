import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { db } from "@/lib/db";
import { formatINR } from "@/lib/utils";
import { Check } from "lucide-react";

export const metadata: Metadata = { title: "Membership Plans" };

export default async function PlansPage() {
  const plans = await db.plan.findMany({
    where: { isActive: true },
    orderBy: { price: "asc" },
  });

  return (
    <div>
      <PageHeader
        eyebrow="Membership Plans"
        title="Simple, flexible pricing"
        description="Pick the plan that fits your goals. All plans include full access to machines and free weights."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        {plans.length === 0 ? (
          <p className="text-center text-muted">
            Plans are being updated — please check back shortly or contact us
            directly.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, i) => {
              const featured = i === Math.floor(plans.length / 2);
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    featured
                      ? "border-brand bg-brand/5 shadow-lg"
                      : "border-border bg-card"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">
                      {formatINR(plan.price)}
                    </span>
                    <span className="text-sm text-muted">
                      / {plan.durationDays} days
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={18} className="mt-0.5 shrink-0 text-brand" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/register"
                    className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition-colors ${
                      featured
                        ? "bg-brand text-white hover:bg-brand-dark"
                        : "border border-border hover:bg-background"
                    }`}
                  >
                    Enquire to Join
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
