import { useEffect, useState } from "react";
import EducationCard from "./EducationCard";


const Education = () => {
    const [educations , setEducations] = useState([])
    
        useEffect(()=>{
            fetch('education.json')
            .then(res => res.json())
            .then(data => setEducations(data))
        },[])
    return (
        <div id="education-section" className="bg-secondaryBg">
            <div className="max-w-screen-2xl mx-auto  py-20 px-5">
                <h2 className="code-pro-font uppercase text-center font-bold text-primaryBtn text-3xl md:text-5xl mb-10">Education</h2>
                <div className="flex justify-around items-center flex-wrap gap-6">
                    {
                        educations.map(education => <EducationCard key={education.id} education={education}></EducationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Education;