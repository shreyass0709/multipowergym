import "dotenv/config";
import { defineConfig, env } from "@prisma/config";

// Prisma 7 moved the connection URL out of schema.prisma.
// This datasource block is used by migration/introspection commands
// (migrate dev, db push, etc). The runtime client uses a driver
// adapter instead — see src/lib/db.ts.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
