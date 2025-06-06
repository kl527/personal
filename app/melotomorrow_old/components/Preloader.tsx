"use client";

import { useEffect, useRef } from 'react';

const Preloader: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const lottie = await import('lottie-web');
      if (mounted && animationContainer.current && !animationInstance.current) {
        animationInstance.current = lottie.default.loadAnimation({
          container: animationContainer.current,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: '/loading.json',
        });
        animationInstance.current?.setSpeed(1.4);
      }
    })();

    return () => {
      mounted = false;
      animationInstance.current?.destroy();
      animationInstance.current = null;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => { 
      if (animationContainer.current) {
        animationContainer.current.style.display = 'none';
      }
    }, 2800);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div ref={animationContainer} className='flex w-[200px] md:[450px] pb-8 lg:[550px] justify-items-center place-content-center'></div>
  );
}

export default Preloader;
