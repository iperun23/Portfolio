import Circles from "../../components/Circles";
import CirclesLeft from "../../components/CirclesLeft";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
	return (
		<div className="h-full bg-primary/60 py-36 flex items-center justify-center">
			<Circles />
			<CirclesLeft />
			<div className=" container mx-auto">
				<div className="text-center flex flex-col lg:text-left  items-center justify-center">
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 xl:mt-8"
					>
						Contact Me below:
					</motion.h2>
					<motion.p
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<a
							className="text-blue-500 underline"
							href="mailto:iperun23@gmail.com"
						>
							iperun23@gmail.com
						</a>
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
