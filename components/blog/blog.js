import Image from "next/image";
import blog1 from "../../public/static/images/blog/b1.jpeg";
import blog2 from "../../public/static/images/blog/b2.jpeg";
import blog3 from "../../public/static/images/blog/b3.jpeg";
import { memo } from "react";

const Blog = () => {
  const data = [
    {
      image: blog3,
      name: "Pekerjaan pemasangan Running Text di 11 Koramil Tabanan",
      more: "Kami melakukan pemasangan Running Text di 11 Koramil Tabanan, Pemasangan Runn...",
    },
    {
      image: blog1,
      name: "Pekerjaan Maintenance CCTV Jasamarga Bali Tol",
      more: "Kami melakukan Maintanance CCTV di Jasamarga Bali Tol. Dalam berita ini kami ...",
    },
    {
      image: blog3,
      name: "Pekerjaan pemasangan Running Text di 11 Koramil Tabanan",
      more: "Kami melakukan pemasangan Running Text di 11 Koramil Tabanan, Pemasangan Runn...",
    },
  ];
  return (
    <>
      <div className="w-full px-2 py-5 md:py-8" id="blog">
        <div className="flex flex-col justify-center items-center w-full pb-5 md:pb-8">
          <p className="text-lg md:text-2xl font-bold text-gray-800">Blog</p>
          <div className="w-24 mt-1 h-1 bg-blue-500 rounded-full"></div>
          <p className="text-sm md:text-lg pt-4 text-center text-gray-800">
            Dokumentasi Pekerjaan {"&"} Blog Nuansa Inti Persada
          </p>
        </div>
        <div className="w-full flex py-2 md:px-5 md:overflow-hidden overflow-hidden overflow-x-scroll md:grid md:grid-cols-3 gap-2 md:gap-6">
          {data.map((a, id) => {
            return (
              <div className="w-40 md:w-full flex-none md:h-96 border border-gray-300 rounded-md shadow-md md:hover:shadow-xl md:hover:shadow-blue-100">
                <div className="w-full h-36 md:h-56 relative">
                  <Image
                    className="rounded-t-md"
                    src={a.image}
                    layout={"fill"}
                    objectFit={"cover"}
                    priority
                  />
                </div>
                <div className="p-3 flex flex-col space-y-0">
                  <p className="text-xs md:text-lg w-full font-bold text-gray-700">
                    {a.name}
                  </p>
                  <p className="md:text-md text-xs">{a.more}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="flex flex-row justify-center items-center w-full pt-5 gap-2">
          <p className="text-sm md:text-md font-bold text-blue-600">
            Lihat Semua Blog
          </p>
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
export default memo(Blog);
