import React from "react";
import EquipmentSection from "../Sections/EquipmentSection/equipmentSection";
import HeroSection from "../Sections/HeroSection/heroSection";
import StorySection from "../Sections/StorySection/storySection";
import WhySection from "../Sections/WhySection/whySection";
import CatalogueSection from "../Sections/CatalogueSection/catalogueSection";
import QuestionSection from "../Sections/QuestionSection/questionSection";
import ContactSection from "../Sections/ContactSection/contactSection";
import EnquirySection from "../Sections/EnquirySection/enquirySection";
function home(props) {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <EquipmentSection />
      <WhySection />
      <CatalogueSection />
      <QuestionSection />
      <ContactSection />
      <EnquirySection />
    </div>
  );
}

export default home;
