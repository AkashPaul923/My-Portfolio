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
            <div className="space-y-10 px-5">
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
            
        </div>
    );
};

export default Projects;