import Image from "next/image";
import brand1 from "../../public/static/images/brand/m1.png";
import brand2 from "../../public/static/images/brand/m2.png";
import brand3 from "../../public/static/images/brand/m3.png";
import brand4 from "../../public/static/images/brand/m4.png";
import brand5 from "../../public/static/images/brand/m5.png";
import brand6 from "../../public/static/images/brand/m6.png";
import brand7 from "../../public/static/images/brand/m7.png";
import brand8 from "../../public/static/images/brand/m8.png";
import brand9 from "../../public/static/images/brand/m9.png";
import { memo } from "react";

const Brand = () => {
  return (
    <>
      <div className="w-full flex px-2 my-5 md:px-12 md:my-8">
        <div className="flex flex-col justify-center items-center w-full md:pb-8">
          <p className="text-2xl font-bold text-gray-800">
            Brand Yang Digunakan
          </p>
          <div className="w-72 mt-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="block md:hidden w-full py-5">
            <div className="flex justify-center gap-4">
              <div className="w-20 h-20">
                <Image src={brand1} layout={"responsive"} />
              </div>
              <div className="w-20 h-20">
                <Image src={brand2} layout={"responsive"} />
              </div>
              <div className="w-20 h-20">
                <Image src={brand3} layout={"responsive"} />
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="w-20 h-20">
                <Image src={brand4} layout={"responsive"} />
              </div>
              <div className="w-20 h-20">
                <Image src={brand5} layout={"responsive"} />
              </div>
              <div className="w-20 h-20">
                <Image src={brand6} layout={"responsive"} />
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="w-20 h-20">
                <Image src={brand7} layout={"responsive"} />
              </div>
              <div className="w-20 h-20">
                <Image src={brand8} layout={"responsive"} />
              </div>
              <div className="w-20 h-20">
                <Image src={brand9} layout={"responsive"} />
              </div>
            </div>
          </div>
          <div className="hidden md:block w-full py-5  md:space-y-5">
            <div className="flex justify-center gap-5">
              <div className="w-40 h-40">
                <Image src={brand1} layout={"responsive"} />
              </div>
              <div className="w-40 h-40">
                <Image src={brand2} layout={"responsive"} />
              </div>
              <div className="w-40 h-40">
                <Image src={brand3} layout={"responsive"} />
              </div>
              <div className="w-40 h-40">
                <Image src={brand4} layout={"responsive"} />
              </div>
              <div className="w-40 h-40">
                <Image src={brand5} layout={"responsive"} />
              </div>
              <div className="w-40 h-40">
                <Image src={brand6} layout={"responsive"} />
              </div>
            </div>
            <div className=" flex justify-center gap-5">
              <div className="w-40 h-40">
                <Image src={brand7} layout={"responsive"} />
              </div>
              <div className="w-40 h-40">
                <Image src={brand8} layout={"responsive"} />
              </div>
              <div className="w-40 h-40">
                <Image src={brand9} layout={"responsive"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Brand);
