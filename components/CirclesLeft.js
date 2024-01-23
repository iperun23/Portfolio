import Image from "next/image";

const CirclesLeft = () => {
	return (
		<div className="w-[400px] xl:w-[500px] absolute -left-8 -bottom-2 mix-blend-color-dodge animate-pulse duration-0 z-10 transform -scale-x-100">
			<Image
				src={"/portfolio/circles.png"}
				width={260}
				height={200}
				alt=""
				className="w-full h-full"
			/>
		</div>
	);
};

export default CirclesLeft;
