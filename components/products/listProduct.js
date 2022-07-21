import Image from "next/image";
import pic1 from "../../public/static/images/product/p1.jpeg";
import pic2 from "../../public/static/images/product/p2.jpg";
import pic3 from "../../public/static/images/product/p3.jpeg";
import pic4 from "../../public/static/images/product/p4.jpeg";
import pic5 from "../../public/static/images/product/p5.jpg";
import pic6 from "../../public/static/images/product/p6.jpg";
import pic7 from "../../public/static/images/product/p7.jpg";
import pic8 from "../../public/static/images/product/p8.jpg";
import pic9 from "../../public/static/images/product/p9.jpg";
import pic10 from "../../public/static/images/product/p10.jpg";
import { memo } from "react";

const ListProduct = () => {
  const data = [
    {
      image: pic1,
      name: "ROUTER TP-LINK",
      price: "90.000",
    },
    {
      image: pic2,
      name: "CCTV HD 720P",
      price: "50.000",
    },
    {
      image: pic3,
      name: "SWITCH MIKROTIK",
      price: "99.000",
    },
    {
      image: pic4,
      name: "ROUTER MIKROTIK",
      price: "110.000",
    },
    {
      image: pic5,
      name: "KABEL LAN KUALITAS HIGHT",
      price: "10.000",
    },
    {
      image: pic6,
      name: "MACBOOK PRO AIR MAX",
      price: "25.000",
    },
    {
      image: pic7,
      name: "LAPTOP ASUS ROG",
      price: "15.000",
    },
    {
      image: pic8,
      name: "KABEL FIBER OPTIC",
      price: "100.000",
    },
    {
      image: pic9,
      name: "CPU SERVER",
      price: "10.000",
    },
    {
      image: pic10,
      name: "Processor ",
      price: "9.000",
    },
  ];
  return (
    <>
      <div className="w-full px-2 md:px-12 py-5 md:py-8 bg-gray-100">
        <div className="flex flex-col justify-center items-center w-full pb-5 md:pb-8">
          <p className="text-2xl font-bold text-gray-800">Semua Produk</p>
          <div className="w-48 mt-1 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-6">
          {data.map((a, id) => {
            return (
              <div className="w-full md:h-80 rounded-md relative bg-white shadow-md md:shadow-md md:hover:shadow-xl md:hover:shadow-blue-100">
                <div className="w-full h-24 md:h-40 relative rounded-md">
                  <Image
                    className="rounded-md"
                    src={a.image}
                    layout={"fill"}
                    objectFit={"cover"}
                    priority
                  />
                </div>
                <div className="w-full pt-3 p-3">
                  <p className="text-sm md:text-lg text-gray-700">{a.name}</p>
                  <p className="text-sm md:text-2xl font-bold text-gray-700">
                    Rp {a.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="flex flex-row justify-center items-center w-full pt-5 md:pt-12 gap-2">
          <p className="text-md font-bold text-blue-600">Lihat Produk Lainya</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};
export default memo(ListProduct);
