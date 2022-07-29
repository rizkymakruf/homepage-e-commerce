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
            <div className="flex flex-col py-40 pr-44 pl-14">
              <p className="text-[#22577E] text-6xl font-bold pt-10">
                Nuansa Inti Persada
              </p>
              <p className="text-[#22577E] pt-5">
                Konsentrasi pada sektor Informasi Teknologi, Kami melayani IT
                Project Solution : Fiber Optic Service, Running Text , PC {"&"}
                Laptop Service,Video Conference Solution,WiFi System, Cam
                Security, Entreprise Network For corporate, PABX Solution.
              </p>
              <div className="w-full flex gap-3 pt-5">
                <button className="text-sm text-[#22577E]  font-semibold hover:font-bold">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className="w-5/12 h-screen bg-blue-900"></div>
          <div className="absolute z-30 w-2/4 h-[60%] bottom-[15%] right-[5%]">
            <Image src={pic1} layout={"fill"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Benner);
