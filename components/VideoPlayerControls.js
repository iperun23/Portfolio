import PlayButton from "../public/play.svg";
import PauseButton from "../public/pause.svg";

const VideoPlayerControlProps = {
	isPaused: false,
	onPlayPause: () => {
		// Your play/pause logic here
	},
	size: undefined,
	width: undefined,
};

function VideoPlayerControls(props) {
	const { isPaused, onPlayPause, size = 48, width = 3 } = props;

	const center = size / 2;
	const radius = center - width;

	const dashArray = 2 * Math.PI * radius;

	return (
		<div className="relative flex justify-center items-center">
			<svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
				<circle
					cx={center}
					cy={center}
					r={radius}
					fill="transparent"
					stroke="#aaaaaa"
					strokeWidth={width}
				/>
				<circle
					cx={center}
					cy={center}
					r={radius}
					fill="transparent"
					stroke="#000000"
					strokeWidth={width}
					strokeDasharray={dashArray}
					strokeLinecap="round"
				/>
			</svg>
			<div className="absolute">
				<button
					className="group cursor-pointer flex justify-center items-center"
					onClick={onPlayPause}
				>
					<div className="fill-white group-hover:fill-[##ffffff] transition-colors duration-200 ease-in-out">
						{isPaused ? (
							<PlayButton
								className="group-hover:fill-[##ffffff]"
								style={{ fill: "black" }}
							/>
						) : (
							<PauseButton
								className="group-hover:fill-[##ffffff]"
								style={{ fill: "black" }}
							/>
						)}
					</div>
				</button>
			</div>
		</div>
	);
}

export default VideoPlayerControls;
