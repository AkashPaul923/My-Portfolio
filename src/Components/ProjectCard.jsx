import { Link } from "react-router-dom";


const ProjectCard = ({project}) => {
    const {id,projectName, projectImg, briefDescription} = project
    return (
        <div className="grid md:grid-cols-12 p-6 max-w-screen-xl mx-auto gap-7 rounded-xl border shadow-lg shadow-primaryBtn">
            <div className="md:col-span-6 lg:col-span-4">
                <img src={projectImg} alt="project img" className="w-full object-cover rounded-lg" />
            </div>
            <div className="md:col-span-6 lg:col-span-8 space-y-5">
                <h2 className="text-3xl">{projectName}</h2>
                <p>{briefDescription.slice(0, 200)} ....</p>
                <Link to={`/project-detail/${id}`} className="btn btn-accent bg-primaryBtn border-none">View Detail</Link>
            </div>
        </div>
    );
};

export default ProjectCard;