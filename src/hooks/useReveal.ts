'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll helper. Attach `ref` to a container and toggle the
 * `is-visible` class from `visible`; children carrying the `.reveal` class
 * (see globals.css) then fade/slide in, with per-element stagger applied via
 * an inline `transitionDelay`. Fires once. Honours `prefers-reduced-motion`
 * through the CSS, not here.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible };
}
