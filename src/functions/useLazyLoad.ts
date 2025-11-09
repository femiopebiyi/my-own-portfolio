import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadProps {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyLoad = ({ threshold = 0.1, rootMargin = '50px' }: UseLazyLoadProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
