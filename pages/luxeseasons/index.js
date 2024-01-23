import Circles from "../../components/Circles";
import CirclesLeft from "../../components/CirclesLeft";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { useEffect, useRef, useState } from "react";

import VideoPlayerControls from "../../components/VideoPlayerControls";
import FullScreenSVG from "../../public/fullscreen.svg";

const LuxeSeasons = () => {
	const [isPaused, setIsPaused] = useState(false);
	const videoRef = useRef(null);
	const [videoDuration, setVideoDuration] = useState();

	useEffect(() => {
		const video = videoRef.current;

		if (video) {
			video.volume = 0.5;
			setVideoDuration(video.duration);
			video.addEventListener("loadedmetadata", () => {
				video.volume = 0.25;
				video.play(); // Start playing after setting the volume
			});
		}
	}, []);

	const togglePlayPause = () => {
		const video = videoRef.current;

		if (video) {
			setIsPaused(!video.paused);
			video.paused ? video.play() : video.pause();
		}
	};

	const toggleFullScreen = () => {
		const video = videoRef.current;

		if (video) {
			if (video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
				video.mozRequestFullScreen();
			} else if (video.webkitRequestFullscreen) {
				video.webkitRequestFullscreen();
			} else if (video.msRequestFullscreen) {
				video.msRequestFullscreen();
			}
		}
	};

	// Use Next.js environment variable to check if it's in development
	const isDevelopment = process.env.NODE_ENV === "development";

	// Define video URLs based on the environment
	const videoURL = isDevelopment
		? "/luxeseasonsvid.mp4"
		: "/portfolio/luxeseasonsvid.mp4";

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if window is defined (client side)
		if (typeof window !== "undefined") {
			// Set isMobile based on the window width
			setIsMobile(window.innerWidth <= 600);

			// Add event listener for window resize
			const handleResize = () => {
				setIsMobile(window.innerWidth <= 600);
			};

			window.addEventListener("resize", handleResize);

			// Remove event listener on component unmount
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<div className="h-full bg-primary/60 py-36 flex items-center">
			<Circles />
			<CirclesLeft />
			<div className=" container mx-auto">
				<div className="text-center flex flex-col lg:text-left ">
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 xl:mt-8"
					>
						LuxeSeasons
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						(E-Commerce Store + CMS dashbaord)
					</motion.p>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<a
							className="text-blue-500 underline"
							href="https://ecommerce-store-nine-sandy.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Project Link: https://ecommerce-store-nine-sandy.vercel.app/
						</a>
					</motion.p>
					<motion.div
						variants={fadeIn("up", 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="relative w-[90%] max-w-6xl my-8 rounded-xl overflow-hidden custom-box-shadow"
					>
						<div className="absolute top-7 right-7 z-10">
							{/* Conditionally render VideoPlayerControls based on isMobile state */}
							{!isMobile && (
								<VideoPlayerControls
									isPaused={isPaused}
									onPlayPause={togglePlayPause}
								/>
							)}
						</div>
						<video className="w-full" autoPlay ref={videoRef}>
							<source src={videoURL} />
						</video>
						<div className="absolute bottom-7 right-7 z-10">
							{/* Conditionally render FullScreenSVG based on isMobile state */}
							{!isMobile && (
								<FullScreenSVG
									style={{
										width: "2em",
										height: "2em",
										fill: "#000000",
										cursor: "pointer",
									}}
									onClick={toggleFullScreen}
								/>
							)}
						</div>
					</motion.div>
				</div>

				<motion.div
					variants={fadeIn("up", 0.8)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="w-full"
				>
					<p>
						Frontend Stack: Next.JS (Using React + TypeScript) + Shadcn for UI
						Components/Tailwind CSS
					</p>
					<p>
						Backend Stack for Dashboard: PrismaDB, MongoDB, NextAuth, and Clerk
						for Authentication and User Management for Dashboard.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default LuxeSeasons;
