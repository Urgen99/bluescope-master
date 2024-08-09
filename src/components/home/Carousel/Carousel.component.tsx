"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const images = ["/images/carousel.png"];
function CarouselComponent() {
  return (
    <div className="flex items-start pt-40 md:pt-0 md:items-center justify-center w-[90%] mx-auto h-[100vh]">
      <div>
        <Image
          src="/images/carousel.png"
          alt={""}
          sizes="100vw"
          fill
          className="object-cover"
        />
        <div className="bg-[#1e1e5d] absolute top-0 left-0 h-[100%] w-[100%] opacity-[55%]"></div>
      </div>
      <div className="z-10 text-white flex flex-col gap-4">
        <h1 className="text-6xl font-bold font-inriaSerif">
          {" "}
          BlueScope Company Pvt. Ltd.
        </h1>
        <p className="w-[90%] md:w-[50%]">
          {`BlueScope Pvt Ltd. is a company that has diversified it's insvestments into various sectors including educational institutions, agriculture production, and courier services. The company has recognized the potential of these sectors and aims to create sustainable growth in each of them.`}
        </p>
        <Link href="/#about">
          <button className="text-[#1e1e5d] bg-white px-4 py-1 rounded-full w-fit hover:bg-[#1e1e5d] hover:text-[#fff] transition-colors ease-linear duration-300">
            Visit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarouselComponent;
