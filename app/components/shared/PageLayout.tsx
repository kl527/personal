import React, { ReactNode } from 'react';
import LeftBar from './LeftBar';
import BackButton from './BackButton';

interface PageLayoutProps {
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, backHref = '/', backLabel = 'back' }) => {
  return (
    <div>
      <LeftBar />
      <main className="w-[70%] ml-auto mr-auto pl-[12px] md:flex flex-row place-content-center mt-8 md:mt-[40px]">
        <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex">
          <BackButton href={backHref} label={backLabel} />
        </div>
        <div className="w-full md:w-[646px] lg:w-[800px]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout; 