import SecondSectionComponent from '@/components/about-us/SecondSection/SecondSection.component'
import ThirdSectionComponent from '@/components/about-us/ThirdSection/ThirdSection.component'
import HeroSectionComponent from '@/components/about-us/heroSection/HeroSection.component'
import ContactUsForm from '@/components/common/ContactUsForm/ContactUsForm'
import React from 'react'

function page() {
    return (
        <main className='font-inriaSerif'>
            <HeroSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            {/* Contact Us Section */}
            <section>
                <ContactUsForm />
            </section>
        </main>
    )
}

export default page
