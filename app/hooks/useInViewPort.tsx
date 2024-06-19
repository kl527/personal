"use client";
import { useState, useEffect } from 'react';

function useInViewPort<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.target === ref.current) {
                  setInViewport(entry.isIntersecting);
              }
          });
      }, options);

      if (ref.current) {
          observer.observe(ref.current);
      }

      return () => {
          if (ref.current) {
              observer.unobserve(ref.current);
          }
      };
  }, [ref, options]); 

  return inViewport;
}
export default useInViewPort;
