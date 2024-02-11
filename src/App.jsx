import { useEffect, useState } from "react";
import "./App.css";
import { DisplayChoice } from "./components/DisplayChoice";
import { HandShake } from "./components/HandShake";
import { PlayerChoices } from "./components/PlayerChoices";
import { ScoreBoard } from "./components/ScoreBoard";
import { IoFlameSharp } from "react-icons/io5";

function App() {
	const [playerChoice, setPlayerChoice] = useState("");
	const [computerChoice, setComputerChoice] = useState("");
	const [displayShake, setDisplayShake] = useState(false);
	const [openDisplay, setOpenDisplay] = useState(false);

	const choices = ["rock", "paper", "scissor"];

	const onChangeComputerChoice = () => {
		const random = Math.floor(Math.random() * choices.length);
		setComputerChoice(choices[random]);
		setOpenDisplay(true);
		// setTimeout(() => {
		// 	setDisplayShake(false);
		// }, 2550);
	};

	const onChangePlayerChoice = (value) => {
		onChangeComputerChoice(value);
		setPlayerChoice(value);
		setDisplayShake(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setPlayerChoice("");
			setComputerChoice("");
			setOpenDisplay(false);
		}, 6500);
	}, [onChangePlayerChoice, onChangeComputerChoice]);

	return (
		<>
			<div className="bg-gradient-to-r from-violet-200 to-pink-200 h-screen">
				<div className="flex items-center justify-center h-screen">
					<div className="pt-10">
						<h1 className="text-2xl md:text-5xl font-bold text-white text-center">
							Welcome to RockPaperScissor Shoot!
						</h1>
						{openDisplay ? (
							<div className="pt-10">
								<DisplayChoice
									playerChoice={playerChoice}
									computerChoice={computerChoice}
								/>
							</div>
						) : (
							""
						)}
						<div className="text-center pt-5">
							<ScoreBoard
								playerChoice={playerChoice}
								computerChoice={computerChoice}
							/>
						</div>
						{/* <div>{displayShake ? <HandShake /> : ""}</div> */}
						<div className="text-center pt-10 space-y-5">
							<h1 className="text-xl text-white font-medium">Enter your Choice</h1>
							<PlayerChoices
								onChangePlayerChoice={(value) => onChangePlayerChoice(value)}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
