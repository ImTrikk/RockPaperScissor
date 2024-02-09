import { useEffect, useState } from "react";

export const PlayerChoices = ({ onChangePlayerChoice }) => {
	const [isRockDisabled, setRockDisabled] = useState(false);
	const [isPaperDisabled, setPaperDisabled] = useState(false);
	const [isScissorDisabled, setScissorDisabled] = useState(false);

	const disableBlocks = () => {
		setRockDisabled(true);
		setPaperDisabled(true);
		setScissorDisabled(true);
		setTimeout(() => {
			setRockDisabled(false);
			setPaperDisabled(false);
			setScissorDisabled(false);
		}, 4000);
	};

	const rock = () => {
		onChangePlayerChoice("rock");
		disableBlocks();
	};

	const paper = () => {
		onChangePlayerChoice("paper");
		disableBlocks();
	};

	const scissor = () => {
		onChangePlayerChoice("scissor");
		disableBlocks();
	};

	return (
		<>
			<div className="flex gap-2 items-center justify-center">
				<button
					className={`bg-white rounded w-[100px] h-[100px] shadow hover:-translate-y-5 transform transition-transform ease-in-out duration-300 flex items-center justify-center text-5xl cursor-pointer ${
						isRockDisabled ? "opacity-50 pointer-events-none" : ""
					}`}
					onClick={rock}
					disabled={isRockDisabled}>
					👊
				</button>
				<button
					className={`bg-white rounded w-[100px] h-[100px] shadow hover:-translate-y-5 transform transition-transform ease-in-out duration-300 flex items-center justify-center text-5xl cursor-pointer ${
						isPaperDisabled ? "opacity-50 pointer-events-none" : ""
					}`}
					onClick={paper}
					disabled={isPaperDisabled}>
					✋
				</button>
				<button
					className={`bg-white rounded w-[100px] h-[100px] shadow hover:-translate-y-5 transform transition-transform ease-in-out duration-300 flex items-center justify-center text-5xl cursor-pointer ${
						isScissorDisabled ? "opacity-50 pointer-events-none" : ""
					}`}
					onClick={isScissorDisabled}
					disabled={isScissorDisabled}>
					✌️
				</button>
			</div>
		</>
	);
};
