import Image from "next/image";

const TopLeftImg = () => {
	const isDevelopment = process.env.NODE_ENV === "development";

	// Define URLs based on the environment
	let imageURL = isDevelopment
		? "/top-left-img.png"
		: "/portfolio/top-left-img.png";
	return (
		<div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
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
