import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import ContactMe from "../Components/ContactMe";
import Education from "../Components/Education";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Home = () => {
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