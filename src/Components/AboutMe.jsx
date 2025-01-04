import aboutImg from "../assets/Image/developer-about.jpg"


const AboutMe = () => {
    return (
        <div id="about-section" className="bg-secondaryBg py-20">
            <h2 className="code-pro-font uppercase text-center font-bold text-primaryBtn text-3xl md:text-5xl mb-10">About Me</h2>
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-5">
                <div>
                    <img src={aboutImg} alt="developer about image" className="w-full max-w-sm mx-auto rounded-lg shadow-lg shadow-primaryBtn" />
                </div>
                <div className="flex flex-col justify-center gap-6">
                    <p className="text-xl md:text-2xl font-medium">Curious About Me? Here's a Glimpse!</p>
                    <p className="italic">I am a Computer Science and Engineering student with a strong passion for frontend web development. Specializing in creating intuitive, responsive, and user-friendly interfaces, I focus on enhancing digital experiences. My academic background provides me with a solid understanding of problem-solving and technology, while my hands-on projects demonstrate my ability to turn ideas into functional and visually appealing websites. I stay committed to learning and keeping up with the latest trends to deliver innovative, modern solutions that meet both user and business needs.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;