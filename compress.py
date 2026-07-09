import os
from PIL import Image

def optimize_images(directory, max_size_kb=125):
    for filename in os.listdir(directory):
        if filename.endswith(".jpg"):
            filepath = os.path.join(directory, filename)
            
            # Open image
            img = Image.open(filepath)
            
            # Resize image to width 400
            wpercent = (400/float(img.size[0]))
            hsize = int((float(img.size[1])*float(wpercent)))
            img = img.resize((400,hsize), Image.Resampling.LANCZOS)
            
            # Save it with high compression
            quality = 90
            while True:
                img.save(filepath, "JPEG", optimize=True, quality=quality)
                size_kb = os.path.getsize(filepath) / 1024
                
                if size_kb <= max_size_kb or quality <= 10:
                    break
                quality -= 5
            print(f"Optimized {filename} to {size_kb:.2f} KB")

# Optimize both folders just to be sure
optimize_images(r"C:\Users\Leoncios\OneDrive\Desktop\BYU\wdd131\imagens")
try:
    optimize_images(r"C:\Users\Leoncios\OneDrive\Desktop\BYU\wdd131\semana02\imagens")
except Exception as e:
    pass
