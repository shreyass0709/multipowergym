import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { db } from "@/lib/db";
import { Dumbbell } from "lucide-react";

export const metadata: Metadata = { title: "Machines & Equipment" };

export default async function MachinesPage() {
  const machines = await db.machine.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div>
      <PageHeader
        eyebrow="Equipment"
        title="Machines & Equipment"
        description="A full range of cardio, strength, and free-weight equipment, kept clean and well-maintained."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        {machines.length === 0 ? (
          <p className="text-center text-muted">
            Equipment listings are coming soon.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {machines.map((m) => (
              <div
                key={m.id}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative flex h-44 items-center justify-center bg-background">
                  {m.imageUrl ? (
                    <Image
                      src={m.imageUrl}
                      alt={m.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Dumbbell size={40} className="text-muted" />
                  )}
                </div>
                <div className="p-5">
                  {m.category && (
                    <span className="text-xs font-medium uppercase tracking-wide text-brand">
                      {m.category}
                    </span>
                  )}
                  <h3 className="mt-1 font-semibold">{m.name}</h3>
                  {m.description && (
                    <p className="mt-1 text-sm text-muted">{m.description}</p>
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
