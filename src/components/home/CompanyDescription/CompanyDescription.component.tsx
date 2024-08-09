/* eslint-disable @next/next/no-img-element */
"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItems = [
  "/images/company.jpeg",
  "/images/company2.jpeg",
  "/images/company3.jpeg",
  "/images/company4.jpeg",
  "/images/company5.jpeg",
  "/images/company6.jpeg",
  "/images/company7.jpeg",
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CompanyDescriptionComponent() {
  return (
    <section className="bg-background-texture font-inriaSerif py-20 text-white w-[100%]">
      <div className="w-[90%] mx-auto flex items-center flex-col lg:flex-row gap-20">
        <div className="lg:w-[50%]">
          <p className="text-2xl">Welcome to</p>
          <h1 className="text-5xl font-bold">BlueScope Company Pvt. Ltd.</h1>
          <p className="mt-10">
            {`BlueScope pvt ltd is a company that believes in investing in sectors that have the potential for growth and development. The company aims to create sustainable growth in each of these sectors by promoting best practices and delivering high-quality services.`}
          </p>
        </div>
        <div className="w-[100%] lg:w-[50%] flex items-end justify-end">
          <Carousel responsive={responsive} className="w-[100%] md:w-[30rem]">
            {carouselItems.map((item: string) => (
              <div key={item} className="bg-[#D9D9D9] h-[25rem] w-full">
                <img src={item} alt="company" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default CompanyDescriptionComponent;
