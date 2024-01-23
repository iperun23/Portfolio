import Circles from "../../components/Circles";
import CirclesLeft from "../../components/CirclesLeft";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { useEffect, useRef, useState } from "react";

import VideoPlayerControls from "../../components/VideoPlayerControls";
import FullScreenSVG from "../../public/fullscreen.svg";

const TempusUnlimited = () => {
	const [isPaused1, setIsPaused1] = useState(false);
	const videoRef1 = useRef(null);
	const [videoDuration1, setVideoDuration1] = useState();

	const [isPaused2, setIsPaused2] = useState(false);
	const videoRef2 = useRef(null);
	const [videoDuration2, setVideoDuration2] = useState();

	useEffect(() => {
		const video1 = videoRef1.current;
		const video2 = videoRef2.current;

		if (video1) {
			video1.volume = 0.5;
			setVideoDuration1(video1.duration);
			video1.addEventListener("loadedmetadata", () => {
				video1.volume = 0.25;
				video1.play(); // Start playing after setting the volume
			});
		}

		if (video2) {
			video2.volume = 0.5;
			setVideoDuration2(video2.duration);
			video2.addEventListener("loadedmetadata", () => {
				video2.volume = 0.25;
				video2.play(); // Start playing after setting the volume
			});
		}
	}, []);

	const togglePlayPause1 = () => {
		const video1 = videoRef1.current;

		if (video1) {
			setIsPaused1(!video1.paused);
			video1.paused ? video1.play() : video1.pause();
		}
	};

	const toggleFullScreen1 = () => {
		const video1 = videoRef1.current;

		if (video1) {
			if (video1.requestFullscreen) {
				video1.requestFullscreen();
			} else if (video1.mozRequestFullScreen) {
				video1.mozRequestFullScreen();
			} else if (video1.webkitRequestFullscreen) {
				video1.webkitRequestFullscreen();
			} else if (video1.msRequestFullscreen) {
				video1.msRequestFullscreen();
			}
		}
	};

	const togglePlayPause2 = () => {
		const video2 = videoRef2.current;

		if (video2) {
			setIsPaused2(!video2.paused);
			video2.paused ? video2.play() : video2.pause();
		}
	};

	const toggleFullScreen2 = () => {
		const video2 = videoRef2.current;

		if (video2) {
			if (video2.requestFullscreen) {
				video2.requestFullscreen();
			} else if (video2.mozRequestFullScreen) {
				video2.mozRequestFullScreen();
			} else if (video2.webkitRequestFullscreen) {
				video2.webkitRequestFullscreen();
			} else if (video2.msRequestFullscreen) {
				video2.msRequestFullscreen();
			}
		}
	};

	// Use Next.js environment variable to check if it's in development
	const isDevelopment = process.env.NODE_ENV === "development";

	// Define video URLs based on the environment
	const beforeVideoURL = isDevelopment
		? "/before-vid.mp4"
		: "/portfolio/before-vid.mp4";

	const afterVideoURL = isDevelopment
		? "/after-vid.mp4"
		: "/portfolio/after-vid.mp4";

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

	const videoElementBefore = (
		<video className="w-full" autoPlay ref={videoRef1}>
			<source src={beforeVideoURL} />
		</video>
	);

	const mobileVideoElementBefore = (
		<video
			className="w-full"
			autoPlay
			muted
			playsInline
			controls
			ref={videoRef1}
		>
			<source src={beforeVideoURL} />
		</video>
	);

	const videoElementAfter = (
		<video className="w-full" autoPlay ref={videoRef2}>
			<source src={afterVideoURL} />
		</video>
	);

	const mobileVideoElementAfter = (
		<video
			className="w-full"
			autoPlay
			muted
			playsInline
			controls
			ref={videoRef2}
		>
			<source src={afterVideoURL} />
		</video>
	);

	return (
		<div className="h-full bg-primary/80 lg:pt-36 lg:pb-36 pt-12 flex items-center">
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
						Tempus Unlimited
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						(WordPress Website, Remake/Redesign 2020-2024)
					</motion.p>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<a
							className="text-blue-500 underline"
							href=" https://tempusunlimited.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Project Link: https://tempusunlimited.org/
						</a>
					</motion.p>

					<motion.div
						variants={fadeIn("up", 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className=""
					>
						<div
							className={`grid grid-cols-2 gap-4 ${
								isMobile ? "mobile-view" : ""
							}`}
						>
							<h2 className="my-4 text-xl">Before</h2>
							<h2 className="my-4 text-xl">After</h2>
						</div>
						<div className="grid grid-cols-2 gap-4">
							{/* Render first video component */}
							<div
								class={`bg-white p-2 relative w-full max-w-6xl mb-4 rounded-xl overflow-hidden custom-box-shadow ${
									isMobile ? "mobile-view" : ""
								}`}
							>
								<div className="absolute top-4 right-4 z-10">
									{/* Conditionally render VideoPlayerControls based on isMobile state */}
									{!isMobile && (
										<VideoPlayerControls
											isPaused={isPaused1}
											onPlayPause={togglePlayPause1}
										/>
									)}
								</div>

								{isMobile ? mobileVideoElementBefore : videoElementBefore}
								<div className="absolute bottom-4 right-5 z-10">
									{/* Conditionally render FullScreenSVG based on isMobile state */}
									{!isMobile && (
										<FullScreenSVG
											style={{
												width: "2em",
												height: "2em",
												fill: "#000000",
												cursor: "pointer",
											}}
											onClick={toggleFullScreen1}
										/>
									)}
								</div>
							</div>

							{/* Render second video component */}
							<div
								class={`bg-white p-2 relative w-full max-w-6xl mb-4 rounded-xl overflow-hidden custom-box-shadow ${
									isMobile ? "mobile-view" : ""
								}`}
							>
								<div className="absolute top-4 right-4 z-10">
									{/* Conditionally render VideoPlayerControls based on isMobile state */}
									{!isMobile && (
										<VideoPlayerControls
											isPaused={isPaused2}
											onPlayPause={togglePlayPause2}
										/>
									)}
								</div>
								{isMobile ? mobileVideoElementAfter : videoElementAfter}
								<div className="absolute bottom-4 right-5 z-10">
									{/* Conditionally render FullScreenSVG based on isMobile state */}
									{!isMobile && (
										<FullScreenSVG
											style={{
												width: "2em",
												height: "2em",
												fill: "#000000",
												cursor: "pointer",
											}}
											onClick={toggleFullScreen2}
										/>
									)}
								</div>
							</div>
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
						Before: Website background: Developed in Drupal 7, 15 years ago. 20
						pages of content.
					</p>
					<p>
						After: Website background: Started from an idea using Adobe XD for a
						wireframe process, Developed in WordPress. Over 100 pages of content
						about the company. With Live active chat agents + accessibility
						widget.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default TempusUnlimited;
