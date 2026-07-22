import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service | Multi Power Gym Navunda",
  description: "Terms of Service and Gym Rules for Multi Power Gym Navunda. Please review membership rules, timing guidelines, and facility policies.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#0a0a0a] text-[#A0A0A0] min-h-screen">
      <PageHeader
        eyebrow="TERMS & CONDITIONS"
        title="Terms of Service"
        description="Last updated: July 22, 2026. Rules, membership policies, and code of conduct at Multi Power Gym Navunda."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-sm leading-relaxed flex flex-col gap-10">
        
        {/* Intro Box */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 text-white">
          <h2 className="text-lg font-bold text-[#C6FF00] mb-2">Welcome to Multi Power Gym Navunda</h2>
          <p className="text-xs text-[#A0A0A0]">
            By registering for a membership, accessing our facility, or using our online services, you agree to comply with the following Terms of Service and gym rules. Please read them carefully.
          </p>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">1. Gym Operating Hours & Access</h3>
          <p>Members must adhere to official operating hours for workout sessions:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-1 text-[#CCCCCC]">
            <li><strong className="text-white">Morning Session:</strong> 6:00 AM to 10:00 AM</li>
            <li><strong className="text-white">Afternoon / Evening Session:</strong> 4:00 PM to 9:00 PM</li>
            <li><strong className="text-white">Digital Verification:</strong> Members must present their digital entry pass / QR code at the reception before entering the workout floor.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">2. Membership Plans & Payment Terms</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-1 text-[#CCCCCC]">
            <li>Membership fees must be paid in advance via approved payment channels.</li>
            <li>All membership plans (Monthly, Quarterly, Half-Yearly, Yearly VIP) are non-transferable and non-refundable once activated.</li>
            <li>In cases of medical emergencies, membership pause requests may be considered at the sole discretion of gym management.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">3. Gym Floor Code of Conduct</h3>
          <p>To maintain a safe, clean, and respectful environment for all members:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-1 text-[#CCCCCC]">
            <li><strong className="text-white">Clean Footwear:</strong> Members must carry clean, non-marking indoor sports shoes dedicated exclusively for gym floor use.</li>
            <li><strong className="text-white">Equipment Care:</strong> Always re-rack dumbbells, weight plates, and barbells after use. Slamming weights or misusing machines is strictly prohibited.</li>
            <li><strong className="text-white">Hygiene:</strong> Carry a clean workout towel. Wipe down equipment seats and handles after completing sets.</li>
            <li><strong className="text-white">Personal Belongings:</strong> Use lockers to store bags and personal items. Multi Power Gym is not responsible for lost or stolen valuables.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">4. Health & Physical Safety Disclaimer</h3>
          <p>
            Members consult with certified master trainers for exercise guidance. Members participate in strength training, cardio, and heavy lifts at their own physical risk. Please inform trainers of pre-existing injuries or health conditions prior to training.
          </p>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">5. Termination of Membership</h3>
          <p>
            Multi Power Gym Navunda reserves the right to suspend or terminate membership access without refund in the event of severe code of conduct violations, harassment, property damage, or unpaid dues.
          </p>
        </div>

        {/* Section 6: Contact */}
        <div className="p-6 rounded-2xl glass-card border border-[#C6FF00]/30 flex flex-col gap-2 mt-4">
          <h3 className="text-base font-bold text-white">Contact Gym Management</h3>
          <p className="text-xs text-[#A0A0A0]">
            If you have questions regarding membership policies or gym rules:
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-2 text-xs font-bold text-white">
            <span>📍 Multi Power Gym, Highway Junction, Navunda, Karnataka 576224</span>
            <a href="tel:+918296931409" className="text-[#C6FF00] hover:underline">📞 Phone: +91 82969 31409</a>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#666666]">
          <Link href="/" className="hover:text-[#C6FF00] transition-colors">← Back to Homepage</Link>
          <Link href="/privacy" className="hover:text-[#C6FF00] transition-colors">Read Privacy Policy →</Link>
        </div>

      </section>
    </div>
  );
}
