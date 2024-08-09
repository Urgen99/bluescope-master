/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItems = [
  "/images/about.jpeg",
  "/images/about2.jpeg",
  "/images/about3.jpeg",
  "/images/about4.jpeg",
  "/images/about5.jpeg",
  "/images/about6.jpeg",
  "/images/about7.jpeg",
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const aboutContent = {
  agriculture:
    "In the agriculture sector, BlueScope pvt ltd has invested in various agricultural products such as fruits, vegetables, and grains. The company aims to promote sustainable agriculture practices that help in increasing productivity, reducing costs, and improving the quality of produce.",
  education:
    "In the education sector, BlueScope pvt ltd has invested in setting up scholls and colleges that provide quality education to students. The comapny belives that education is the foundation for creeating a better future for individuals and the society",
  logistics:
    "In the logistics sector, BlueScpoe pvt ltd has invested in providing reliable and efficient courier services to customers. The company aims to create a network of delivery services that cater to the needs of business and individuals.",
};
function AboutUsComponent() {
  const [tag, setTag] = useState("Agriculture");
  const [content, setContent] = useState(aboutContent.agriculture);

  const changeTag = (e: React.BaseSyntheticEvent) => {
    const content = e.target.innerText;
    if (content === "Agriculture Sector") {
      setTag("Agriculture");
      setContent(aboutContent.agriculture);
    } else if (content === "Education Sector") {
      setTag("Education");
      setContent(aboutContent.education);
    } else {
      setTag("Logistics");
      setContent(aboutContent.logistics);
    }
  };

  const tagClass = `text-white px-4 py-2 rounded-full w-fit cursor-pointer duration-300`;

  return (
    <section className="w-[100%] text-center py-20 font-inriaSerif" id="about">
      <div className="w-[90%] mx-auto flex flex-col gap-8 mb-12">
        <h1 className="text-4xl font-inriaSerif font-bold">
          Delivering iconic project with our sub-companies around Nepal
        </h1>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div
            onClick={(e) => changeTag(e)}
            className={`${tagClass}  ${
              tag === "Agriculture"
                ? "bg-[#1e1e5d] text-white"
                : "bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85"
            } transition-colors ease-linear duration-300`}
          >
            <p>Agriculture Sector</p>
          </div>
          <div
            onClick={(e) => changeTag(e)}
            className={`${tagClass}  ${
              tag === "Education"
                ? "bg-[#1e1e5d] text-white"
                : "bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85"
            } transition-colors ease-linear duration-300`}
          >
            <p>Education Sector</p>
          </div>
          <div
            onClick={(e) => changeTag(e)}
            className={`${tagClass}  ${
              tag === "Logistics"
                ? "bg-[#1e1e5d] text-white"
                : "bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85"
            } transition-colors ease-linear duration-300`}
          >
            <p>Logistics Sector</p>
          </div>
          {/* <div onClick={(e) => changeTag(e)} className={`${tagClass}  ${tag === 'Retail' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Retail Sector</p></div> */}
        </div>
        <p className="text-[#6C6C6C]">{content}</p>
      </div>
      <Carousel responsive={responsive} className="w-full">
        {carouselItems.map((item: string) => (
          <div
            key={item}
            className="bg-[#D9D9D9] h-[20rem] sm:w-[100%] md:w-[23.5rem]"
          >
            <img src={item} alt={item + " image"} className="w-full h-full" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default AboutUsComponent;
