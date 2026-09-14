/* ============================================
   prisma/seed.ts
   SEED SUPER ADMIN - RABIKU.COM
   ============================================ */

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from "bcryptjs";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "rabiku_db",
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding...");

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@rabiku.com" },
    update: {},
    create: {
      email: "admin@rabiku.com",
      password: hashedPassword,
      name: "Super Admin",
      role: "SUPER_ADMIN",
    },
  });

  console.log("✅ Super Admin:", admin.email);
  console.log("🌱 Done!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
