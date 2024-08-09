// 'use client';
import React, { useState } from 'react'

const tagClass = `px-4 py-2 rounded-full w-fit cursor-pointer duration-300`;

function HerocontainerComponent() {
    // const [sector, setSector] = useState('Agriculture');
    // const changeSector = (e: React.BaseSyntheticEvent) => {
    //     const content = e.target.innerText
    //     if (content === 'Agriculture Sector') {
    //         setSector('Agriculture')
    //     } else if (content === 'Education Sector') {
    //         setSector('Education')
    //     } else if (content === 'Logistics Sector') {
    //         setSector('Logistics')
    //     } else {
    //         setSector('Retail')
    //     }
    // }
    return (
        <section className='h-[50vh] pb-[10rem] bg-background-texture bg-cover text-white pt-60 font-inriaSerif'>
            <div className='w-[80%] mx-auto flex flex-col justify-center h-[100%]'>
                <h1 className='text-5xl font-bold'>Our Verticals</h1>
                {/* <div className='flex items-center gap-4 flex-wrap'>
                    <div onClick={(e) => changeSector(e)} className={`${tagClass}  ${sector === 'Agriculture' ? ' bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Agriculture Sector</p></div>
                    <div onClick={(e) => changeSector(e)} className={`${tagClass}  ${sector === 'Education' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Education Sector</p></div>
                    <div onClick={(e) => changeSector(e)} className={`${tagClass}  ${sector === 'Logistics' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Logistics Sector</p></div>
                    <div onClick={(e) => changeSector(e)} className={`${tagClass}  ${sector === 'Retail' ? 'bg-[#1e1e5d] text-white' : 'bg-[#adadad] text-[555] hover:bg-[#1e1e5d] hover:opacity-85'}`}><p>Retail Sector</p></div>
                </div> */}
                <div className='flex items-center gap-4 flex-wrap py-4'>
                    <div className={`${tagClass}   bg-white text-[#1e1e5d]`}><p>Agriculture Sector</p></div>
                    <div className={`${tagClass}  bg-white text-[#1e1e5d]`}><p>Education Sector</p></div>
                    <div className={`${tagClass}  bg-white text-[#1e1e5d]`}><p>Logistics Sector</p></div>
                    <div className={`${tagClass}  bg-white text-[#1e1e5d]`}><p>Retail Sector</p></div>
                </div>
            </div>
        </section>
    )
}

export default HerocontainerComponent
