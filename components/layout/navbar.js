import Image from "next/image";
import Logo from "../../public/static/images/nuansa.png";
import { memo } from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full py-4 md:py-7 px-3 md:px-12 z-50 fixed top-0 bg-white shadow-sm shadow-blue-100">
        <div className="w-full flex items-center justify-between">
          <div className="w-14 md:w-32 h-5 md:h-10">
            <Image src={Logo} />
          </div>
          {/* md */}
          <div className="hidden md:block">
            <div className="flex gap-4 ">
              <div>
                <button className="font-semibold text-md">Home</button>
                <div className="bg-blue-500 rounded-full w-full h-1"></div>
              </div>
              <div>
                <button className="font-semibold text-md">Products</button>
              </div>
              <div>
                <button className="font-semibold text-md">Blog</button>
              </div>
              <div>
                <button className="font-semibold text-md">Info</button>
              </div>
              <div>
                <button className="font-semibold text-md">Contact</button>
              </div>
            </div>
          </div>
          {/* sm  */}
          <div className="block md:hidden">
            <div className="flex gap-3 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-[#22577E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-[#22577E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-[#22577E]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-[#22577E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-[#22577E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <button className="text-xs md:text-md font-bold hover:text-blue-900">
              Login
            </button>
            <button className="text-xs md:text-md font-bold py-0.5 px-1.5 md:py-1 md:px-3 bg-blue-500/80 hover:bg-blue-900 border border-blue-500 text-white rounded-full">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Navbar);
