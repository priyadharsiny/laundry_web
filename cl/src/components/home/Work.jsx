import React from "react";
import { workDetails } from "../../helpers/cardDetails";
import WorkCard from "./WorkCard";

const Work = () => {
	return (
		<div className="relative">
			<div className="max-w-screen-2xl mx-auto min-h-screen px-4 flex flex-col justify-center items-center">
				<h1
					data-aos="fade-up"
					className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold pb-5 pt-10 text-center"
				>
					What We Offer
				</h1>
				<div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center pb-10 md:pb-20 pt-10 md:pt-28">
					{workDetails.map((work, index) => (
						<WorkCard work={work} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
