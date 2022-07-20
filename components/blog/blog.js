import Image from "next/image";
import blog1 from "../../public/static/images/blog/b1.jpeg";
import blog2 from "../../public/static/images/blog/b2.jpeg";
import blog3 from "../../public/static/images/blog/b3.jpeg";

export default function Blog() {
  const data = [
    {
      image: blog1,
      name: "Pekerjaan Maintenance CCTV Jasamarga Bali Tol",
      more: "Kami melakukan Maintanance CCTV di Jasamarga Bali Tol. Dalam berita ini kami ...",
    },
    {
      image: blog2,
      name: "Pekerjaan IoT Jasamarga Bali Tol",
      more: "Pekerjaan IoT ini merupakan pekerjaan dalam bidang IoT pertama kami. Kami mem...",
    },
    {
      image: blog3,
      name: "Pekerjaan pemasangan Running Text di 11 Koramil Tabanan",
      more: "Kami melakukan pemasangan Running Text di 11 Koramil Tabanan, Pemasangan Runn...",
    },
  ];
  return (
    <>
      <div className="w-full md:px-12 md:py-8">
        <div className="flex flex-col justify-center items-center w-full md:pb-8">
          <p className="text-2xl font-bold text-gray-800">Blog</p>
          <div className="w-24 mt-1 h-1 bg-blue-500 rounded-full"></div>
          <p className="text-lg pt-8 text-gray-800">
            Dokumentasi Pekerjaan {"&"} Blog Nuansa Inti Persada
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          {data.map((a, id) => {
            return (
              <div className="md:h-96 border border-gray-300 rounded-md shadow-md hover:shadow-xl hover:shadow-blue-100 hover:scale-105 duration-300">
                <div className="w-full md:h-56 bg-gray-400 relative">
                  <Image
                    className="rounded-md"
                    src={a.image}
                    layout={"fill"}
                    objectFit={"cover"}
                    priority
                  />
                </div>
                <div className="p-3 grid grid-rows-2 gap-4">
                  <p className="text-lg w-full font-bold text-gray-700">
                    {a.name}
                  </p>
                  <p>{a.more}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="flex flex-row justify-center items-center w-full md:pt-8 gap-2">
          <p className="text-md font-bold text-blue-600">Lihat Semua Blog</p>
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
