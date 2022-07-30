import React, { useState, useEffect, useCallback, memo } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
const Core = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 4,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const data = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      head: "IT Support Infrastructure",
      title:
        "Pekerjaan Infrastruktur dan pekerjaan ME yangberkaitan dengan keperluan IT System meliputi : Penggelaran Kabel Fiber Optic, Kabel , raised Floor Data,Wireless, Koneksi P2P dll.",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.618 7.46198L6.403 2.08498C6.15859 1.97783 5.88165 1.97208 5.633 2.06898C5.51012 2.11766 5.39809 2.19017 5.30335 2.28233C5.20861 2.3745 5.13305 2.48449 5.081 2.60598L2.081 9.60598C1.97653 9.84972 1.97315 10.125 2.07161 10.3712C2.17006 10.6174 2.36228 10.8145 2.606 10.919L9.563 13.9L8.323 17H4V14H2V22H4V19H8.323C9.146 19 9.875 18.506 10.179 17.742L11.401 14.688L14.82 16.153C15.0626 16.2573 15.3367 16.2613 15.5823 16.1643C15.8279 16.0672 16.0252 15.8769 16.131 15.635L19.131 8.77798C19.2371 8.5354 19.2427 8.26063 19.1466 8.01392C19.0504 7.76722 18.8603 7.56873 18.618 7.46198V7.46198ZM19.93 16.372L18.072 15.63L20.07 10.63L21.928 11.371L19.93 16.372Z"
            fill="white"
          />
        </svg>
      ),
      head: "Cam Security / CCTV",
      title:
        "Pemasangan CCTV - Camera Pemantau untuk segmen perumahan , perusahaan , instansi , hotel ataupun dengan harga yang kompetitif dan berkualitas.",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 12.75H16.6065C16.7891 13.457 17.2232 14.0732 17.8275 14.483C18.4318 14.8928 19.1649 15.0681 19.8893 14.9761C20.6136 14.8841 21.2796 14.5311 21.7622 13.9832C22.2449 13.4353 22.5112 12.7302 22.5112 12C22.5112 11.2698 22.2449 10.5647 21.7622 10.0168C21.2796 9.46895 20.6136 9.11592 19.8893 9.02392C19.1649 8.93191 18.4318 9.10725 17.8275 9.51706C17.2232 9.92687 16.7891 10.543 16.6065 11.25H12.75V5.25001H16.6065C16.7891 5.957 17.2232 6.57315 17.8275 6.98296C18.4318 7.39277 19.1649 7.5681 19.8893 7.4761C20.6136 7.38409 21.2796 7.03106 21.7622 6.48318C22.2449 5.9353 22.5112 5.23019 22.5112 4.50001C22.5112 3.76983 22.2449 3.06471 21.7622 2.51683C21.2796 1.96895 20.6136 1.61592 19.8893 1.52392C19.1649 1.43191 18.4318 1.60725 17.8275 2.01706C17.2232 2.42687 16.7891 3.04301 16.6065 3.75001H12.75C12.3523 3.7504 11.971 3.90857 11.6898 4.18979C11.4086 4.471 11.2504 4.8523 11.25 5.25001V11.25H7.39351C7.21096 10.543 6.77683 9.92687 6.1725 9.51706C5.56817 9.10725 4.83512 8.93191 4.11076 9.02392C3.3864 9.11592 2.72046 9.46895 2.23777 10.0168C1.75507 10.5647 1.48877 11.2698 1.48877 12C1.48877 12.7302 1.75507 13.4353 2.23777 13.9832C2.72046 14.5311 3.3864 14.8841 4.11076 14.9761C4.83512 15.0681 5.56817 14.8928 6.1725 14.483C6.77683 14.0732 7.21096 13.457 7.39351 12.75H11.25V18.75C11.2504 19.1477 11.4086 19.529 11.6898 19.8102C11.971 20.0914 12.3523 20.2496 12.75 20.25H16.6065C16.7891 20.957 17.2232 21.5732 17.8275 21.983C18.4318 22.3928 19.1649 22.5681 19.8893 22.4761C20.6136 22.3841 21.2796 22.0311 21.7622 21.4832C22.2449 20.9353 22.5112 20.2302 22.5112 19.5C22.5112 18.7698 22.2449 18.0647 21.7622 17.5168C21.2796 16.969 20.6136 16.6159 19.8893 16.5239C19.1649 16.4319 18.4318 16.6072 17.8275 17.0171C17.2232 17.4269 16.7891 18.043 16.6065 18.75H12.75V12.75ZM19.5 10.5C19.7967 10.5 20.0867 10.588 20.3334 10.7528C20.58 10.9176 20.7723 11.1519 20.8858 11.426C20.9994 11.7001 21.0291 12.0017 20.9712 12.2926C20.9133 12.5836 20.7704 12.8509 20.5607 13.0607C20.3509 13.2704 20.0836 13.4133 19.7926 13.4712C19.5017 13.5291 19.2001 13.4994 18.926 13.3858C18.6519 13.2723 18.4176 13.08 18.2528 12.8334C18.088 12.5867 18 12.2967 18 12C18.0004 11.6023 18.1586 11.221 18.4398 10.9398C18.721 10.6586 19.1023 10.5004 19.5 10.5ZM19.5 3.00001C19.7967 3.00001 20.0867 3.08798 20.3334 3.2528C20.58 3.41763 20.7723 3.65189 20.8858 3.92598C20.9994 4.20007 21.0291 4.50167 20.9712 4.79264C20.9133 5.08361 20.7704 5.35089 20.5607 5.56067C20.3509 5.77045 20.0836 5.91331 19.7926 5.97119C19.5017 6.02906 19.2001 5.99936 18.926 5.88583C18.6519 5.7723 18.4176 5.58004 18.2528 5.33336C18.088 5.08669 18 4.79668 18 4.50001C18.0004 4.1023 18.1586 3.721 18.4398 3.43979C18.721 3.15857 19.1023 3.0004 19.5 3.00001V3.00001ZM4.50001 13.5C4.20333 13.5 3.91333 13.412 3.66665 13.2472C3.41998 13.0824 3.22772 12.8481 3.11419 12.574C3.00066 12.2999 2.97095 11.9983 3.02883 11.7074C3.08671 11.4164 3.22957 11.1491 3.43935 10.9393C3.64913 10.7296 3.9164 10.5867 4.20737 10.5288C4.49834 10.471 4.79994 10.5007 5.07403 10.6142C5.34812 10.7277 5.58239 10.92 5.74721 11.1667C5.91203 11.4133 6.00001 11.7033 6.00001 12C5.99961 12.3977 5.84145 12.779 5.56023 13.0602C5.27901 13.3414 4.89771 13.4996 4.50001 13.5V13.5ZM19.5 18C19.7967 18 20.0867 18.088 20.3334 18.2528C20.58 18.4176 20.7723 18.6519 20.8858 18.926C20.9994 19.2001 21.0291 19.5017 20.9712 19.7926C20.9133 20.0836 20.7704 20.3509 20.5607 20.5607C20.3509 20.7704 20.0836 20.9133 19.7926 20.9712C19.5017 21.0291 19.2001 20.9994 18.926 20.8858C18.6519 20.7723 18.4176 20.58 18.2528 20.3334C18.088 20.0867 18 19.7967 18 19.5C18.0004 19.1023 18.1586 18.721 18.4398 18.4398C18.721 18.1586 19.1023 18.0004 19.5 18Z"
            fill="white"
          />
        </svg>
      ),
      head: "Networking & Fiber Optic",
      title:
        "Penyambungan / Splicing Fiber Cut , Relokasi Kabel - Reroute Kabel FO , Penarikan Kabel Local Loop , Kabel Bacbone dan Kabel Distribusi",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 19V11C7 10.4696 7.21071 9.96086 7.58579 9.58579C7.96086 9.21071 8.46957 9 9 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M14 12.01L14.01 11.999M10 12.01L10.01 11.999L10 12.01ZM12 12.01L12.01 11.999L12 12.01Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.5 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V9"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M9 7.01002L9.01 6.99902M5 7.01002L5.01 6.99902L5 7.01002ZM7 7.01002L7.01 6.99902L7 7.01002Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      head: "Sistem Integrasi",
      title:
        "Pengerjaan integrasi sistem untuk meliput : Server basis Linux / Windows, Firewall System, Email Server, Web Server , Active Directory , Domain Controller, Back Up Server, dan Embedded  System.",
    },
    {
      svg: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V6C1 5.20435 1.31607 4.44129 1.87868 3.87868C2.44129 3.31607 3.20435 3 4 3H20C20.7956 3 21.5587 3.31607 22.1213 3.87868C22.6839 4.44129 23 5.20435 23 6V14C23 14.7956 22.6839 15.5587 22.1213 16.1213C21.5587 16.6839 20.7956 17 20 17H13V19H16C16.2652 19 16.5196 19.1054 16.7071 19.2929C16.8946 19.4804 17 19.7348 17 20C17 20.2652 16.8946 20.5196 16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21H8C7.73478 21 7.48043 20.8946 7.29289 20.7071C7.10536 20.5196 7 20.2652 7 20C7 19.7348 7.10536 19.4804 7.29289 19.2929C7.48043 19.1054 7.73478 19 8 19H11V17ZM4 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6V14C21 14.2652 20.8946 14.5196 20.7071 14.7071C20.5196 14.8946 20.2652 15 20 15H4C3.73478 15 3.48043 14.8946 3.29289 14.7071C3.10536 14.5196 3 14.2652 3 14V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5V5Z"
            fill="white"
          />
        </svg>
      ),
      head: "PABX - IP PBX",
      title:
        "Menyediakan Pekerjaan instalasi PABX/PBX - Intercom System , Video Door - IP PBX - Voice Over Internet Berbagai Merk ",
    },
    {
      svg: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.48931 6.0293L6.17029 14.4375H8.02235L8.66191 12.8174H12.3381L12.9776 14.4375H14.8297L11.5106 6.0293H9.48931ZM9.3419 11.0947L10.5 8.16076L11.6581 11.0947H9.3419Z"
            fill="white"
          />
          <path
            d="M15.75 2.29688H5.25V0.65625H0.65625V5.25H2.29688V15.75H0.65625V20.3438H5.25V18.7031H15.75V20.3438H20.3438V15.75H18.7031V5.25H20.3438V0.65625H15.75V2.29688ZM1.96875 3.9375V1.96875H3.9375V3.9375H1.96875ZM3.9375 19.0312H1.96875V17.0625H3.9375V19.0312ZM15.75 17.3906H5.25V15.75H3.60938V5.25H5.25V3.60938H15.75V5.25H17.3906V15.75H15.75V17.3906ZM19.0312 17.0625V19.0312H17.0625V17.0625H19.0312ZM17.0625 1.96875H19.0312V3.9375H17.0625V1.96875Z"
            fill="white"
          />
        </svg>
      ),
      head: "VMS - Running Text - Videotron",
      title:
        "Kami melayani pembuatan media promosi dan informasi yang berbasis Modul LED dengan berbagai macam ukuran dan warna.",
    },
    {
      svg: (
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.35714 15.4545H12.2143V13.9091H1.35714V15.4545ZM1.35714 9.27273H12.2143V7.72727H1.35714V9.27273ZM17.9821 14.6818C17.9821 14.3598 17.8832 14.0862 17.6853 13.8608C17.4874 13.6354 17.247 13.5227 16.9643 13.5227C16.6815 13.5227 16.4412 13.6354 16.2433 13.8608C16.0454 14.0862 15.9464 14.3598 15.9464 14.6818C15.9464 15.0038 16.0454 15.2775 16.2433 15.5028C16.4412 15.7282 16.6815 15.8409 16.9643 15.8409C17.247 15.8409 17.4874 15.7282 17.6853 15.5028C17.8832 15.2775 17.9821 15.0038 17.9821 14.6818ZM1.35714 3.09091H12.2143V1.54545H1.35714V3.09091ZM17.9821 8.5C17.9821 8.17803 17.8832 7.90436 17.6853 7.67898C17.4874 7.4536 17.247 7.34091 16.9643 7.34091C16.6815 7.34091 16.4412 7.4536 16.2433 7.67898C16.0454 7.90436 15.9464 8.17803 15.9464 8.5C15.9464 8.82197 16.0454 9.09564 16.2433 9.32102C16.4412 9.5464 16.6815 9.65909 16.9643 9.65909C17.247 9.65909 17.4874 9.5464 17.6853 9.32102C17.8832 9.09564 17.9821 8.82197 17.9821 8.5ZM17.9821 2.31818C17.9821 1.99621 17.8832 1.72254 17.6853 1.49716C17.4874 1.27178 17.247 1.15909 16.9643 1.15909C16.6815 1.15909 16.4412 1.27178 16.2433 1.49716C16.0454 1.72254 15.9464 1.99621 15.9464 2.31818C15.9464 2.64015 16.0454 2.91383 16.2433 3.1392C16.4412 3.36458 16.6815 3.47727 16.9643 3.47727C17.247 3.47727 17.4874 3.36458 17.6853 3.1392C17.8832 2.91383 17.9821 2.64015 17.9821 2.31818ZM19 12.3636V17H0V12.3636H19ZM19 6.18182V10.8182H0V6.18182H19ZM19 0V4.63636H0V0H19Z"
            fill="white"
          />
        </svg>
      ),
      head: "ICT Hardware",
      title:
        "Melayani penjualan perangkat keras ICT meliputi : Perangkat Jaringan, Server, PC, Laptop, dll.",
    },
  ];

  return (
    <>
      <div className="w-full py-3 px-5 md:px-10">
        <p className="w-full text-4xl md:text-6xl font-semibold text-[#22577E]">
          Our Cores Business
        </p>
      </div>
      <div className="embla1 w-full py-5 hidden md:block">
        <div className="embla__viewport1" ref={viewportRef}>
          <div className="embla__container1 px-8 gap-5">
            {/* {slides.map((index) => ( */}
            {data.map((a, id) => {
              return (
                <div className="embla__slide1">
                  <div className="embla__slide__inner1 h-96">
                    <div className="embla__slide__img1 w-56 h-32 border-2 border-[#22577E] px-3 py-6 rounded-md">
                      <div className="w-full flex justify-center items-center">
                        <div className="w-16 h-16 bg-[#22577E] rounded-md flex justify-center items-center">
                          {a.svg}
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center pt-14">
                        <p className="font-semibold text-[#22577E] text-center">
                          {a.head}
                        </p>
                      </div>
                      <div className="w-full flex justify-center items-center pt-5">
                        <p className="font-sm text-justify text-[#22577E]">
                          {a.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ))} */}
          </div>
        </div>
        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
      </div>
      <div className="block md:hidden w-full">
        <div className="w-full flex py-2 px-3 md:px-5 md:overflow-hidden overflow-hidden overflow-x-scroll gap-3">
          {data.map((a, id) => {
            return (
              <>
                <div className="h-80 border-2 border-[#22577E] px-1 py-2 md:px-3 md:py-6 rounded-md">
                  <div className="w-full flex justify-center items-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-[#22577E] rounded-md flex justify-center items-center">
                      {a.svg}
                    </div>
                  </div>
                  <div className="w-36 md:w-full flex justify-center items-center pt-5 md:pt-14">
                    <p className="font-semibold text-md text-[#22577E] text-center">
                      {a.head}
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center pt-3 md:pt-5">
                    <p className="text-sm text-justify text-[#22577E]">
                      {a.title}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(Core);
