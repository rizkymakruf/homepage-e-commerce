import Image from "next/image";
import pic1 from "../../public/static/images/product/p1.jpeg";
import pic2 from "../../public/static/images/product/p2.jpg";
import pic3 from "../../public/static/images/product/p3.jpeg";
import pic4 from "../../public/static/images/product/p4.jpeg";
import pic5 from "../../public/static/images/product/p5.jpg";
import { memo } from "react";

const NewProduct = () => {
  const data = [
    {
      image: pic1,
    },
    {
      image: pic2,
    },
    {
      image: pic3,
    },
    {
      image: pic4,
    },
    {
      image: pic5,
    },
  ];
  return (
    <>
      <div className="w-full px-2 py-5 md:py-8">
        <div className="flex flex-col justify-center items-center w-full pb-5 md:pb-8">
          <p className="text-2xl font-bold text-gray-800">Produk Terbaru</p>
          <div className="w-48 mt-1 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div className="w-full flex md:overflow-hidden overflow-hidden md:py-10 md:px-5 overflow-x-scroll md:grid md:grid-cols-5 gap-2 md:gap-6">
          {data.map((a, id) => {
            return (
              <div className="w-36 md:w-full flex-none h-52 md:h-72 relative border border-gray-300 md:hover:shadow-xl md:hover:scale-110 md:duration-200 rounded-md shadow-md md:hover:shadow-blue-100">
                <Image
                  className="rounded-md"
                  src={a.image}
                  layout={"fill"}
                  objectFit={"cover"}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default memo(NewProduct);
