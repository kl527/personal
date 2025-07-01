import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface LeftBarProps {
  isSidebarHidden: boolean;
  toggleSidebar: () => void;
}

export const LeftBar: React.FC<LeftBarProps> = ({
  isSidebarHidden,
  toggleSidebar,
}): JSX.Element => {
  const currentPath = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can change this password to whatever you want
    if (password === "abc") {
      router.push("/seamlegs");
      setShowModal(false);
      setPassword("");
      setError("");
      toggleSidebar();
    } else {
      setError("Incorrect password");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      setPassword("");
      setError("");
    }
  };

  return (
    <>
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
                className={`mt-1 w-4/5 h-[150px] md:w-4/5 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out object-cover`}
                alt="Home Nav button"
                width="358"
                height="773"
              />
            </picture>
          </Link>
          <div onClick={() => setShowModal(true)} className="cursor-pointer">
            <h2
              className={`text-[#0D2C33] text-sm font-gr font-bold text-md ${
                currentPath === "/seamlegs" ? "selected" : ""
              }`}
            >
              SEAMLEGS CASE STUDY
            </h2>
            <picture className="w-full">
              <source media="(max-width: 767px)" srcSet="/nav_seam.png" />
              <source media="(min-width: 767px)" srcSet="/navD_seam.png" />
              <Image
                src="/nav_seam.png"
                className={`mt-1 w-4/5 h-[150px] md:w-4/5 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out object-cover`}
                alt="seamlegs case study navigation"
                width="358"
                height="773"
              />
            </picture>
          </div>
          <Link href="/sprout" onClick={toggleSidebar}>
            <h2
              className={`text-[#0D2C33] text-sm font-gr font-bold text-md ${
                currentPath === "/sprout" ? "selected" : ""
              }`}
            >
              SPROUT CASE STUDY
            </h2>
            <picture className="w-full">
              <source media="(max-width: 767px)" srcSet="/nav_sprout.png" />
              <source media="(min-width: 767px)" srcSet="/navD_sprout.png" />
              <Image
                src="/nav_sprout.png"
                className={`mt-1 w-4/5 h-[150px] md:w-4/5 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out object-cover`}
                alt="sprout case study navigation"
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
                className={`mt-1 w-4/5 h-[150px] md:w-4/5 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out object-cover`}
                alt="melo tomorrow case study navigation"
                width="358"
                height="773"
              />
            </picture>
          </Link>
          <Link href="/about" onClick={toggleSidebar}>
            <h2
              className={`text-[#0D2C33] text-sm font-gr font-bold text-md ${
                currentPath === "/about" ? "selected" : ""
              }`}
            >
              ABOUT
            </h2>
            <picture className="w-full">
              <source media="(max-width: 767px)" srcSet="/nav_about.png" />
              <source media="(min-width: 767px)" srcSet="/navD_about.png" />
              <Image
                src="/nav_about.png"
                className={`mt-1 w-4/5 h-[150px] md:w-4/5 md:h-auto rounded-md selected-shadow shadow-lg transition duration-300 ease-in-out object-cover`}
                alt="about navigation"
                width="358"
                height="773"
              />
            </picture>
          </Link>
        </div>
      </div>

      {/* Password Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => {
                setShowModal(false);
                setPassword("");
                setError("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal content */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Password Required</h2>
              <p className="text-gray-600 mb-2">
                As this is ongoing research, you need a password to view this case study.
              </p>
              <p className="text-gray-600 mb-6">
                Please email{" "}
                <a 
                  href="mailto:kl527@cornell.edu" 
                  className="text-[#007089] hover:underline"
                >
                  kl527@cornell.edu
                </a>
                {" "}for the password!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#007089] focus:border-transparent outline-none transition"
                  autoFocus
                />
                
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#007089] text-white py-2 px-4 rounded-md hover:bg-[#005a6f] transition-colors font-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};