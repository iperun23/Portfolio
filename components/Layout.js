import { Sora } from "next/font/google";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import { useTheme } from "./ThemeContext";
import { BsSun, BsSnow } from "react-icons/bs";

const sora = Sora({
	subsets: ["latin"],
	variable: "--font-sora",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div
			className={`${
				theme === "red" ? "bg-site" : "bg-ice"
			} page  text-white bg-cover bg-no-repeat ${
				sora.variable
			} font-sora relative`}
		>
			<div className="flex lg:justify-end absolute justify-center z-10 w-full right-[3%] top-[5%]">
				<button
					className={`${
						theme === "red"
							? "lg:bg-blue-200 bg-blue-600 text-black"
							: "lg:bg-red-400 bg-red-600 text-black"
					} flex items-center gap-2 px-4 py-2  rounded-md  dark:bg-gray-800`}
					onClick={toggleTheme}
				>
					{theme === "red" ? <BsSnow /> : <BsSun />}
					{theme === "red" ? "Switch to Snow Theme" : "Switch to Flame Theme"}
				</button>
			</div>

			<TopLeftImg />
			<Nav />

			{children}
		</div>
	);
};

export default Layout;
