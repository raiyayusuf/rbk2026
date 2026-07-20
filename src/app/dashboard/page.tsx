/* ============================================
   src/app/dashboard/page.tsx
   DASHBOARD CUSTOMER - RABIKU.COM
   ============================================ */

"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Construction, LogOut, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-rabiku-blue/20 border-t-rabiku-blue rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/logo-rabiku-text-color.png"
              alt="Rabiku.com"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {session?.user?.name || "Customer"}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut size={18} />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <LayoutDashboard className="text-rabiku-blue" size={28} />
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Customer</h1>
        </div>

        {/* Under Construction */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Construction size={80} className="text-yellow-500 animate-bounce" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-6">
              Halaman Sedang Dalam Pengembangan
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Dashboard customer akan segera hadir dengan fitur-fitur lengkap untuk mengelola website pernikahan Anda.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span>Mohon tunggu update selanjutnya</span>
            </div>
          </div>
        </div>

        {/* Info Akun */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400">Nama</p>
            <p className="text-sm font-medium text-gray-800">{session?.user?.name || "-"}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400">Email</p>
            <p className="text-sm font-medium text-gray-800">{session?.user?.email || "-"}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <p className="text-xs text-gray-400">Role</p>
            <p className="text-sm font-medium text-gray-800">{session?.user?.role || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}