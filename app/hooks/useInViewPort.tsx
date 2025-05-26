"use client";
import { useState, useEffect } from 'react';

function useInViewPort<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
      const element = ref.current;
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.target === element) {
                  setInViewport(entry.isIntersecting);
              }
          });
      }, options);

      if (element) {
          observer.observe(element);
      }

      return () => {
          if (element) {
              observer.unobserve(element);
          }
      };
  }, [ref, options]); 

  return inViewport;
}
export default useInViewPort;
