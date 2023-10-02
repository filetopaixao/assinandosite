import React from "react";
import SectionTop from "./components/sections/SectionTop";
import SectionPlans from "./components/sections/SectionPlans";
import SectionTeam from "./components/sections/SectionTeam";
import SectionTestimonials from "./components/sections/SectionTestimonials";
import SectionBenefits from "./components/sections/SectionBenefits";
import SectionCTA from './components/sections/SectionCTA';
import SectionFooter from './components/sections/SectionFooter';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function App() {
    return (
        <main>
            <SectionTop />
            <SectionTeam />
            <SectionPlans />
            <SectionTestimonials />
            <SectionBenefits />
            <SectionCTA />
            <SectionFooter />
        </main>
    )
}

export default App;
