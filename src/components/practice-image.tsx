import type { ImgHTMLAttributes } from 'react';
import heroSmall from '@/assets/hero-480.webp.asset.json';
import heroMedium from '@/assets/hero-960.webp.asset.json';
import heroLarge from '@/assets/hero-1440.webp.asset.json';
import wellnessSmall from '@/assets/wellness-400.webp.asset.json';
import wellnessLarge from '@/assets/wellness-800.webp.asset.json';
import ivSmall from '@/assets/iv-400.webp.asset.json';
import ivLarge from '@/assets/iv-800.webp.asset.json';
import doctorSmall from '@/assets/doctor-400.webp.asset.json';
import doctorLarge from '@/assets/doctor-800.webp.asset.json';

const images = {
  hero: { src: heroLarge.url, srcSet: `${heroSmall.url} 480w, ${heroMedium.url} 900w`, width: 900, height: 1200 },
  wellness: { src: wellnessLarge.url, srcSet: `${wellnessSmall.url} 400w, ${wellnessLarge.url} 736w`, width: 736, height: 920 },
  iv: { src: ivLarge.url, srcSet: `${ivSmall.url} 400w, ${ivLarge.url} 800w`, width: 1200, height: 1200 },
  doctor: { src: doctorLarge.url, srcSet: `${doctorSmall.url} 400w, ${doctorLarge.url} 432w`, width: 432, height: 568 },
};

export function PracticeImage({ image, ...props }: ImgHTMLAttributes<HTMLImageElement> & { image: keyof typeof images }) {
  return <img {...images[image]} sizes={image === 'hero' ? '(max-width: 1440px) 100vw, 1440px' : '(max-width: 760px) calc(100vw - 48px), (max-width: 1440px) 50vw, 650px'} loading={image === 'hero' ? 'eager' : 'lazy'} decoding="async" fetchPriority={image === 'hero' ? 'high' : 'auto'} {...props} />;
}