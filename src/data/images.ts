/**
 * Central registry of generated photography (WebP sources, optimized at build).
 * Import from here so services/blog data can reference images by key.
 */
import manor from '../assets/photos/hero-estate-dawn.webp';
import softWash from '../assets/photos/soft-wash-siding.webp';
import roof from '../assets/photos/roof-soft-wash.webp';
import pressureWash from '../assets/photos/pressure-wash-driveway.webp';
import vehicle from '../assets/photos/vehicle-detailing.webp';
import aircraft from '../assets/photos/aircraft-detailing.webp';
import watercraft from '../assets/photos/watercraft-detailing.webp';
import craft from '../assets/photos/craft-nozzle.webp';
import estateDusk from '../assets/photos/estate-dusk.webp';
import waterTexture from '../assets/photos/water-texture.webp';

export const images = {
  manor,
  softWash,
  roof,
  pressureWash,
  vehicle,
  aircraft,
  watercraft,
  craft,
  estateDusk,
  waterTexture,
} as const;

export type ImageKey = keyof typeof images;
