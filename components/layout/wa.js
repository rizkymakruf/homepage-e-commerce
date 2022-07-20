import Link from "next/link";

export default function Wa() {
  return (
    <>
      <Link href="https://api.whatsapp.com/send?phone=6282145554374">
        <button className="w-12 h-12 bg-blue-600 animate-bounce bottom-8 right-8 rounded-full z-40 fixed flex justify-center items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75 1.75C12.25 1.75 14.25 3.75 14.25 6.25M9.75 4.25C10.75 4.25 11.75 5.25 11.75 6.25M1.75 1.75C1.75 10.25 5.75 14.25 14.25 14.25V10.25L10.75 9.25L9.75 10.75C7.75 10.75 5.25 8.25 5.25 6.25L6.75 5.25L5.75 1.75H1.75Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Link>
    </>
  );
}
