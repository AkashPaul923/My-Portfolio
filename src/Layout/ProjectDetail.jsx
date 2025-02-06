import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const ProjectDetail = () => {
    const project = useLoaderData()

    // console.log(project);


    return (
        <div className="max-w-screen-xl mx-auto py-20">
            <div className="min-h-screen  p-6 md:p-12">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primaryBtn">{project.projectName}</h1>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="flex justify-center">
                        <img
                            src={project.projectImg}
                            alt={project.projectName}
                            className="rounded-lg shadow-lg shadow-primaryBtn w-full max-w-md lg:max-w-xl"
                        />
                    </div>

                    {/* Project Details */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                        <p className="mb-4">{project.briefDescription}</p>

                        {/* Technology Stack */}
                        <h3 className="text-lg font-medium mb-2">Main Technology Stack:</h3>
                        <ul className="flex flex-wrap gap-2 mb-4">
                            {project.mainTechnologyStack.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-accent text-black px-3 py-1 rounded-full text-sm"
                            >
                            {tech}
                            </span>
                        ))}
                        </ul>

                        {/* Links */}
                        <div className="flex flex-col gap-2">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primaryBtn hover:underline"><FaExternalLinkAlt /> Live Link</a>
                            <a  href={project.githubLinks.clientCodeLink}  target="_blank" rel="noopener noreferrer"  className="flex items-center gap-2 text-primaryBtn hover:underline"><FaGithub /> Github Repository Link</a>
                        </div>
                    </div>
                </div>

                {/* Challenges, Limitations, and Improvements */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Additional Details</h2>

                    {/* Challenges Faced */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Challenges Faced:</h3>
                        <ul className="list-disc list-inside ">
                            {project.details.challengesFaced.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Current Limitations */}
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Current Limitations:</h3>
                        <ul className="list-disc list-inside ">
                            {project.details.currentLimitations.map((limitation, index) => (
                                <li key={index}>{limitation}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Improvements Planned */}
                    <div>
                        <h3 className="text-lg font-medium mb-2">Improvements Planned:</h3>
                        <ul className="list-disc list-inside ">
                            {project.details.improvementsPlanned.map((improvement, index) => (
                                <li key={index}>{improvement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;