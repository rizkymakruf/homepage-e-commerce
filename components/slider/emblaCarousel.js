import React, { useState, useEffect, useCallback, useRef } from "react";
import { memo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Slide1 from "../../public/static/images/slide.png";
import Slide2 from "../../public/static/images/slide3.png";
import Slide3 from "../../public/static/images/slide4.png";

const EmblaCarousel = ({ slides, options = { loop: false } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla w-full md:h-screen">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {slides.map((index) => ( */}

          <div className="embla__slide">
            <div className="embla__slide__inner w-full">
              <div className="w-full h-screen flex flex-col md:grid md:grid-cols-2 bg-[#22577E]">
                <div className="w-full items-center xs:pt-14 pt-28 px-5 md:px-16 md:py-72 space-y-3 md:space-y-5">
                  <p className="text-4xl md:text-5xl font-bold text-white">
                    Networking dan Fiber Optic
                  </p>
                  <p className="text-white text-sm md:text-md">
                    Penyambungan / Splicing Fiber Cut , Relokasi Kabel - Reroute
                    Kabel FO , Penarikan Kabel Local Loop , Kabel Bacbone dan
                    Kabel Distribusi
                  </p>
                  <button className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-md bg-white rounded-full font-bold">
                    Lihat Info
                  </button>
                </div>
                <div className="w-full items-center md:pr-14 md:py-52 md:space-y-5">
                  <Image src={Slide1} layout={"responsive"} />
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner w-full">
              <div className="w-full h-screen flex flex-col md:grid md:grid-cols-2 bg-[#22577E]">
                <div className="w-full items-center xs:pt-14 pt-28 px-5 md:px-16 md:py-72 space-y-3 md:space-y-5">
                  <p className="text-4xl md:text-5xl font-bold text-white">
                    IT Support Infrastructure
                  </p>
                  <p className="text-white text-sm md:text-md">
                    Pekerjaan Infrastruktur dan pekerjaan ME yang berkaitan
                    dengan keperluan IT System meliputi : Penggelaran Kabel
                    Fiber Optic, Kabel , raised Floor Data,Wireless, Koneksi P2P
                    dll.
                  </p>
                  <button className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-md bg-white rounded-full font-bold">
                    Lihat Info
                  </button>
                </div>
                <div className="w-full items-center md:pr-14 md:py-52 md:space-y-5">
                  <Image src={Slide2} layout={"responsive"} />
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner w-full">
              <div className="w-full h-screen flex flex-col md:grid md:grid-cols-2 bg-[#22577E]">
                <div className="w-full items-center xs:pt-14 pt-28 px-5 md:px-16 md:py-72 space-y-3 md:space-y-5">
                  <p className="text-4xl md:text-5xl font-bold text-white">
                    ICT Hardware
                  </p>
                  <p className="text-white text-sm md:text-md">
                    Melayani penjualan perangkat keras ICT meliputi : Perangkat
                    Jaringan, Server, PC, Laptop, dll.
                  </p>
                  <button className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-md bg-white rounded-full font-bold">
                    Lihat Info
                  </button>
                </div>
                <div className="w-full items-center md:pr-14 md:py-52 md:space-y-5">
                  <Image src={Slide3} layout={"responsive"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default memo(EmblaCarousel);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);
