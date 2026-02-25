from PIL import Image
import numpy as np
import os

base = "/vercel/share/v0-project/public/images/catalog"
images = [
    "set-toalla-teka.jpg",
    "set-toalla-teka-rojo.jpg",
    "set-toalla-teka-verde.jpg",
    "set-toalla-teka-beige.jpg",
    "set-toalla-teka-negro.jpg",
    "set-toalla-teka-lila.jpg",
]

for fname in images:
    full_path = os.path.join(base, fname)
    print(f"Processing {fname}...")

    img = Image.open(full_path).convert("RGB")
    data = np.array(img, dtype=np.float32)

    # The dark wood background is characterized by dark brownish pixels
    # We detect dark pixels (low brightness) and brownish tones
    r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]
    brightness = (r + g + b) / 3.0

    # Background detection: dark pixels (wood) or very consistent gray/brown
    # The wood bg is typically brightness < 120 with warm brown tone
    is_dark = brightness < 100
    is_medium_brown = (brightness < 150) & (r > g) & (r > b) & ((r - b) > 15)
    
    # Also detect the very edges which are typically background
    # Use flood fill approach from corners
    h, w = data.shape[:2]
    
    # Create mask from color analysis
    bg_mask = is_dark | is_medium_brown
    
    # Dilate slightly to catch edges, then erode to not eat into product
    from scipy import ndimage
    bg_mask_dilated = ndimage.binary_dilation(bg_mask, iterations=3)
    
    # Flood fill from corners to only get connected background regions
    from scipy.ndimage import label
    # Start from corners - these are definitely background
    seed_mask = np.zeros_like(bg_mask)
    margin = 20
    seed_mask[:margin, :] = True  # top edge
    seed_mask[-margin:, :] = True  # bottom edge
    seed_mask[:, :margin] = True  # left edge
    seed_mask[:, -margin:] = True  # right edge
    
    # Only keep bg pixels connected to edges
    connected_bg = bg_mask_dilated & seed_mask
    labeled, num_features = label(bg_mask_dilated)
    
    # Find which labels touch the edges
    edge_labels = set()
    edge_labels.update(labeled[:margin, :].flatten())
    edge_labels.update(labeled[-margin:, :].flatten())
    edge_labels.update(labeled[:, :margin].flatten())
    edge_labels.update(labeled[:, -margin:].flatten())
    edge_labels.discard(0)
    
    # Final mask: only bg regions connected to edges
    final_bg = np.isin(labeled, list(edge_labels))
    
    # Smooth the mask edges
    final_bg = ndimage.binary_dilation(final_bg, iterations=2)
    final_bg = ndimage.gaussian_filter(final_bg.astype(float), sigma=2) > 0.5
    
    # Replace background with white
    result = data.copy()
    result[final_bg] = [255, 255, 255]
    
    # Blend edges for smoother transition
    blend_mask = ndimage.gaussian_filter(final_bg.astype(float), sigma=3)
    for c in range(3):
        result[:,:,c] = result[:,:,c] * (1 - blend_mask) + 255 * blend_mask
    
    result_img = Image.fromarray(np.clip(result, 0, 255).astype(np.uint8))
    result_img.save(full_path, "JPEG", quality=90)
    print(f"  Saved with white background: {fname}")

print("Done! All 6 images processed.")
