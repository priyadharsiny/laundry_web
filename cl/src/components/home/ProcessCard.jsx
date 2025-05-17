import React from "react";

const ProcessCard = ({ processStep }) => {
	return (
		<div
			className="flex flex-col justify-center items-center w-full max-w-xs text-center m-2 sm:m-4 md:m-6 lg:m-8"
			data-aos-delay={processStep.delay}
			data-aos="fade-up"
		>
			<div className="shadow-lg rounded-full p-6 sm:p-8 md:p-10 w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 flex justify-center items-center bg-white">
				<img src={processStep.src} alt="process-step-img" className="w-24 sm:w-32 md:w-40 lg:w-48" />
			</div>
			<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pt-2 sm:pt-4 md:pt-6 pb-1 sm:pb-2">{processStep.title}</h3>
			<p className="text-sm sm:text-base md:text-lg text-gray-600">{processStep.description}</p>
		</div>
	);
};

export default ProcessCard;
