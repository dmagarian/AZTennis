#!/usr/bin/env python3
"""
Generate AI images for A-Z Tennis landing page using Gemini API.
Generates hero, collection, and about section images.
"""

import base64
import os
import sys
from pathlib import Path

from google import genai
from google.genai import types

GEMINI_API_KEY = "AIzaSyB2M3iM6wouhdoD09h1a4sAR66urKyzI3s"
MODEL = "gemini-3.1-flash-image-preview"  # Gemini 3.1 Flash image model
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_image(prompt: str, filename: str) -> bool:
    """Generate an image from a text prompt and save it."""
    print(f"\n{'='*60}")
    print(f"Generating: {filename}")
    print(f"Prompt: {prompt[:100]}...")
    print(f"{'='*60}")

    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
            ),
        )

        # Extract image from response
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                image_data = part.inline_data.data
                out_path = OUTPUT_DIR / filename
                with open(out_path, "wb") as f:
                    f.write(image_data)
                print(f"  Saved: {out_path} ({len(image_data)} bytes)")
                return True

        print(f"  WARNING: No image in response for {filename}")
        if response.candidates[0].content.parts:
            for part in response.candidates[0].content.parts:
                if part.text:
                    print(f"  Text response: {part.text[:200]}")
        return False

    except Exception as e:
        print(f"  ERROR: {e}")
        return False


# ── Image prompts ─────────────────────────────────────────────────────────────

IMAGES = [
    {
        "filename": "hero.webp",
        "prompt": (
            "A stunning wide-angle photograph of a premium tennis pro shop in Scottsdale Arizona. "
            "The scene shows a bright, sunlit interior with warm desert light streaming through large windows. "
            "Display walls showcase rows of high-end tennis racquets (Wilson, Babolat, Head brands visible), "
            "tennis shoes on shelves, and athletic apparel on racks. A professional stringing machine is visible "
            "in the background. The atmosphere is welcoming and upscale — clean white walls, warm wood accents, "
            "desert landscaping visible outside. The style is editorial photography with warm golden-hour "
            "lighting. No people. Shot on a wide lens. Aspect ratio 16:9 landscape orientation."
        ),
    },
    {
        "filename": "racquets.webp",
        "prompt": (
            "A close-up product photography shot of premium tennis racquets displayed beautifully. "
            "Three to four high-end tennis racquets (resembling Wilson, Babolat, Head designs) arranged "
            "artistically on a clean surface with warm, soft studio lighting. The racquets have fresh "
            "string jobs with clean white strings. Background is a warm cream/beige with subtle shadows. "
            "Style: clean product photography, editorial quality, warm tones. No text or logos. "
            "Aspect ratio 4:3 landscape."
        ),
    },
    {
        "filename": "shoes.webp",
        "prompt": (
            "Professional product photography of tennis court shoes. Two pairs of premium tennis shoes "
            "— one white with subtle accents, one with bold color accents — displayed on a clean surface "
            "with a warm, bright background. The shoes look performance-ready with visible court-grip soles. "
            "Warm studio lighting with soft shadows. Style: clean e-commerce product photography with "
            "a premium feel. No brand logos. Aspect ratio 4:3 landscape."
        ),
    },
    {
        "filename": "apparel.webp",
        "prompt": (
            "A flat-lay or lifestyle product shot of tennis apparel. A neatly arranged collection of "
            "tennis clothing: a polo shirt, a tennis skirt, a visor, and wristbands, all in coordinated "
            "colors (whites, greens, and warm earth tones). Arranged on a light cream background with "
            "a tennis ball and racquet grip as props. Warm natural lighting, editorial style. "
            "No people, no visible brand logos. Aspect ratio 4:3 landscape."
        ),
    },
    {
        "filename": "about.webp",
        "prompt": (
            "A warm, inviting exterior photograph of a local tennis pro shop in a Scottsdale Arizona "
            "shopping plaza. The storefront has a clean, professional appearance with an awning. "
            "Desert landscaping (palm trees, blue sky, sunshine) surrounds the building. "
            "The scene captures the warm, sun-drenched feeling of Scottsdale with golden-hour lighting. "
            "A few tennis racquets are visible in the window display. The mood is welcoming and "
            "established — a beloved local business. No people visible. Style: warm editorial "
            "photography. Aspect ratio 4:3 landscape."
        ),
    },
]


def main():
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"Using model: {MODEL}")
    print(f"Generating {len(IMAGES)} images...")

    results = {}
    for img in IMAGES:
        success = generate_image(img["prompt"], img["filename"])
        results[img["filename"]] = success

    print(f"\n{'='*60}")
    print("RESULTS:")
    for name, ok in results.items():
        status = "OK" if ok else "FAILED"
        print(f"  {name}: {status}")
    print(f"{'='*60}")

    successes = sum(1 for v in results.values() if v)
    print(f"\n{successes}/{len(IMAGES)} images generated successfully.")
    if successes < len(IMAGES):
        print("Tip: Re-run the script to retry failed images.")


if __name__ == "__main__":
    main()
