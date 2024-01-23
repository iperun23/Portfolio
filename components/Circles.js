import Image from "next/image";

const Circles = () => {
	const isDevelopment = process.env.NODE_ENV === "development";

	// Define URLs based on the environment
	let imageURL = isDevelopment ? "/circles.png" : "/portfolio/circles.png";
	return (
		<div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
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

export default Circles;
