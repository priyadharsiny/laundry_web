import React from "react";

const WorkCard = ({ work }) => {
	return (
		<div
			className="flex flex-col justify-between items-start w-full max-w-xs sm:max-w-sm m-2 sm:m-4 min-h-48 h-auto text-left shadow-md rounded-md"
			data-aos-delay={work.delay}
			data-aos="fade-up"
		>
			<div className="flex justify-center items-center w-full">
				<img src={work.src} alt="work-img" className="w-full h-auto object-cover rounded-t-md" />
			</div>
			<h3 className="text-lg sm:text-xl font-semibold pt-4 pb-2 px-2 sm:px-4">{work.title}</h3>
			<p className="text-sm sm:text-base text-gray-600 px-2 sm:px-4 pb-4">{work.description}</p>
		</div>
	);
};

export default WorkCard;
