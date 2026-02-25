from rembg import remove
from PIL import Image
import io
import os

images = [
    "public/images/catalog/set-toalla-teka.jpg",
    "public/images/catalog/set-toalla-teka-rojo.jpg",
    "public/images/catalog/set-toalla-teka-verde.jpg",
    "public/images/catalog/set-toalla-teka-beige.jpg",
    "public/images/catalog/set-toalla-teka-negro.jpg",
    "public/images/catalog/set-toalla-teka-lila.jpg",
]

for img_path in images:
    full_path = os.path.join("/vercel/share/v0-project", img_path)
    print(f"Processing {img_path}...")
    
    with open(full_path, "rb") as f:
        input_data = f.read()
    
    # Remove background
    output_data = remove(input_data)
    
    # Open result (RGBA with transparent bg) and paste on white
    fg = Image.open(io.BytesIO(output_data)).convert("RGBA")
    white_bg = Image.new("RGBA", fg.size, (255, 255, 255, 255))
    composite = Image.alpha_composite(white_bg, fg)
    
    # Save as JPG
    final = composite.convert("RGB")
    final.save(full_path, "JPEG", quality=90)
    print(f"  Saved with white background: {img_path}")

print("Done! All 6 images processed.")
