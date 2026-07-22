import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Multi Power Gym Navunda",
  description: "Privacy Policy for Multi Power Gym Navunda. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0a0a0a] text-[#A0A0A0] min-h-screen">
      <PageHeader
        eyebrow="LEGAL NOTICE"
        title="Privacy Policy"
        description="Last updated: July 22, 2026. How Multi Power Gym Navunda collects, protects, and manages your personal information."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-sm leading-relaxed flex flex-col gap-10">
        
        {/* Intro Box */}
        <div className="p-6 rounded-2xl glass-card border border-white/10 text-white">
          <h2 className="text-lg font-bold text-[#C6FF00] mb-2">Our Commitment To Your Privacy</h2>
          <p className="text-xs text-[#A0A0A0]">
            At Multi Power Gym Navunda ("we", "our", or "us"), we prioritize the privacy and security of our gym members and website visitors. This Privacy Policy outlines the types of personal data we collect, how it is used, and your rights regarding your information.
          </p>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">1. Information We Collect</h3>
          <p>We collect personal information necessary to manage gym memberships, deliver personal coaching, and ensure facility security:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-1 text-[#CCCCCC]">
            <li><strong className="text-white">Personal Identity Data:</strong> Full Name, Contact Phone Number (+91 82969 31409), Email Address, Emergency Contact details.</li>
            <li><strong className="text-white">Membership Details:</strong> Selected Plan Tier (Monthly, Quarterly, Half-Yearly, Yearly VIP), start/expiry dates, payment records.</li>
            <li><strong className="text-white">Health & Fitness Data:</strong> Optional physical assessment metrics, trainer notes, and diet goals shared voluntarily with our certified trainers.</li>
            <li><strong className="text-white">Digital Access Logs:</strong> Access records logged via member QR/digital entry passes for security and attendance tracking.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">2. How We Use Your Information</h3>
          <p>Your information is strictly used for legitimate business and gym operations:</p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-1 text-[#CCCCCC]">
            <li>Verifying membership identity at gym entry points.</li>
            <li>Processing membership renewals, billing notifications, and customer support.</li>
            <li>Designing customized diet charts and personal workout conditioning programs.</li>
            <li>Sending critical operational updates (gym timing changes, holiday schedules, equipment updates).</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">3. Data Sharing & Third-Party Protection</h3>
          <p>
            We do <strong className="text-[#C6FF00]">NOT</strong> sell, rent, or trade your personal data to any third-party marketing agencies. Data is only shared under the following circumstances:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 mt-1 text-[#CCCCCC]">
            <li>Secure, RBI-compliant payment gateway partners for online fee transactions.</li>
            <li>Official law enforcement or legal authorities if mandatory by law or safety regulations.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">4. Facility Security & CCTV Surveillance</h3>
          <p>
            For member safety and crime prevention, Multi Power Gym Navunda operates 24/7 CCTV camera surveillance across gym floors and entrance areas. Surveillance footage is strictly restricted to gym management and kept secure.
          </p>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black text-white">5. Your Rights & Data Access</h3>
          <p>
            You have the right to request access to your member profile, update your contact details, or request deletion of non-essential records upon membership expiration by reaching out to us.
          </p>
        </div>

        {/* Section 6: Contact */}
        <div className="p-6 rounded-2xl glass-card border border-[#C6FF00]/30 flex flex-col gap-2 mt-4">
          <h3 className="text-base font-bold text-white">Have Privacy Questions?</h3>
          <p className="text-xs text-[#A0A0A0]">
            For any queries or concerns regarding your data privacy, contact the Gym Management:
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-2 text-xs font-bold text-white">
            <span>📍 Location: Multi Power Gym, Highway Junction, Navunda, Karnataka 576224</span>
            <a href="tel:+918296931409" className="text-[#C6FF00] hover:underline">📞 Phone: +91 82969 31409</a>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#666666]">
          <Link href="/" className="hover:text-[#C6FF00] transition-colors">← Back to Homepage</Link>
          <Link href="/terms" className="hover:text-[#C6FF00] transition-colors">Read Terms of Service →</Link>
        </div>

      </section>
    </div>
  );
}
