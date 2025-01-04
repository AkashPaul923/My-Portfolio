import { useEffect } from "react";
import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import ContactMe from "../Components/ContactMe";
import Education from "../Components/Education";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import { useLocation } from "react-router-dom";
import { scroller, Element } from "react-scroll";


const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if a section to scroll to is provided via state
        if (location.state?.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            });
        }
    }, [location]);


    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;