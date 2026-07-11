import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question about plans, timings, or training? Send us a message and we'll get back to you."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <EnquiryForm />
          </div>

          <div>
            <h3 className="font-semibold">Contact Details</h3>
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
                <Mail size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-muted">info@multipowergym.com</span>
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
      </section>
    </div>
  );
}
