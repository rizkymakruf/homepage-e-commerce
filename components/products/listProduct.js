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
      name: "ROUTER",
      price: "90.000",
    },
    {
      image: pic2,
      name: "CCTV HD 720P",
      price: "50.000",
    },
    {
      image: pic3,
      name: "SWITCH",
      price: "99.000",
    },
    {
      image: pic4,
      name: "ROUTER",
      price: "110.000",
    },
    {
      image: pic5,
      name: "KABEL LAN",
      price: "10.000",
    },
    {
      image: pic6,
      name: "MACBOOK",
      price: "25.000",
    },
    {
      image: pic7,
      name: "LAPTOP ASUS",
      price: "15.000",
    },
    {
      image: pic8,
      name: "KABEL FO",
      price: "100.000",
    },
    {
      image: pic9,
      name: "CPU SERVER",
      price: "10.000",
    },
    {
      image: pic10,
      name: "PROCESSOR ",
      price: "9.000",
    },
    {
      image: pic1,
      name: "ROUTER",
      price: "90.000",
    },
    {
      image: pic2,
      name: "CCTV HD 720P",
      price: "50.000",
    },
    {
      image: pic3,
      name: "SWITCH",
      price: "99.000",
    },
    {
      image: pic4,
      name: "ROUTER",
      price: "110.000",
    },
    {
      image: pic5,
      name: "KABEL LAN",
      price: "10.000",
    },
    {
      image: pic6,
      name: "MACBOOK",
      price: "25.000",
    },
    {
      image: pic7,
      name: "LAPTOP ASUS",
      price: "15.000",
    },
    {
      image: pic8,
      name: "KABEL FO",
      price: "100.000",
    },
    {
      image: pic9,
      name: "CPU SERVER",
      price: "10.000",
    },
    {
      image: pic10,
      name: "PROCESSOR ",
      price: "9.000",
    },
    {
      image: pic1,
      name: "ROUTER",
      price: "90.000",
    },
    {
      image: pic2,
      name: "CCTV HD 720P",
      price: "50.000",
    },
    {
      image: pic3,
      name: "SWITCH",
      price: "99.000",
    },
    {
      image: pic4,
      name: "ROUTER",
      price: "110.000",
    },
    {
      image: pic5,
      name: "KABEL LAN",
      price: "10.000",
    },
    {
      image: pic6,
      name: "MACBOOK",
      price: "25.000",
    },
    {
      image: pic7,
      name: "LAPTOP ASUS",
      price: "15.000",
    },
    {
      image: pic8,
      name: "KABEL FO",
      price: "100.000",
    },
    {
      image: pic9,
      name: "CPU SERVER",
      price: "10.000",
    },
    {
      image: pic10,
      name: "PROCESSOR ",
      price: "9.000",
    },
  ];
  return (
    <>
      <div className="w-full px-3 md:px-32 pb-5" id="product">
        <div className="flex justify-between items-center w-full pb-3 md:pb-3">
          <p className="text-sm md:text-lg font-bold text-gray-800">
            All Product
          </p>
          {/* <div className="gap-2 flex items-center">
            <button className="text-blue-500 font-semibold text-sm md:text-md">
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
          </div> */}
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6">
          {data.map((a, id) => {
            return (
              <div className="w-full rounded-md relative list-product">
                <div className="w-full h-24 md:h-40 relative rounded-md">
                  <Image
                    className="rounded-t-md"
                    src={a.image}
                    layout={"fill"}
                    objectFit={"cover"}
                    priority
                  />
                </div>
                <div>
                  <div className="py-2 px-1 content-between grid grid-cols-1">
                    <p className="text-sm md:text-md text-gray-700">{a.name}</p>
                    <p className="text-sm md:text-lg font-bold text-gray-700">
                      Rp {a.price}
                    </p>
                  </div>
                </div>
                <button className="w-full bg-blue-400/50 rounded-b-md py-1.5 flex justify-center items-center gap-2 hover:text-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default memo(ListProduct);
