import { Toaster, toast } from "sonner";

import { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import { ResultModal } from "./ResultModal";

export const ScoreBoard = ({ playerChoice, computerChoice }) => {
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

	const [openResultModal, setOpenResultModal] = useState(false);

	const onChangeClose = (value) => {
		if (value) {
			setOpenResultModal(false);
			window.location.reload();
		}
	};

	const checkScore = () => {
		setTimeout(() => {
			if (playerChoice == "rock" && computerChoice == "rock") {
				toast.info("It's a Tie!");
			} else if (playerChoice == "rock" && computerChoice == "paper") {
				setComputerScore((prevComputerScore) => prevComputerScore + 1);
			} else if (playerChoice == "rock" && computerChoice == "scissor") {
				setPlayerScore((prevPlayerScore) => prevPlayerScore + 1);
			}
			if (playerChoice == "paper" && computerChoice == "rock") {
				setPlayerScore((prevPlayerScore) => prevPlayerScore + 1);
			} else if (playerChoice == "paper" && computerChoice == "paper") {
				toast.info("It's a Tie!");
			} else if (playerChoice == "paper" && computerChoice == "scissor") {
				setComputerScore((prevComputerScore) => prevComputerScore + 1);
			}
			if (playerChoice == "scissor" && computerChoice == "rock") {
				setComputerScore((prevComputerScore) => prevComputerScore + 1);
			} else if (playerChoice == "scissor" && computerChoice == "paper") {
				setPlayerScore((prevPlayerScore) => prevPlayerScore + 1);
			} else if (playerChoice == "scissor" && computerChoice == "scissor") {
				toast.info("It's a Tie!");
			}
		}, 4000);
	};

	useEffect(() => {
		checkScore();
	}, [playerChoice, computerChoice]);

	useEffect(() => {
		if (playerScore == 3) {
			toast.success("Congratulations you win!");
			setOpenResultModal(true);
		} else if (computerScore == 3) {
			toast.error("You lose, Computer wins");
			setOpenResultModal(true);
		}
	});

	return (
		<>
			<Toaster position="top-center" />
			{openResultModal ? (
				<ResultModal
					playerScore={playerScore}
					onChangeClose={(value) => onChangeClose(value)}
				/>
			) : (
				""
			)}
			<div className="pt-5">
				<div className="flex items-center justify-center gap-2 md:gap-10">
					<div className="text-white border border-green-500 bg-green-400 p-4 rounded flex flex-col items-start gap-1 justify-center px-4 text-lg">
						<IoPerson size={40} />
						<h1>Player score: {playerScore}</h1>
					</div>
					<div>
						<h1 className="text-4xl font-bold text-white">VS</h1>
					</div>
					<div className="text-white border border-blue-600 bg-blue-500 p-4 rounded flex flex-col items-start gap-1 justify-center px-4 text-lg">
						<RiRobot2Fill size={40} />
						<h1>Computer score: {computerScore}</h1>
					</div>
				</div>
			</div>
		</>
	);
};
