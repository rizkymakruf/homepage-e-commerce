import Image from "next/image";
import Logo from "../../public/static/images/nuansa.png";

export default function Navbar() {
  return (
    <div>
      <div className="w-full md:py-7 md:px-12 z-50 fixed top-0 bg-white shadow-sm shadow-blue-100">
        <div className="w-full flex items-center justify-between">
          <div className="">
            <Image src={Logo} width={100} height={35} />
          </div>
          <div className="flex gap-4">
            <div>
              <button className="font-semibold text-md">Home</button>
              <div className="bg-blue-500 rounded-full w-full h-1"></div>
            </div>
            <div>
              <button className="font-semibold text-md">Products</button>
            </div>
            <div>
              <button className="font-semibold text-md">Blog</button>
            </div>
            <div>
              <button className="font-semibold text-md">Info</button>
            </div>
            <div>
              <button className="font-semibold text-md">Contact</button>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <button className="text-md font-bold hover:text-blue-900">
              Login
            </button>
            <button className="text-md font-bold py-1 px-3 bg-blue-500/80 hover:bg-blue-900 border border-blue-500 text-white rounded-full">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
