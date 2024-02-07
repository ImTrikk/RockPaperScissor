import { useEffect, useState } from "react";

export const DisplayChoice = ({ playerChoice, computerChoice }) => {
	const [showChoices, setShowChoices] = useState();

	const player = () => {
		setTimeout(() => {
			switch (playerChoice) {
				case "rock":
					return "/choice/rock.gif";
				case "paper":
					return "/choice/rock.gif";
				case "scissor":
					return "/choice/scissor.gif";
			}
		}, 3000);
	};

	const computer = () => {
		setTimeout(() => {
			switch (computerChoice) {
				case "rock":
					return "/choice/rock.gif";
				case "paper":
					return "/choice/rock.gif";
				case "scissor":
					return "/choice/scissor.gif";
			}
		}, 3000);
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
					<img src={computer()} alt="" />
				</div>
			</div>
		</>
	);
};
