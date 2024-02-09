import { useEffect, useState } from "react";

export const DisplayChoice = ({ playerChoice, computerChoice }) => {
	const [showChoices, setShowChoices] = useState();

	const player = () => {
		switch (playerChoice) {
			case "rock":
				return "/choice/rock.gif";
			case "paper":
				return "/choice/paper.gif";
			case "scissor":
				return "/choice/scissor.gif";
		}
	};

	const computer = () => {
		switch (computerChoice) {
			case "rock":
				return "/choice/rock.gif";
			case "paper":
				return "/choice/paper.gif";
			case "scissor":
				return "/choice/scissor.gif";
		}
	};

	return (
		<>
			<div className="flex items-center justify-center gap-2">
				<div className="w-[300px] h-[200px] bg-white shadow-sm rounded">
					<img src={player()} alt="" />
				</div>
				<div>
					<h1 className="text-7xl text-white font-bold">vs</h1>
				</div>
				<div className="w-[300px] h-[200px] bg-white shadow-sm rounded">
					<img src={computer()} alt="" className="scale-x-[-1]" />
				</div>
			</div>
		</>
	);
};
