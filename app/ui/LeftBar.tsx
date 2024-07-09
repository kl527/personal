interface LeftBarProps {
  isSidebarHidden: boolean;
  toggleSidebar: () => void;
}

export const LeftBar: React.FC<LeftBarProps> = ({ isSidebarHidden, toggleSidebar }): JSX.Element => {
  return (
    // <div className={`${isSidebarHidden ? 'w-12' : 'w-0'} fixed left-0 top-0 h-[100vh] 
    // w-12 md:border-r-[15px] border-r-[12px] border-melo-blue
    // `} />
    <div className={`sidebar ${isSidebarHidden ? 'sidebar--isHidden' : ''} md:border-r-[15px] border-r-[12px] border-melo-blue box-border`}>
      <div className="w-[85%] mr-auto ml-auto flex justify-end mt-[30px] md:w-[90%]">
        <button onClick={toggleSidebar} className="group md:border-[6px] mb-[20px] md:mb-[165px] transition-colors duration-300 ease-in-out hover:bg-black flex w-[45px] md:w-[60px] md:h-[86px] h-16 items-center justify-center border-4 border-solid border-black">
          <p className="w-fit font-normal text-sm md:text-[20px] tracking-[0] leading-[normal] transition-colors duration-300 ease-in-out group-hover:text-white">
            close
          </p>
        </button>
      </div>

    </div>
  )
}