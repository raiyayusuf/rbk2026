/* ============================================
   src/lib/cloudinary.ts
   CLOUDINARY CONFIGURATION - RABIKU.COM
   ============================================ */

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

/* ============================================
   UPLOAD IMAGE
   ============================================ */
export async function uploadImage(
  file: File | string,
  folder: string = "rabiku/images",
): Promise<string> {
  const fileStr = typeof file === "string" ? file : await fileToBase64(file);

  const result = await cloudinary.uploader.upload(fileStr, {
    folder,
    resource_type: "image",
  });

  return result.secure_url;
}

/* ============================================
   UPLOAD AUDIO
   ============================================ */
export async function uploadAudio(
  file: File | string,
  folder: string = "rabiku/songs",
): Promise<string> {
  const fileStr = typeof file === "string" ? file : await fileToBase64(file);

  const result = await cloudinary.uploader.upload(fileStr, {
    folder,
    resource_type: "video", // Cloudinary treats audio as video
  });

  return result.secure_url;
}

/* ============================================
   DELETE ASSET
   ============================================ */
export async function deleteAsset(
  publicId: string,
  resourceType: "image" | "video" = "image",
): Promise<void> {
  await cloudinary.uploader.destroy(publicId, {
    resource_type: resourceType,
  });
}

/* ============================================
   HELPER: FILE TO BASE64
   ============================================ */
async function fileToBase64(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:${file.type};base64,${base64}`;
}
