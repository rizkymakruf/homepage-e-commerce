import Image from "next/image";
import pic1 from "../../public/static/images/benner.jpg";
import Link from "next/link";
import { memo } from "react";

const Benner = () => {
  return (
    <>
      <div className="w-full h-screen mt-16 md:mt-20 bg-blue-900" id="benner">
        <div className="flex h-screen">
          <div className="w-2/6 h-screen bg-blue-900 p-10">
            <div className="flex flex-col">
              <p className="text-white text-6xl font-bold pt-10">
                Nuansa Inti Persada
              </p>
              <p className="text-white pt-5">
                Konsentrasi pada sektor Informasi Teknologi, Kami melayani IT
                Project Solution : Fiber Optic Service, Running Text , PC {"&"}
                Laptop Service,Video Conference Solution,WiFi System, Cam
                Security, Entreprise Network For corporate, PABX Solution.
              </p>
              <div className="w-full flex gap-3 pt-5">
                <button className="py-1 px-3 bg-white hover:bg-transparent hover:text-white hover:border hover:border-white rounded-full">
                  Info Perusahaan
                </button>
                <button className="py-1 px-3 hover:bg-white bg-transparent hover:text-black text-white border border-white rounded-full">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
          <div className="h-screen relative w-4/6">
            <Image className="benner" src={pic1} layout={"fill"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Benner);
