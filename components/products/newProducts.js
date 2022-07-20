import Image from "next/image";
import pic1 from "../../public/static/images/product/p1.jpeg";
import pic2 from "../../public/static/images/product/p2.jpg";
import pic3 from "../../public/static/images/product/p3.jpeg";
import pic4 from "../../public/static/images/product/p4.jpeg";
import pic5 from "../../public/static/images/product/p5.jpg";

export default function NewProducts() {
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
      <div className="w-full md:px-12 md:py-8">
        <div className="flex flex-col justify-center items-center w-full md:pb-8">
          <p className="text-2xl font-bold text-gray-800">Produk Terbaru</p>
          <div className="w-48 mt-1 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div className="w-full grid grid-cols-5 gap-6">
          {data.map((a, id) => {
            return (
              <div className="w-full h-72 relative border border-gray-300 hover:shadow-xl hover:scale-110 duration-200 rounded-md shadow-md hover:shadow-blue-100">
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
}
