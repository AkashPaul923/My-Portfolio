import { useEffect } from "react";
import { useState } from "react";


const Skills = () => {
    const [skills , setSkills] = useState([])

    useEffect(()=>{
        fetch('skills.json')
        .then(res => res.json())
        .then(data => setSkills(data))
    },[])
    return (
        <div className="max-w-screen-2xl mx-auto py-20 px-5">
            <h2 className="code-pro-font uppercase text-center font-bold text-primaryBtn text-3xl md:text-5xl mb-10">Skills</h2>
            <div className="flex justify-around items-center flex-wrap gap-6 ">
                {
                    skills.map(skill => <div key={skill.id} className="hover:bg-secondaryBg rounded-xl p-5 shadow-lg shadow-primaryBtn">
                            <img src={skill.skillImage} alt={skill.skillName} className="w-14 md:w-20" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;