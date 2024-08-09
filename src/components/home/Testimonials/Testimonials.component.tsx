"use client";
import { Avatar } from "@mui/material";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 960 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 960, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

interface Props {
  reviews: [
    {
      name: string;
      reviews: string;
      avatar: string;
      created_at: Date;
    }
  ];
}
function TestimonialsComponent({ reviews }: Props) {
  return (
    <section className="w-[90%] mx-auto py-10 font-inriaSerif">
      <h1 className="text-4xl text-center font-bold text-[#1e1e5d]">
        Our Testimonials
      </h1>
      <Carousel
        responsive={responsive}
        className="flex gap-6 py-10 shadow-none"
      >
        {reviews &&
          reviews.map(({ name, reviews, avatar }) => (
            <div
              key={name}
              className="h-[25rem] w-screen flex items-center py-10 "
            >
              <div className="w-[90%] p-4 flex flex-col items-center">
                <div className="flex justify-center items-center gap-4 mb-8">
                  <div className="h-[4rem] w-[4rem] relative">
                    {avatar !== null ? (
                      <Avatar
                        className="size-14 rounded-full object-fill"
                        src={avatar}
                      />
                    ) : (
                      <Avatar>{name.slice(0, 1)}</Avatar>
                    )}
                  </div>
                  <p className="text-xl font-bold">{name}</p>
                </div>
                <p className="text-[#555] w-3/4">&ldquo;{reviews}&rdquo;</p>
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  );
}

export default TestimonialsComponent;
