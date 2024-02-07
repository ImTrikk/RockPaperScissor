export const PlayerChoices = ({ onChangePlayerChoice }) => {
	const rock = () => {
		onChangePlayerChoice("rock");
	};

	const paper = () => {
		onChangePlayerChoice("paper");
	};

	const scissor = () => {
		onChangePlayerChoice("scissor");
	};

	return (
		<>
			<div className="flex gap-2 items-center justify-center">
				<div
					className="bg-white rounded w-[100px] h-[100px] shadow hover:-translate-y-5 transform transition-transform ease-in-out duration-300 flex items-center justify-center text-5xl cursor-pointer"
					onClick={rock}>
					👊
				</div>
				<div
					className="bg-white rounded w-[100px] h-[100px] shadow hover:-translate-y-5 transform transition-transform ease-in-out duration-300 flex items-center justify-center text-5xl cursor-pointer"
					onClick={paper}>
					✋
				</div>
				<div
					className="bg-white rounded w-[100px] h-[100px] shadow hover:-translate-y-5 transform transition-transform ease-in-out duration-300 flex items-center justify-center text-5xl cursor-pointer"
					onClick={scissor}>
					✌️
				</div>
			</div>
		</>
	);
};
