import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { db } from "@/lib/db";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = { title: "Gallery" };

export default async function GalleryPage() {
  const images = await db.galleryImage.findMany({
    orderBy: { uploadedAt: "desc" },
  });

  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the gym"
        description="A look at our facility, equipment, and the community that trains here."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border py-24 text-center">
            <ImageIcon size={36} className="text-muted" />
            <p className="text-muted">
              Photos are coming soon — the admin can add them from the
              dashboard.
            </p>
          </div>
        ) : (
          <div className="columns-2 gap-4 sm:columns-3">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={img.url}
                  alt={img.caption ?? "Gallery photo"}
                  width={500}
                  height={500}
                  className="h-auto w-full object-cover"
                />
                {img.caption && (
                  <p className="bg-black/60 p-2 text-xs text-white">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
