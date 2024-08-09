'use client'
import ContactUsForm from '@/components/common/ContactUsForm/ContactUsForm'
import DescriptionComponent from '@/components/verticals/Description/Description.component'
import HerocontainerComponent from '@/components/verticals/Herocontainer/Herocontainer.component'
import React, { useState } from 'react'

function page() {
    return (
        <section>
            <HerocontainerComponent/>
            <DescriptionComponent />
            <ContactUsForm />
        </section>
    )
}

export default page
