import Image from "next/image";
import { useTheme } from "./ThemeContext";

const TopLeftImg = () => {
	const isDevelopment = process.env.NODE_ENV === "development";

	// Define URLs based on the environment
	let imageURL = isDevelopment
		? "/top-left-img.png"
		: "/portfolio/top-left-img.png";

	const { theme, toggleTheme } = useTheme();
	return (
		<div
			className={`${
				theme === "red" ? "" : "hidden"
			} absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50`}
		>
			<Image
				src={imageURL}
				width={400}
				height={400}
				alt=""
				onError={(e) => {
					// Handle error if needed
					console.error(`Error loading image: ${imageURL}`, e);
				}}
			/>
		</div>
	);
};

export default TopLeftImg;
