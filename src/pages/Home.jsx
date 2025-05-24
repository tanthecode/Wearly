import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import ButtonComp from "../components/common/Button";

const slides = [
	{
		img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/24/2e8e1d1f-2c3e-4b6e-8e2e-2b8e7e2e1d1f1716543212345-Hatke-Banner.jpg",
		title: "Herd se Hatke",
		subtitle: "Discover unique styles under ₹599",
		cta: "Shop Now",
	},
	{
		img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/24/xyz-banner2.jpg",
		title: "Summer Collection",
		subtitle: "Cool looks for hot days",
		cta: "Explore Summer",
	},
	{
		img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/24/xyz-banner3.jpg",
		title: "Trending Now",
		subtitle: "Fresh drops for you",
		cta: "See Trends",
	},
];

export default function Home() {
	const [current, setCurrent] = useState(0);
	const [timer, setTimer] = useState(5);

	useEffect(() => {
		setTimer(5); 
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 5000); 

		const countdown = setInterval(() => {
			setTimer((t) => (t > 1 ? t - 1 : 5));
		}, 1000);

		return () => {
			clearInterval(interval);
			clearInterval(countdown);
		};
	}, [current]);

	const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
	const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

	return (
		<div className="bg-gray-50 min-h-screen">
			<Header />
			<div className="pt-16 flex flex-col items-center">
				{/* Slider */}
				<div className="relative w-full max-w-4xl h-[380px] md:h-[420px] mt-6 rounded-xl overflow-hidden shadow-lg bg-white">
					{slides.map((slide, idx) => (
						<div
							key={idx}
							className={`absolute inset-0 transition-opacity duration-700 ${
								idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
							}`}
						>
							<img
								src={slide.img}
								alt={slide.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							<div className="absolute left-8 bottom-24 text-white drop-shadow-lg">
								<h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
								<p className="text-lg mb-4">{slide.subtitle}</p>
							</div>
						</div>
					))}
					
					{/* Slider Controls */}
					{/* <button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"
						aria-label="Previous"
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"
						aria-label="Next"
					>
						<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M9 5l7 7-7 7" />
						</svg>
					</button> */}
					{/* Dots */}
					<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
						{slides.map((_, idx) => (
							<span
								key={idx}
								className={`block w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/50"}`}
							/>
						))}
					</div>
					{/* Get Started Button */}
					<div className="absolute bottom-6 right-8">
						<ButtonComp
							text={slides[current].cta || "Get Started"}
							bgColor="bg-black hover:bg-gray-800"
							textColor="text-white"
							className="px-8 py-3 text-lg rounded-lg"
							onClick={() => alert("Get Started!")}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}