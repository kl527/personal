import Link from "next/link";
import Image from "next/image";
import useInViewPort from "../hooks/useInViewPort";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Project5 = (): JSX.Element => {
  const ref1 = useRef<HTMLSpanElement>(null);
  const isInViewport1 = useInViewPort(ref1);

  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can change this password to whatever you want
    if (password === "abc") {
      router.push("/seamlegs");
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
      <div className="w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5 md:mb-8">
        <div
          onClick={() => setShowModal(true)}
          className="w-full md:w-[100%] cursor-pointer"
        >
          <Image src="/p5.jpg" alt="Sprout Project" width={800} height={400} />
        </div>
        <div className="md:w-[500px]">
          <div className="font-normal md:text-[20px] mt-3 md:mt-0 text-base tracking-[0] leading-[normal]">
            2025 | Machine Learning
          </div>
          <div className="font-bold mb-1 text-black text-lg md:text-[24px] tracking-[0] leading-[normal]">
            SeamPants
          </div>
          <p className="font-normal mb-2 text-black md:text-[20px] text-base tracking-[0] leading-[1.6] ">
            <span className="font-normal ">
              <em
                ref={ref1}
                className={`highlightKey  ${isInViewport1 ? "shown" : ""}`}
              >
                Smart legwear
              </em>{" "}
              that uses capacitive threads and machine learning to enhance
              exercise categorization and activity recognition.
            </span>
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="font-normal md:text-[20px] text-sm tracking-[0] leading-[normal] mb-8 text-[rgb(0,112,137)] underline hover:text-black transition-all duration-300 bg-transparent border-none cursor-pointer"
          >
            Case Study
          </button>
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
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Password Required
              </h2>
              <p className="text-gray-600 mb-2">
                As this is ongoing research, you need a password to view this
                case study.
              </p>
              <p className="text-gray-600 mb-6">
                Please email{" "}
                <a
                  href="mailto:kl527@cornell.edu"
                  className="text-[#007089] hover:underline"
                >
                  kl527@cornell.edu
                </a>{" "}
                for the password!
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

                {error && <p className="text-red-500 text-sm">{error}</p>}

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
