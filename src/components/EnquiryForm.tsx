"use client";

import { useActionState } from "react";
import { submitEnquiry } from "@/server/actions/enquiry";
import { CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand";

export default function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, undefined);

  if (state?.message) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 size={40} className="text-brand" />
        <p className="font-medium">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input id="name" name="name" className={inputClass} placeholder="Your name" />
        {state?.errors?.name && (
          <p className="mt-1 text-xs text-brand">{state.errors.name[0]}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone
          </label>
          <input id="phone" name="phone" className={inputClass} placeholder="+91 00000 00000" />
          {state?.errors?.phone && (
            <p className="mt-1 text-xs text-brand">{state.errors.phone[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email <span className="text-muted">(optional)</span>
          </label>
          <input id="email" name="email" type="email" className={inputClass} placeholder="you@example.com" />
          {state?.errors?.email && (
            <p className="mt-1 text-xs text-brand">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us what you're looking for..."
        />
        {state?.errors?.message && (
          <p className="mt-1 text-xs text-brand">{state.errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
