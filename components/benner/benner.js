import Image from "next/image";
import pic1 from "../../public/static/images/benner1.jpg";
import Link from "next/link";
import { memo } from "react";

const Benner = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-400" id="benner">
        <div className="flex h-screen relative">
          <div className="w-7/12 h-screen bg-white">
            <div className="flex flex-col md:py-40 pr-3 pl-3 py-14 md:pr-44 md:pl-14">
              <p className="text-[#22577E] text-4xl md:text-6xl font-bold pt-10">
                Nuansa Inti Persada
              </p>
              <p className="text-[#22577E] pt-5 text-sm md:text-md">
                Konsentrasi pada sektor Informasi Teknologi, Kami melayani IT
                Project Solution : Fiber Optic Service, Running Text , PC {"&"}
                Laptop Service,Video Conference Solution,WiFi System, Cam
                Security, Entreprise Network For corporate, PABX Solution.
              </p>
              <div className="w-full flex gap-3 pt-5">
                <button className="text-sm text-[#22577E] underline font-semibold hover:font-bold">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className="w-5/12 h-screen bg-blue-900"></div>
          <div className="absolute z-30 w-11/12 md:w-2/4 h-[25%] md:h-[60%] bottom-28 md:bottom-[15%] right-4 md:right-[5%]">
            <Image src={pic1} layout={"fill"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Benner);
