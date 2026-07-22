"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Dumbbell,
  LogOut,
  Sparkles,
  Search,
  Check,
  X,
  FileText,
  Mail,
  Phone,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useAuth } from "@/lib/auth-context";

interface PendingApplicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  goal: string;
  experience: string;
  submittedAt: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  const [applicants, setApplicants] = useState<PendingApplicant[]>([
    {
      id: "MPG-APP-9101",
      name: "Rohan Shetty",
      email: "rohan.shetty@gmail.com",
      phone: "+91 98234 11223",
      goal: "Muscle Gain",
      experience: "Intermediate",
      submittedAt: "10 mins ago",
      status: "PENDING",
    },
    {
      id: "MPG-APP-9102",
      name: "Ananya Rao",
      email: "ananya.rao@outlook.com",
      phone: "+91 97412 88990",
      goal: "Weight Loss",
      experience: "Beginner",
      submittedAt: "2 hours ago",
      status: "PENDING",
    },
    {
      id: "MPG-APP-9103",
      name: "Karthik Bhat",
      email: "karthik.bhat@yahoo.com",
      phone: "+91 94481 55667",
      goal: "Bodybuilding",
      experience: "Advanced",
      submittedAt: "5 hours ago",
      status: "PENDING",
    },
  ]);

  const handleApprove = (id: string) => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: "APPROVED" } : app))
    );
  };

  const handleReject = (id: string) => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: "REJECTED" } : app))
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#C6FF00] selection:text-black">
      
      {/* Top Navbar Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#C6FF00] text-black font-black flex items-center justify-center shadow-[0_0_20px_rgba(198,255,0,0.4)]">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-white">Admin Control Panel</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/40 text-[10px] font-extrabold text-[#C6FF00] uppercase tracking-wider">
                Gym Owner Role
              </span>
            </div>
            <p className="text-xs text-[#A0A0A0]">Multi Power Gym Navunda</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-white">{user?.name || "Master Admin"}</p>
            <p className="text-[11px] text-[#A0A0A0]">admin@multipowergym.com</p>
          </div>

          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="h-4 w-4 mr-1.5" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Overview Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <GlassCard className="p-5 border-[#C6FF00]/30">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Pending Registrations</p>
                <h3 className="text-3xl font-black text-[#C6FF00] mt-1">
                  {applicants.filter((a) => a.status === "PENDING").length}
                </h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/40 flex items-center justify-center text-[#C6FF00]">
                <Clock className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#A0A0A0] mt-3">Awaiting Owner Review</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Total Active Members</p>
                <h3 className="text-3xl font-black text-white mt-1">1,420</h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6FF00]">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#C6FF00] mt-3 font-semibold">+28 this month</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Gym Equipment</p>
                <h3 className="text-3xl font-black text-white mt-1">100% Operational</h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6FF00]">
                <Dumbbell className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#A0A0A0] mt-3">All zones inspected</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Monthly Revenue</p>
                <h3 className="text-3xl font-black text-white mt-1">₹ 4.8L</h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6FF00]">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#C6FF00] mt-3 font-semibold">+14.2% growth</p>
          </GlassCard>

        </div>

        {/* Member Application Approval Queue */}
        <GlassCard>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-bold text-[#C6FF00] mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Approval Desk</span>
              </div>
              <h2 className="text-xl font-black text-white">Join Gym Membership Applications</h2>
              <p className="text-xs text-[#A0A0A0]">
                Review applicant profiles submitted from the &quot;Join Our Gym&quot; form and approve or reject membership access.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                  <th className="py-3 px-4">Applicant</th>
                  <th className="py-3 px-4">Contact Info</th>
                  <th className="py-3 px-4">Fitness Profile</th>
                  <th className="py-3 px-4">Submitted</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {applicants.map((app) => (
                  <tr key={app.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-bold text-white">{app.name}</p>
                      <p className="text-[10px] font-mono text-[#A0A0A0]">{app.id}</p>
                    </td>

                    <td className="py-4 px-4 space-y-0.5">
                      <p className="text-white flex items-center gap-1">
                        <Mail className="h-3 w-3 text-[#C6FF00]" /> {app.email}
                      </p>
                      <p className="text-[#A0A0A0] flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {app.phone}
                      </p>
                    </td>

                    <td className="py-4 px-4">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-white font-semibold mr-1.5">
                        {app.goal}
                      </span>
                      <span className="text-[#A0A0A0]">({app.experience})</span>
                    </td>

                    <td className="py-4 px-4 text-[#A0A0A0]">{app.submittedAt}</td>

                    <td className="py-4 px-4">
                      {app.status === "PENDING" && (
                        <span className="px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-[10px]">
                          Pending Review
                        </span>
                      )}
                      {app.status === "APPROVED" && (
                        <span className="px-2.5 py-1 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-[#C6FF00] font-bold text-[10px] flex items-center gap-1 w-fit">
                          <CheckCircle2 className="h-3 w-3" /> Approved
                        </span>
                      )}
                      {app.status === "REJECTED" && (
                        <span className="px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-[10px]">
                          Rejected
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 text-right">
                      {app.status === "PENDING" ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleApprove(app.id)}
                            className="p-2 rounded-lg bg-[#C6FF00] text-black hover:bg-[#C6FF00]/90 font-bold transition-all shadow-[0_0_10px_rgba(198,255,0,0.3)] flex items-center gap-1 text-[11px]"
                            title="Approve Member"
                          >
                            <Check className="h-3.5 w-3.5 stroke-[3]" /> Approve
                          </button>
                          <button
                            type="button"
                            onClick={() => handleReject(app.id)}
                            className="p-2 rounded-lg bg-white/10 text-white hover:bg-red-500/20 hover:text-red-400 transition-colors text-[11px]"
                            title="Reject Application"
                          >
                            <X className="h-3.5 w-3.5" /> Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-[#A0A0A0] text-[11px]">Completed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

      </div>
    </div>
  );
}
