import { useNavigate } from "react-router-dom";
import logo from "../assets/Image/logo.png"

const Navbar = () => {
    const navigate = useNavigate()
    const links = <>
                    <li><a onClick={() => goToSection("Banner-section")} className="hover:text-primaryBtn">Home</a></li>
                    <li><a onClick={() => goToSection("about-section")} className="hover:text-primaryBtn">About Me</a></li>
                    <li><a onClick={() => goToSection("skill-section")} className="hover:text-primaryBtn">Skills</a></li>
                    <li><a onClick={() => goToSection("education-section")} className="hover:text-primaryBtn">Education</a></li>
                    <li><a onClick={() => goToSection("project-section")} className="hover:text-primaryBtn">Projects</a></li>
                    <li><a onClick={() => goToSection("contact-section")} className="hover:text-primaryBtn">Contact</a></li>
                </>

    const goToSection = (sectionId) => {
        // Navigate to the Home Page and pass the section ID as state
        navigate("/", { state: { scrollTo: sectionId } });
    };

  return (
    <div className="">
        <div className="navbar bg-[#00000052] z-30 fixed backdrop-blur-md px-2 xl:px-10">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg  xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#000000e9] rounded-box z-[1] mt-3 w-52 p-2 shadow" >
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img src={logo} alt="logo" className="w-10" />
                    <p className="text-xl md:text-2xl font-bold text-primaryBtn code-pro-font">AkashPaul.Dev</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
            <a href="https://drive.google.com/file/d/1EULQQ2yoDMufb4qykKpl6f0UBTque2xH/view?usp=sharing"  target="_blank" className="btn btn-sm btn-accent bg-primaryBtn border-none"> Resume</a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
