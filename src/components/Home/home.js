import React from 'react'
import EquipmentSection from '../Sections/EquipmentSection/equipmentSection'
import HeroSection from '../Sections/HeroSection/heroSection'
import StorySection from '../Sections/StorySection/storySection'
import WhySection  from '../Sections/WhySection/whySection'
import CatalogueSection from '../Sections/CatalogueSection/catalogueSection'
import QuestionSection from '../Sections/QuestionSection/questionSection'
import ContactSection from '../Sections/ContactSection/contactSection'
function home() {
    return (
        <div>
            <HeroSection />
            <StorySection /> 
            <EquipmentSection />
            <WhySection />
            <CatalogueSection />
           <QuestionSection />
            <ContactSection />
        </div>
    )
}

export default home


