/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#000000",
				secondary: "#393A47",
				accent: "#F13024",
			},
			backgroundImage: {
				explosion: `url("${
					process.env.NODE_ENV === "development"
						? "/bg-explosion.png"
						: "/portfolio/bg-explosion.png"
				}")`,
				ice: `url("${
					process.env.NODE_ENV === "development"
						? "/bg-ice2v2.jpg"
						: "/portfolio/bg-ice2v2.jpg"
				}")`,
				circles: `url("${
					process.env.NODE_ENV === "development"
						? "/bg-circles.png"
						: "/portfolio/bg-circles.png"
				}")`,
				circleStar: `url("${
					process.env.NODE_ENV === "development"
						? "/circle-star.svg"
						: "/portfolio/circle-star.svg"
				}")`,
				site: `url("${
					process.env.NODE_ENV === "development"
						? "/cl-2.svg"
						: "/portfolio/cl-2.svg"
				}")`,
			},
			animation: {
				"spin-slow": "spin 6s linear infinite",
			},
			fontFamily: {
				poppins: [`var(--font-poppins)`, "sans-serif"],
				sora: [`var(--font-sora)`, "sans-serif"],
			},
		},
	},
	container: {
		padding: {
			DEFAULT: "15px",
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
