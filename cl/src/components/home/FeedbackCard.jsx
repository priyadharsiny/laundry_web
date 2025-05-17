import React from "react";

const FeedbackCard = ({ feedback }) => {
	return (
		<div
			className="flex flex-col justify-center items-center w-full sm:w-80 text-center m-5 sm:m-10 shadow-lg rounded-xl p-5 bg-white relative"
			data-aos-delay={feedback.delay}
			data-aos="fade-up"
		>
			<div className="p-6 sm:p-10 w-40 sm:w-60 h-40 sm:h-60 flex justify-center items-center absolute -top-20 sm:-top-28">
				<img src={feedback.src} alt="process-step-img" className="w-20 sm:w-28" />
			</div>
			<h3 className="text-xl sm:text-2xl font-bold pt-16 sm:pt-20">{feedback.name}</h3>
			<h4 className="text-base sm:text-lg font-bold text-gray-400">{feedback.title}</h4>
			<p className="text-sm sm:text-base text-gray-400 pt-6 sm:pt-8 px-3 sm:px-5 pb-3 sm:pb-4">
				{feedback.description}
			</p>
		</div>
	);
};

export default FeedbackCard;
