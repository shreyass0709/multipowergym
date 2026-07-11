import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

async function main() {
  // ---- Owner / admin account ----
  const adminEmail = "admin@multipowergym.com";
  const adminPassword = "Admin@123"; // change after first login
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await db.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: "Gym Owner",
      email: adminEmail,
      passwordHash,
      role: "ADMIN",
      status: "ACTIVE",
    },
  });

  // ---- Membership plans (prices in paise: ₹1000 = 100000) ----
  const plans = [
    {
      name: "Monthly",
      price: 100000,
      durationDays: 30,
      description: "Full gym access, billed monthly.",
      features: ["All machines", "Locker access", "1 trainer session"],
    },
    {
      name: "Quarterly",
      price: 270000,
      durationDays: 90,
      description: "3 months of full access at a discount.",
      features: ["All machines", "Locker access", "3 trainer sessions", "Diet chart"],
    },
    {
      name: "Yearly",
      price: 900000,
      durationDays: 365,
      description: "Best value — 12 months of full access.",
      features: ["All machines", "Locker access", "Monthly trainer session", "Diet chart", "Free t-shirt"],
    },
  ];

  for (const plan of plans) {
    const existing = await db.plan.findFirst({ where: { name: plan.name } });
    if (!existing) await db.plan.create({ data: plan });
  }

  // ---- Sample machines ----
  const machines = [
    { name: "Treadmill", category: "Cardio", description: "Motorised treadmill with incline." },
    { name: "Leg Press", category: "Strength", description: "45° leg press machine." },
    { name: "Lat Pulldown", category: "Strength", description: "Cable lat pulldown station." },
    { name: "Dumbbell Rack", category: "Free Weights", description: "5–50 kg dumbbell set." },
  ];
  for (const m of machines) {
    const existing = await db.machine.findFirst({ where: { name: m.name } });
    if (!existing) await db.machine.create({ data: m });
  }

  // ---- Sample workout plans ----
  const workouts = [
    { title: "Fat Loss Beginner", goal: "Weight loss", level: "Beginner", description: "3-day full body + cardio split." },
    { title: "Muscle Gain", goal: "Muscle gain", level: "Intermediate", description: "5-day push/pull/legs split." },
  ];
  for (const w of workouts) {
    const existing = await db.workoutPlan.findFirst({ where: { title: w.title } });
    if (!existing) await db.workoutPlan.create({ data: w });
  }

  console.log("✅ Seed complete. Admin login: %s / %s", adminEmail, adminPassword);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
