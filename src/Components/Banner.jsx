import { Typewriter } from "react-simple-typewriter";
import developerImg from "../assets/Image/profile_pic.jpg"

const Banner = () => {
    return (
        <div id="Banner-section" className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-6 px-5 py-28 lg:py-40">
            <div className="flex flex-col justify-center gap-6">
                <p className="text-xl md:text-3xl">Hello It's Me </p>
                <h1 className="text-3xl md:text-5xl text-primaryBtn font-bold code-pro-font">Akash Paul.</h1>
                <h1 className="text-2xl md:text-4xl">I am a{' '}
                    <span className="text-primaryBtn font-bold code-pro-font">
                        <Typewriter
                            words={['Frontend Developer.', "React Developer.", "Tech Enthusiast."]}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={2000}
                        />
                    </span>
                </h1>
                <p>Passionate Web Developer dedicated to building dynamic, responsive, and user-centric web applications. Proficient in crafting seamless and intuitive interfaces, delivering innovative digital experiences that align with modern web development standards and client needs.</p>
                <div className="flex gap-5">
                    <a href="https://www.linkedin.com/in/akash-paul-257894318/" target="_blank"><img src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000" alt="linkedin" className="w-12" /></a>
                    <a href="https://github.com/AkashPaul923" target="_blank"><img src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000" alt="github" className="w-12" /></a>
                    <a href="https://www.facebook.com/akash.paul.664216" target="_blank"><img src="https://img.icons8.com/?size=100&id=z657ovoGgS2o&format=png&color=000000" alt="facebook" className="w-12" /></a>
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/1EULQQ2yoDMufb4qykKpl6f0UBTque2xH/view?usp=sharing"  target="_blank" className="btn btn-accent bg-primaryBtn border-none">Download Resume</a>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <img src={developerImg} alt="developer image" className="max-w-xs mx-auto rounded-full shadow-3xl  shadow-primaryBtn" />
                </div>
            </div>
        </div>
    );
};

export default Banner;