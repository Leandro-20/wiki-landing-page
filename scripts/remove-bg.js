import sharp from "sharp";
import fs from "fs";
import path from "path";

const base = "/vercel/share/v0-project/public/images/catalog";
const files = [
  "set-toalla-teka.jpg",
  "set-toalla-teka-rojo.jpg",
  "set-toalla-teka-verde.jpg",
  "set-toalla-teka-beige.jpg",
  "set-toalla-teka-negro.jpg",
  "set-toalla-teka-lila.jpg",
];

for (const fname of files) {
  const fullPath = path.join(base, fname);
  console.log(`Processing ${fname}...`);

  const { data, info } = await sharp(fullPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = new Uint8Array(data);

  // Create output buffer with alpha
  const output = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = pixels[i * channels];
    const g = pixels[i * channels + 1];
    const b = pixels[i * channels + 2];

    const brightness = (r + g + b) / 3;
    // Detect dark wood background: dark brownish pixels
    const isDark = brightness < 100;
    const isBrown = brightness < 160 && r > g && r > b && (r - b) > 10;
    const isBackground = isDark || isBrown;

    if (isBackground) {
      // White pixel
      output[i * 4] = 255;
      output[i * 4 + 1] = 255;
      output[i * 4 + 2] = 255;
      output[i * 4 + 3] = 255;
    } else {
      output[i * 4] = r;
      output[i * 4 + 1] = g;
      output[i * 4 + 2] = b;
      output[i * 4 + 3] = 255;
    }
  }

  // Apply slight blur to smooth edges between product and white bg
  await sharp(output, { raw: { width, height, channels: 4 } })
    .jpeg({ quality: 90 })
    .toFile(fullPath + ".tmp");

  // Read back temp, apply median filter for smoother edges
  await sharp(fullPath + ".tmp")
    .median(3)
    .jpeg({ quality: 90 })
    .toFile(fullPath);

  fs.unlinkSync(fullPath + ".tmp");
  console.log(`  Saved: ${fname}`);
}

console.log("Done! All 6 images processed.");
