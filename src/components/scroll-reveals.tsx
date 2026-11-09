import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

export function ScrollReveals() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('main .section > *, main .service-card, main .detail-item, main .trust-item, .footer-top > *'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    elements.forEach((element, i) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${(i % 3) * 90}ms`);
      observer.observe(element);
    });
    const showAll = () => { if (motion.matches) elements.forEach(element => element.classList.add('reveal-visible')); };
    motion.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', showAll);
      elements.forEach(element => { element.classList.remove('scroll-reveal', 'reveal-visible'); element.style.removeProperty('--reveal-delay'); });
    };
  }, [pathname]);
  return null;
}