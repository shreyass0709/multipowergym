"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type UserRole = "VISITOR" | "MEMBER" | "ADMIN";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  membershipStatus?: "ACTIVE" | "PENDING" | "EXPIRED";
}

interface AuthContextType {
  user: UserProfile | null;
  role: UserRole;
  isLoading: boolean;
  login: (email: string, role?: UserRole) => Promise<UserProfile>;
  logout: () => void;
  submitJoinApplication: (formData: any) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [role, setRole] = useState<UserRole>("VISITOR");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Read session from localStorage on mount
    const savedUser = localStorage.getItem("multipower_user");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setUser(parsed);
        setRole(parsed.role || "MEMBER");
      } catch {
        localStorage.removeItem("multipower_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, forcedRole?: UserRole): Promise<UserProfile> => {
    setIsLoading(true);
    // Simulate network latency for luxury premium loading state
    await new Promise((res) => setTimeout(res, 800));

    const determinedRole: UserRole =
      forcedRole ||
      (email.toLowerCase().includes("admin") ? "ADMIN" : "MEMBER");

    const mockUser: UserProfile = {
      id: determinedRole === "ADMIN" ? "ADM-8801" : "MBR-9042",
      name:
        determinedRole === "ADMIN"
          ? "Master Admin (Gym Owner)"
          : "Vikram Sharma",
      email: email,
      role: determinedRole,
      phone: "+91 98765 43210",
      avatar:
        determinedRole === "ADMIN"
          ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
          : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      membershipStatus: "ACTIVE",
    };

    setUser(mockUser);
    setRole(determinedRole);
    localStorage.setItem("multipower_user", JSON.stringify(mockUser));
    setIsLoading(false);
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    setRole("VISITOR");
    localStorage.removeItem("multipower_user");
    router.push("/login");
  };

  const submitJoinApplication = async (formData: any): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setIsLoading(false);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isLoading,
        login,
        logout,
        submitJoinApplication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
