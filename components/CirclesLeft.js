import Image from "next/image";

const CirclesLeft = () => {
	const isDevelopment = process.env.NODE_ENV === "development";

	// Define URLs based on the environment
	let imageURL = isDevelopment ? "/circles.png" : "/portfolio/circles.png";
	return (
		<div className="w-[400px] xl:w-[500px] absolute -left-8 -bottom-2 mix-blend-color-dodge animate-pulse duration-0 z-10 transform -scale-x-100">
			<Image
				src={imageURL}
				width={260}
				height={200}
				alt=""
				className="w-full h-full"
				onError={(e) => {
					// Handle error if needed
					console.error(`Error loading image: ${imageURL}`, e);
				}}
			/>
		</div>
	);
};

export default CirclesLeft;
