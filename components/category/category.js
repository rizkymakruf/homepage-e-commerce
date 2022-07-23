import Image from "next/image";
import pic1 from "../../public/static/images/category/ctgry1.png";
import pic2 from "../../public/static/images/category/ctgry2.png";
import pic3 from "../../public/static/images/category/ctgry3.png";
import pic4 from "../../public/static/images/category/ctgry4.png";
import { memo } from "react";

const Category = () => {
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
  ];
  return (
    <>
      <div className="w-full px-3 md:px-32 py-3" id="container-category">
        <div className="flex justify-between items-center w-full pb-3 md:pb-3">
          <p className="md:text-lg text-sm font-bold text-gray-800">
            Kategori Populer
          </p>
          <div className="gap-1 md:gap-2 flex items-center">
            <button className="text-blue-500 font-semibold md:text-lg text-sm">
              Lihat semua
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 md:h-4 md:w-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-1 md:gap-3">
          {data.map((a, id) => {
            return (
              <div>
                <Image src={a.image} layout={"responsive"} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default memo(Category);
