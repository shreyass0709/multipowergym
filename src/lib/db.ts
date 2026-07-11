import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Prisma 7 requires a driver adapter for the runtime connection.
// PrismaPg works with any Postgres (Neon, Supabase, local).
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function makeClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const db = globalForPrisma.prisma ?? makeClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
