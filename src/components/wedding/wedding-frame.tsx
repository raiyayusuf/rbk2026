/* ============================================
   src/components/wedding/wedding-frame.tsx
   WEDDING FRAME - MOBILE FIRST
   ============================================ */

"use client";

interface WeddingFrameProps {
  children: React.ReactNode;
  isCover?: boolean;
}

export default function WeddingFrame({
  children,
  isCover = false,
}: WeddingFrameProps) {
  // Kalo cover page → full screen (background desktop)
  if (isCover) {
    return <div className="w-full min-h-screen">{children}</div>;
  }

  // Kalo main content → mobile frame
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-107.5 bg-white min-h-screen shadow-2xl relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}
