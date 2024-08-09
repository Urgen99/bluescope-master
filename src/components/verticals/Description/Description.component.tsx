import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItems = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
]
function DescriptionComponent() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        newDevice: {
            breakpoint: { max: 1024, min: 924 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 924, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='flex w-[90%] mx-auto justify-between gap-10 py-10 pt-20 flex-col lg:flex-row'>
            <div className='w-[100%] lg:w-[40rem]'>
                <Carousel responsive={responsive} className='z-[1] flex gap-6'>
                    {
                        carouselItems.map((item: any) => (
                            <div key={item} className='h-[25rem] w-[100vw] md:w-[30rem] flex items-center'>
                                <div className='w-[90%] shadow-xl hover:shadow-md duration-300 p-4'>
                                    <Image
                                        src={item} alt={'client-img'}
                                        layout='fill'
                                        objectFit='cover'
                                        className='object-fill'
                                    />
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className='w-[100%] lg:w-[50%] text-balance'>
                <h1 className='font-bold text-3xl mb-2'>BlueScope Pvt Ltd</h1>
                <p className='text-sm text-[#555]'>
                    {`BlueScope Pvt Ltd. is a company that has diversified it's insvestments into various sectors including educational institutions, agriculture production, and courier services. The company has recognized the potential of these sectors and aims to create sustainable growth in each of them.`}
                </p>
                <div className='flex flex-col md:flex-row gap-10 mt-8  items-center md:items-start'>
                    <div className='w-[16rem] shadow-lg p-4 hover:shadow-2xl duration-500 bg-[#1e1e5d] text-white'>
                        <h4 className='font-bold text-lg '>
                            4+ <br />
                            Sectors
                        </h4>
                        <p>  </p>
                        <p className='text-[#6C6C6C]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                    </div>
                    <div className='w-[16rem] p-4 shadow-lg hover:shadow-2xl duration-500  bg-[#1e1e5d] text-white'>
                        <h4 className='font-bold text-lg '>
                            8+ <br />
                            years of experiance
                        </h4>
                        <p className='text-[#6C6C6C]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescriptionComponent
