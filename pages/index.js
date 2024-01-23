import { easeInOut, motion } from "framer-motion";

import { fadeIn } from "../variants";

import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import CirclesLeft from "../components/CirclesLeft";

import { Bs1Circle, Bs2Circle } from "react-icons/bs";
import Link from "next/link";

const Home = () => {
	return (
		<div className="bg-primary/60 h-full ">
			<CirclesLeft />
			{/* {text} */}
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<div className="text-center flex flex-col justify-center xl:pt-25 xl:text-left h-full container mx-auto md:pt-150 ">
					<motion.h1
						variants={fadeIn("down", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h1"
					>
						Front End Developer <br />
						<span className="text-accent text-center">Igor Perun</span>
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
								className=" underline hover:text-red-500 transition-colors duration-300 ease-in-out"
								href="/tempusunlimited"
							>
								Tempus Unlimited
							</Link>
						</div>
						<div className="flex items-center lg:justify-normal md:justify-center justify-center">
							<Bs2Circle className="mr-2" />
							<Link
								className="underline hover:text-red-500 transition-colors duration-300 ease-in-out"
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
			<div className="w-[1525px] h-full absolute right-0 bottom-0">
				{/* bg image */}
				<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
				{/* particles */}
				<ParticlesContainer />
				{/* avatar */}
				<motion.div
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 1, ease: easeInOut }}
					className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
				>
					<Avatar />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
