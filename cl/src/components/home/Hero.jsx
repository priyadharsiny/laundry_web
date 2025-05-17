import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/landing-img.webp";

const Hero = () => {
	const [textShadow, setTextShadow] = useState("0px 0px #EB492C");
	const distance = 30;

	useEffect(() => {
		const container = document.getElementById('hero-container');
		const text = document.getElementById('hero-text');

		function setShadow(e) {
			const width = container.offsetWidth;
			const height = container.offsetHeight;

			let x = e.clientX - container.offsetLeft;
			let y = e.clientY - container.offsetTop;

			const xDistance = Math.round((x / width * distance) - (distance / 2));
			const yDistance = Math.round((y / height * distance) - (distance / 2));

			setTextShadow(`${xDistance}px ${yDistance}px #9CA3AF`);
		}

		container.addEventListener('mousemove', setShadow);

		return () => container.removeEventListener('mousemove', setShadow);
	}, []);

	return (
		<div id="hero-container" className="bg-lighter-blue">
			<div className="max-w-screen-2xl mx-auto min-h-90 px-4 flex justify-between items-center">
				<div
					data-aos-offset="500"
					className="flex flex-col items-start -mt-20 flex-wrap"
				>
					<h1
						id="hero-text"
						className="text-4xl lg:text-7xl font-extrabold pb-5"
						data-aos-delay="0"
						data-aos="fade-up-right"
						style={{ textShadow }}
					>
						Save Time for more Important Things
					</h1>
					<p
						className="text-2xl lg:text-3xl font-semibold pb-5 text-gray-400"
						data-aos-delay="100"
						data-aos="fade-up-right"
					>
						We'll take care of all your cleanings
					</p>
					<Link
						data-aos-delay="200"
						data-aos="fade-up-right"
						className="bg-[#11B4F5] text-white py-4 px-8 sm:py-5 sm:px-10 md:py-5 md:px-14 lg:py-5 lg:px-16 rounded-full mt-8 sm:mt-10 font-semibold text-base sm:text-lg md:text-xl lg:text-xl transition-colors duration-300 hover:bg-[#9DD6F7]"
						to="/auth/register"
					>
						Get Started
					</Link>
				</div>
				<div data-aos="fade-down-left" data-aos-offset="200">
					<img
						src={HeroImage}
						alt="hero-img"
						className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[1300px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
