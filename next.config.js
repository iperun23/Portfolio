/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	basePath: "/portfolio",
	assetPrefix: "/portfolio/",
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }],
		});
		return config;
	},
	async exportPathMap() {
		return {
			"/": { page: "/" },
			"/contact": { page: "/contact" },
			"/luxeseasons": { page: "/luxeseasons" },
			"/tempusunlimited": { page: "/tempusunlimited" },
		};
	},
};

module.exports = nextConfig;
