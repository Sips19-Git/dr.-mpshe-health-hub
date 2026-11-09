import type { ImgHTMLAttributes } from 'react';
import heroSmall from '@/assets/home-coat-480.webp';
import heroLarge from '@/assets/home-coat-768.webp';
import wellnessSmall from '@/assets/medical-equipment-240.webp';
import wellnessLarge from '@/assets/medical-equipment-348.webp';
import ivSmall from '@/assets/iv-room-320.webp';
import ivLarge from '@/assets/iv-room-443.webp';
import doctorSmall from '@/assets/doctor-portrait-300.webp';
import doctorLarge from '@/assets/doctor-portrait-408.webp';

const images = {
  hero: { src: heroLarge, srcSet: `${heroSmall} 480w, ${heroLarge} 768w`, width: 768, height: 1024 },
  wellness: { src: wellnessLarge, srcSet: `${wellnessSmall} 240w, ${wellnessLarge} 348w`, width: 348, height: 698 },
  iv: { src: ivLarge, srcSet: `${ivSmall} 320w, ${ivLarge} 443w`, width: 443, height: 590 },
  doctor: { src: doctorLarge, srcSet: `${doctorSmall} 300w, ${doctorLarge} 408w`, width: 408, height: 612 },
};

export function PracticeImage({ image, ...props }: ImgHTMLAttributes<HTMLImageElement> & { image: keyof typeof images }) {
  return <img {...images[image]} sizes={image === 'hero' ? '(max-width: 1440px) 100vw, 1440px' : '(max-width: 760px) calc(100vw - 48px), (max-width: 1440px) 50vw, 650px'} loading={image === 'hero' ? 'eager' : 'lazy'} decoding="async" fetchPriority={image === 'hero' ? 'high' : 'auto'} {...props} />;
}