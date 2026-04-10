'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out'
  | 'flip-up'
  | 'blur-in'
  | 'slide-rotate'
  | 'scale-up'
  | 'reveal-left'
  | 'reveal-right'
  | 'stagger';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(
  animation: AnimationType = 'fade-up',
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reduce motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  const className = `scroll-animate scroll-${animation}${isVisible ? ' scroll-visible' : ''}`;

  return { ref, className, isVisible };
}

// Wrapper component for easier inline use
interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.15,
  className: extraClass = '',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const { ref, className } = useScrollAnimation(animation, { delay, threshold });

  return (
    // @ts-ignore
    <Tag ref={ref} className={`${className} ${extraClass}`}>
      {children}
    </Tag>
  );
}
