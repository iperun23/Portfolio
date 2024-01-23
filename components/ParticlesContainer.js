import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async () => {}, []);

	return (
		<Particles
			className="w-full h-full absolute translate-z-0"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: { enabled: false },
				background: {
					color: {
						value: "",
					},
				},
				fps_limit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 200,
							duration: 2,
							opacity: 0,
							size: 0,
							speed: 3,
						},
						repulse: {
							distance: 300,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#f13024",
					},
					move: {
						direction: "top-right",
						enable: true,
						outModes: {
							default: "out",
						},
						random: true,
						speed: 20.5,
					},
					number: {
						density: {
							enable: true,
							area: 1000,
						},
						value: 600,
					},
					opacity: {
						animation: {
							enable: true,
							speed: 5,
						},
						value: { min: 0.3, max: 0.6 },
					},
					shape: {
						type: "circle",
					},
					size: {
						value: 1.5,
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesContainer;
