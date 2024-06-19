"use client"

import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const Preloader: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    if (animationContainer.current && !animationInstance.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/loading.json',
      });
      animationInstance.current?.setSpeed(1.3);
      return () => {
        animationInstance.current?.destroy();
        animationInstance.current = null;
      };
    }
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
    <div ref={animationContainer} className='flex w-[300px] md:[450px] lg:[550px] p-8 justify-items-center place-content-center'></div>
  );
}

export default Preloader;
