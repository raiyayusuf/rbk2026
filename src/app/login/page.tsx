/* ============================================
   src/app/login/page.tsx
   LOGIN PAGE - RABIKU.COM
   ============================================ */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, Mail, LogIn, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email atau password salah");
        setLoading(false);
        return;
      }

      // Redirect akan dihandle middleware
      router.push("/");
      router.refresh();
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo/logo-rabiku-text-color.png"
              alt="Rabiku.com"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Masuk ke Dashboard
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Masukkan email dan password untuk mengakses dashboard
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Alert */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-sm">
                <AlertCircle size={18} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@rabiku.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-rabiku-blue focus:ring-2 focus:ring-rabiku-blue/20 transition-all outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-rabiku-blue focus:ring-2 focus:ring-rabiku-blue/20 transition-all outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-rabiku-blue text-white font-semibold rounded-xl hover:bg-rabiku-blue-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Masuk</span>
                </>
              )}
            </button>

            {/* Info Akun Test */}
            <div className="mt-4 p-3 bg-gray-50 rounded-xl text-xs text-gray-500 text-center border border-gray-100">
              <p className="font-medium text-gray-600 mb-1">🔑 Akun Demo</p>
              <div className="space-y-0.5">
                <p>Super Admin: <span className="font-mono text-rabiku-blue">admin@rabiku.com</span> / <span className="font-mono text-rabiku-blue">admin123</span></p>
                <p>Customer: <span className="font-mono text-rabiku-blue">yusuf@rabiku.com</span> / <span className="font-mono text-rabiku-blue">1234</span></p>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          &copy; 2026 Rabiku.com | All rights reserved.
        </p>
      </div>
    </div>
  );
}