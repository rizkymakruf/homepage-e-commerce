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

export default function ListProduct() {
  const data = [
    {
      image: pic1,
      name: "Router",
      price: "90",
    },
    {
      image: pic2,
      name: "CCTV",
      price: "50",
    },
    {
      image: pic3,
      name: "Switch",
      price: "99",
    },
    {
      image: pic4,
      name: "Router",
      price: "110",
    },
    {
      image: pic5,
      name: "Kabel Lan",
      price: "10",
    },
    {
      image: pic6,
      name: "Macbook",
      price: "25.000",
    },
    {
      image: pic7,
      name: "Laptop",
      price: "15.000",
    },
    {
      image: pic8,
      name: "Kabel FO",
      price: "100",
    },
    {
      image: pic9,
      name: "Server",
      price: "10.000",
    },
    {
      image: pic10,
      name: "Processor",
      price: "9.000",
    },
    {
      image: pic1,
      name: "Router",
      price: "90",
    },
    {
      image: pic2,
      name: "CCTV",
      price: "50",
    },
    {
      image: pic3,
      name: "Switch",
      price: "99",
    },
    {
      image: pic4,
      name: "Router",
      price: "110",
    },
    {
      image: pic5,
      name: "Kabel Lan",
      price: "10",
    },
    {
      image: pic6,
      name: "Macbook",
      price: "25.000",
    },
    {
      image: pic7,
      name: "Laptop",
      price: "15.000",
    },
    {
      image: pic8,
      name: "Kabel FO",
      price: "100",
    },
    {
      image: pic9,
      name: "Server",
      price: "10.000",
    },
    {
      image: pic10,
      name: "Processor",
      price: "9.000",
    },
  ];
  return (
    <>
      <div className="w-full md:px-12 md:py-8">
        <div className="flex flex-col justify-center items-center w-full md:pb-8">
          <p className="text-2xl font-bold text-gray-800">Semua Produk</p>
          <div className="w-48 mt-1 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div className="w-full grid grid-cols-5 gap-6">
          {data.map((a, id) => {
            return (
              <div className="w-full md:h-80 rounded-md p-2 relative bg-gray-100 shadow-md hover:shadow-xl hover:shadow-blue-100">
                <div className="w-full md:h-40 relative rounded-md">
                  <Image
                    className="rounded-md"
                    src={a.image}
                    layout={"fill"}
                    objectFit={"cover"}
                    priority
                  />
                </div>
                <div className="flex justify-between w-full pt-3">
                  <p className="font-bold text-lg text-gray-700">{a.name}</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Hallo ini adalah deskripsi atau detail produk singkat yang di
                  tampilkan.
                </p>
                <div className="w-full flex justify-between items-center pt-1">
                  <p className="text-2xl font-bold text-gray-700">
                    Rp {a.price}K
                  </p>
                  <button className="w-6 h-6 bg-blue-500 rounded-md flex justify-center items-center hover:w-14 text-xs gap-1 font-semibold text-white duration-150 hover:before:content-['Add']">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="flex flex-row justify-center items-center w-full md:pt-12 gap-2">
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
}
