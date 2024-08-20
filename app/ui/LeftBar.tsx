import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface LeftBarProps {
  isSidebarHidden: boolean;
  toggleSidebar: () => void;
}

export const LeftBar: React.FC<LeftBarProps> = ({
  isSidebarHidden,
  toggleSidebar,
}): JSX.Element => {
  const currentPath = usePathname();
  return (
    <div
      className={`sidebar ${
        isSidebarHidden ? "" : "sidebar--isHidden"
      } md:border-r-[15px] border-r-[12px] border-melo-blue
      overflow-hidden overflow-y-scroll scrollbar-hide whitespace-nowrap`}
    >
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mr-auto ml-auto flex justify-end md:w-[90%]">
        <button
          onClick={toggleSidebar}
          className="group md:border-[6px] transition-colors duration-300 ease-in-out hover:bg-black flex w-[45px] md:w-[60px] md:h-[86px] h-15 items-center justify-center border-4 border-solid border-black"
        >
          <p className="w-fit font-normal text-sm md:text-[14px] transition-colors duration-300 ease-in-out group-hover:text-white">
            close
          </p>
        </button>
      </div> */}
      <div className="w-full flex flex-col gap-8 pl-8 pt-10">
        <Link href="/" onClick={toggleSidebar}>
          <h2
            className={`text-[#0D2C33] text-sm font-gr font-bold text-md ${
              currentPath === "/" ? "selected" : ""
            }`}
          >
            HOME
          </h2>
          <picture className="w-full">
            <source media="(max-width: 767px)" srcSet="/nav_home.png" />
            <source media="(min-width: 767px)" srcSet="/navD_home.png" />
            <Image
              src="/nav_home.png"
              className={`mt-1 w-4/5 h-auto md:w-4/5 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out`}
              alt="Home Nav button"
              width="358"
              height="773"
            />
          </picture>
        </Link>
        <Link href="/melotomorrow" onClick={toggleSidebar}>
          <h2
            className={`text-[#0D2C33] text-sm font-gr font-bold text-md ${
              currentPath === "/melotomorrow" ? "selected" : ""
            }`}
          >
            MELO TOMORROW CASE STUDY
          </h2>
          <picture className="w-full">
            <source media="(max-width: 767px)" srcSet="/nav_mt.png" />
            <source media="(min-width: 767px)" srcSet="/navD_mt.png" />
            <Image
              src="/nav_mt.png"
              className={`mt-1 w-4/5 h-auto md:11/12 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out`}
              alt="melo tomorrow case study navigation"
              width="358"
              height="773"
            />
          </picture>
        </Link>
        <Link href="/books" onClick={toggleSidebar}>
          <h2
            className={`text-[#0D2C33] text-sm font-gr font-bold text-md ${
              currentPath === "/books" ? "selected" : ""
            }`}
          >
            READING LIST
          </h2>
          <picture className="w-full">
            <source media="(max-width: 767px)" srcSet="/nav_book.png" />
            <source media="(min-width: 767px)" srcSet="/navD_book.png" />
            <Image
              src="/nav_book.png"
              className={`mt-1 w-4/5 h-auto md:w-4/5 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out`}
              alt="readling list navigation"
              width="358"
              height="773"
            />
          </picture>
        </Link>
      </div>
    </div>
  );
};
