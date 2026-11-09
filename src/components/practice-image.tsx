import type { ImgHTMLAttributes } from 'react';
import heroSmall from '@/assets/home-coat-480.webp.asset.json';
import heroLarge from '@/assets/home-coat-768.webp.asset.json';
import wellnessSmall from '@/assets/wellness-400.webp.asset.json';
import wellnessLarge from '@/assets/wellness-800.webp.asset.json';
import ivSmall from '@/assets/iv-room-320.webp.asset.json';
import ivLarge from '@/assets/iv-room-443.webp.asset.json';
import doctorSmall from '@/assets/doctor-portrait-300.webp.asset.json';
import doctorLarge from '@/assets/doctor-portrait-408.webp.asset.json';

const images = {
  hero: { src: heroLarge.url, srcSet: `${heroSmall.url} 480w, ${heroLarge.url} 768w`, width: 768, height: 1024 },
  wellness: { src: wellnessLarge.url, srcSet: `${wellnessSmall.url} 400w, ${wellnessLarge.url} 736w`, width: 736, height: 920 },
  iv: { src: ivLarge.url, srcSet: `${ivSmall.url} 320w, ${ivLarge.url} 443w`, width: 443, height: 590 },
  doctor: { src: doctorLarge.url, srcSet: `${doctorSmall.url} 300w, ${doctorLarge.url} 408w`, width: 408, height: 612 },
};

export function PracticeImage({ image, ...props }: ImgHTMLAttributes<HTMLImageElement> & { image: keyof typeof images }) {
  return <img {...images[image]} sizes={image === 'hero' ? '(max-width: 1440px) 100vw, 1440px' : '(max-width: 760px) calc(100vw - 48px), (max-width: 1440px) 50vw, 650px'} loading={image === 'hero' ? 'eager' : 'lazy'} decoding="async" fetchPriority={image === 'hero' ? 'high' : 'auto'} {...props} />;
}