import React from "react";
import { feedbackDetails } from "../../helpers/feedbackDetails";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
	return (
		<div className="relative">
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<div>
					<h1
						data-aos="fade-up"
						className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold pb-5 text-center"
					>
						What our Clients Say
					</h1>
					<div className="flex justify-center lg:justify-evenly items-center pb-12 lg:pb-24 pt-12 lg:pt-32 flex-wrap gap-6 lg:gap-12">
						{feedbackDetails.map((feedback, index) => (
							<FeedbackCard feedback={feedback} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
