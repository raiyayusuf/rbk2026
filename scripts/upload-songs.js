/* ============================================
   scripts/upload-songs.js
   BULK UPLOAD SONGS TO CLOUDINARY
   ============================================ */

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const SONGS_FOLDER = "./public/songs";
const CLOUDINARY_FOLDER = "rabiku/songs";

async function uploadAllSongs() {
  console.log("🎵 Uploading songs to Cloudinary...\n");

  const files = fs.readdirSync(SONGS_FOLDER).filter((f) => f.endsWith(".mp3"));

  if (files.length === 0) {
    console.log("❌ No MP3 files found in ./public/songs");
    return;
  }

  for (const file of files) {
    const filePath = path.join(SONGS_FOLDER, file);
    const publicId = path.parse(file).name;

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: CLOUDINARY_FOLDER,
        public_id: publicId,
        resource_type: "video",
        overwrite: true,
      });

      console.log(`✅ ${file}`);
      console.log(`   → ${result.secure_url}\n`);
    } catch (error) {
      console.error(`❌ ${file} — ${error.message}\n`);
    }
  }

  console.log("Done!");
}

uploadAllSongs();
