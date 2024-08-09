import React from 'react'

function SecondSectionComponent() {
    const tagClass = `text-white px-4 py-2 rounded-full w-fit cursor-pointer duration-300`;

    return (
        <section className='my-20'>
            <h2 className='text-center mx-auto text-2xl mb-8  font-bold'>
            Delivering iconic project with our sub-companies around Nepal
            </h2>
            <div className='flex gap-10 mx-auto w-fit flex-wrap justify-center md:justify-normal'>
            <div className={`${tagClass}  bg-[#1e1e5d] text-white`}><p>Agriculture Sector</p></div>
            <div className={`${tagClass}   bg-[#1e1e5d] text-white`}><p>Education Sector</p></div>
            <div className={`${tagClass}   bg-[#1e1e5d] text-white`}><p>Logistics Sector</p></div>
            <div className={`${tagClass}   bg-[#1e1e5d] text-white`}><p>Retail Sector</p></div>
            </div>
        </section>
    )
}

export default SecondSectionComponent
