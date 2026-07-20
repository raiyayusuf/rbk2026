/* ============================================
   src/lib/auth.ts
   NEXTAUTH CONFIGURATION - RABIKU.COM
   ============================================ */

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// ============================================
// HARDCODED USER UNTUK TESTING
// ============================================
const users = [
  {
    id: "1",
    name: "Super Admin",
    email: "admin@rabiku.com",
    password: "admin123",
    role: "SUPER_ADMIN",
  },
  {
    id: "2",
    name: "Yusuf",
    email: "yusuf@rabiku.com",
    password: "1234",
    role: "ADMIN",
  },
];

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email dan password wajib diisi");
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = users.find((u) => u.email === email);

        if (!user) {
          throw new Error("Email tidak terdaftar");
        }

        if (user.password !== password) {
          throw new Error("Password salah");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role as string;
        token.name = user.name as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
};