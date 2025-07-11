from PIL import Image, ImageDraw, ImageFont
import random
import os

WIDTH, HEIGHT = 1920, 1080
NUM_NUMBERS = 220  

img = Image.new('RGB', (WIDTH, HEIGHT), color='black')
draw = ImageDraw.Draw(img)

try:
    font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
    base_font = ImageFont.truetype(font_path, 40)
except:
    base_font = ImageFont.load_default()

for _ in range(NUM_NUMBERS):
    number = str(random.randint(0, 9))

    font_size = random.randint(12, 48)
    angle = random.randint(-45, 45)

    font = ImageFont.truetype(font_path, font_size)

    text_img = Image.new('RGBA', (200, 100), (0, 0, 0, 0))
    text_draw = ImageDraw.Draw(text_img)
    text_draw.text((0, 0), number, font=font, fill='white')

    rotated = text_img.rotate(angle, expand=1)

    x = random.randint(0, WIDTH)
    y = random.randint(0, HEIGHT)

    img.paste(rotated, (x, y), rotated)

output_path = "background.png"
img.save(output_path)
print(f"Immagine salvata in: {output_path}")
