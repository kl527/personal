"use client";
import { useState, useEffect } from 'react';

function useInViewPort<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              console.log(ref.current, entry.isIntersecting); // This will log which element is being intersected
              if (entry.target === ref.current) {
                  setInViewport(entry.isIntersecting);
              }
          });
      }, options);

      if (ref.current) {
          observer.observe(ref.current);
          console.log('Observing:', ref.current); // This will log on observing
      }

      return () => {
          if (ref.current) {
              observer.unobserve(ref.current);
              console.log('Unobserving:', ref.current); // This will log on unobserving
          }
      };
  }, [ref, options]); // Include ref in the dependency array to ensure updates on ref change

  return inViewport;
}
export default useInViewPort;
