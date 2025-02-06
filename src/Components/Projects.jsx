import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div id="project-section" className="py-20">
            <h2 className="code-pro-font uppercase text-center font-bold text-primaryBtn text-3xl md:text-5xl mb-10">Projects</h2>
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
            
        </div>
    );
};

export default Projects;