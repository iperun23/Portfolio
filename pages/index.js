import { easeInOut, motion } from "framer-motion";

import { fadeIn } from "../variants";

import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import CirclesLeft from "../components/CirclesLeft";

import { Bs1Circle, Bs2Circle } from "react-icons/bs";
import Link from "next/link";
import { useTheme } from "@/components/ThemeContext";

const Home = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div
			className={`${
				theme === "red" ? "bg-primary/60" : "bg-primary/20"
			} h-full`}
		>
			<CirclesLeft />
			{/* {text} */}
			<div
				className={`${
					theme === "red"
						? "bg-gradient-to-r from-primary/30 via-black/30 to-black/10"
						: "none"
				} w-full h-full  pb-48 lg:pb-1`}
			>
				<div className="text-center flex flex-col justify-center xl:pt-25 xl:text-left h-full container mx-auto md:pt-150 ">
					<motion.h1
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h1"
					>
						Front End Developer <br />
						<span className={` ${theme} text-center`}>Igor Perun</span>
					</motion.h1>
					{/* {subtitle} */}
					<motion.p
						variants={fadeIn("down", 0.3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2"
					>
						a dedicated and creative professional with a diverse range of skills
						and expertise. With a strong background in front end development, I
						have honed my abilities in front-end and back-end web development
					</motion.p>

					<motion.div
						variants={fadeIn("down", 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="inline-block z-20"
					>
						<h3 className="h3 text-lg pb-1">Projects</h3>
						<div className="flex items-center lg:justify-normal justify-center">
							<Bs1Circle className="mr-2" />
							<Link
								className={`${
									theme === "red" ? "hover:text-red-500" : "hover:text-blue-300"
								} underline  transition-colors duration-300 ease-in-out`}
								href="/tempusunlimited"
							>
								Tempus Unlimited
							</Link>
						</div>
						<div className="flex items-center lg:justify-normal md:justify-center justify-center">
							<Bs2Circle className="mr-2" />
							<Link
								className={`${
									theme === "red" ? "hover:text-red-500" : "hover:text-blue-300"
								} underline  transition-colors duration-300 ease-in-out`}
								href="/luxeseasons"
							>
								LuxeSeasons
							</Link>
						</div>
					</motion.div>
					{/* {btn} */}
				</div>
			</div>
			{/* {image} */}
			<div
				className={`${
					theme === "red" ? "w-[1525px]" : "w-full"
				} h-full absolute right-0 bottom-0`}
			>
				{/* bg image */}
				<div
					className={`${
						theme === "red" ? "xl:bg-explosion" : "xl:none"
					} bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 `}
				></div>
				{/* particles */}
				<ParticlesContainer />
				{/* avatar */}
				<motion.div
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 1, ease: easeInOut }}
					className={`${
						theme === "red" ? "lg:right-[6%]" : "lg:right-[4.75%]"
					} w-full h-full max-w-[750px] max-h-[720px] absolute -bottom-32 lg:bottom-0 `}
				>
					<Avatar />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
