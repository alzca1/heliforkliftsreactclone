import React from 'react'
import EquipmentSection from '../Sections/EquipmentSection/equipmentSection'
import HeroSection from '../Sections/HeroSection/heroSection'
import StorySection from '../Sections/StorySection/storySection'
import WhySection  from '../Sections/WhySection/whySection'

function home() {
    return (
        <div>
            <HeroSection />
            <StorySection /> 
            <EquipmentSection />
            <WhySection />
        </div>
    )
}

export default home


