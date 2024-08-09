/* eslint-disable @next/next/no-img-element */
"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItems = [
  "/images/about.jpeg",
  "/images/about2.jpeg",
  "/images/about3.jpeg",
  "/images/about4.jpeg",
  "/images/about5.jpeg",
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HeroSectionComponent() {
  return (
    <section className="h-fit pb-[10rem] bg-background-texture bg-cover">
      {/* Company Name Div */}
      <div className="w-[90%] mx-auto pt-[10rem] flex justify-between flex-wrap gap-4 md:gap-0">
        <div className="w-[40rem] text-[#fff] ">
          <p className="text-sm">About</p>
          <h1 className="text-6xl font-bold">BlueScope Company Pvt. Ltd.</h1>
        </div>
        <div className="w-[40rem]">
          <p className="text-[#b9b9b9]">
            {`BlueScope Pvt Ltd. is a company that has diversified it's insvestments into various sectors including educational institutions, agriculture production, and courier services. The company has recognized the potential of these sectors and aims to create sustainable growth in each of them.`}
          </p>
          <button className="bg-white text-[#1e1e5d] px-4 py-2 text-sm mt-2 rounded-full">
            Explore more
          </button>
        </div>
      </div>
      {/* Company Description Div */}
      <div className="mt-[4rem]">
        <Carousel responsive={responsive} className="z-[1] w-[100%]">
          {carouselItems.map((item: any) => (
            <div
              key={item}
              className="bg-[#D9D9D9] h-[20rem] sm:w-[100%] md:w-[23.5rem]"
            >
              <img src={item} alt={item + " image"} className="w-full h-full" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default HeroSectionComponent;
