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
    const sectionCTARef = React.useRef(null);

    return (
        <main>
            <SectionTop sectionCTARef={sectionCTARef} />
            <SectionTeam />
            <SectionPlans />
            <SectionTestimonials />
            <SectionBenefits />
            <SectionCTA sectionCTARef={sectionCTARef} />
            <SectionFooter />
        </main>
    )
}

export default App;
