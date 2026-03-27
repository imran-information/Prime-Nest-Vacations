// src/pages/WaterfrontLiving.jsx
import React from "react";
import FeaturesSection from "../components/WaterfrontLiving/FeaturesSection";
import GallerySection from "../components/WaterfrontLiving/GallerySection";
import { HeroSection } from "../components/WaterfrontLiving/HeroSection";
import WaterActivities from "../components/homePage/WaterActivities";

const WaterfrontLiving = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <WaterActivities />
            <GallerySection />
        </>
    );
};

export default WaterfrontLiving;