import { FaCalendarAlt, FaUniversity } from "react-icons/fa";


const EducationCard = ({education}) => {
    const {degreeName, major, year, instituteName, affiliatedCollege} = education


    return (
        <div className="card bg-secondaryBg shadow-lg shadow-primaryBtn p-10 rounded-lg border gap-4">
            <div className="flex items-center gap-3 mb-4 text-2xl md:text-3xl">
                <FaUniversity className="text-gray-100 " />
                <h3 className="font-bold">{degreeName}</h3>
            </div>
            <h4 className=" italic mb-3">{major}</h4>
            <p className="flex items-center gap-2  mb-2">
                <FaCalendarAlt className="" />
                <span>{year.start} - {year.end}</span>
            </p>
            <p className=" font-medium">
                <strong>Institute:</strong> {instituteName}
            </p>
            {affiliatedCollege && (
                <p className=" font-medium">
                    <strong>Affiliated College:</strong> {affiliatedCollege}
                </p>
            )}
        </div>
    );
};

export default EducationCard;