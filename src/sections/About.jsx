import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
	const [hasCopied, setHasCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("robertoangel19@gmail.com");
		setHasCopied(true);

		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};

	return (
		<section className="c-space my-20" id="about">
			<div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid1.png"
							alt="grid-1"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">Hi, I&apos;m Angel de Lara</p>
							<p className="grid-subtext">
								Fullstack Developer with over four years of experience building
								high-performance web applications. Expert in React, NestJS,
								TypeScript and PostgreSQL. Passionate about end-to-end
								solutions, real-time systems and scalable architecture.
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid22.png"
							alt="grid-2"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								Fullstack Expertise: React, TypeScript, NestJS, Node.js,
								PostgreSQL, MongoDB. WebSockets, AWS, CI/CD, Performance
								Optimization, and Microservices Architecture.
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container">
						<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
							<Globe
								height={326}
								width={326}
								backgroundColor="rgba(0, 0, 0, 0)"
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
								bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
								labelsData={[
									{
										lat: 22.7709,
										lng: -102.5832,
										text: "Zacatecas, Mexico",
										color: "white",
										size: 15,
									},
								]}
							/>
						</div>
						<div>
							<p className="grid-headtext">Open to Remote Work Worldwide</p>
							<p className="grid-subtext">
								Based in Zacatecas, Mexico. Experienced in collaborating across
								time zones with teams in Mexico, the USA, and India.
							</p>
							<Button name="Contact Me" isBeam containerClass="w-full mt-10" />
						</div>
					</div>
				</div>

				<div className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid3.png"
							alt="grid-3"
							className="w-full sm:h-[266px] h-fit object-contain"
						/>

						<div>
							<p className="grid-headtext">My Passion for Coding</p>
							<p className="grid-subtext">
								I&apos;m passionate about building robust web applications and
								staying up-to-date with the latest industry trends. I enjoy
								collaborating in cross-functional teams and efficiently
								implementing solutions to technical challenges.
							</p>
						</div>
					</div>
				</div>

				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container">
						<img
							src="assets/grid4.png"
							alt="grid-4"
							className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
						/>

						<div className="space-y-2">
							<p className="grid-subtext text-center">Contact me</p>
							<div className="copy-container" onClick={handleCopy}>
								<img
									src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
									alt="copy"
								/>
								<p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
									robertoangel19@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
