import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { db } from "@/lib/db";
import { ClipboardList } from "lucide-react";

export const metadata: Metadata = { title: "Workout Plans" };

export default async function WorkoutsPage() {
  const workouts = await db.workoutPlan.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div>
      <PageHeader
        eyebrow="Workout Plans"
        title="Plans for every goal"
        description="Structured workout plans designed by our trainers — from fat loss to muscle gain."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        {workouts.length === 0 ? (
          <p className="text-center text-muted">
            Workout plans are being added — check back soon.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((w) => (
              <div
                key={w.id}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative flex h-40 items-center justify-center bg-background">
                  {w.imageUrl ? (
                    <Image
                      src={w.imageUrl}
                      alt={w.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <ClipboardList size={36} className="text-muted" />
                  )}
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {w.goal && (
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
                        {w.goal}
                      </span>
                    )}
                    {w.level && (
                      <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted ring-1 ring-border">
                        {w.level}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-semibold">{w.title}</h3>
                  {w.description && (
                    <p className="mt-1 text-sm text-muted">{w.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
