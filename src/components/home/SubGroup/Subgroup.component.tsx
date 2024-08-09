/* eslint-disable @next/next/no-img-element */
import React from "react";

function SubgroupComponent() {
  return (
    <section className="bg-background-texture font-inriaSerif py-20 text-white mt-8">
      <h1 className="text-center text-4xl mb-8">Our Sub Groups</h1>
      <div className="w-[90%] mx-auto flex items-center justify-center flex-col gap-10">
        <div className="flex justify-between gap-6 flex-wrap">
          <div className="h-[20rem] w-[20rem] bg-[#D9D9D9] mx-auto md:mx-0">
            <img src="/images/subgroup.jpeg" alt="Subgroup Image" className="h-full w-full"/>
          </div>
          <div className="h-[20rem] w-[20rem] bg-[#D9D9D9] mx-auto md:mx-0">
            <img src="/images/subgroup2.jpeg" alt="Subgroup Image"className="h-full w-full" />
          </div>
          <div className="h-[20rem] w-[20rem] bg-[#D9D9D9] mx-auto md:mx-0">
            <img src="/images/subgroup3.jpeg" alt="Subgroup Image"className="h-full w-full" />
          </div>
          <div className="h-[20rem] w-[20rem] bg-[#D9D9D9] mx-auto md:mx-0">
            <img src="/images/subgroup4.jpeg" alt="Subgroup Image"className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubgroupComponent;
