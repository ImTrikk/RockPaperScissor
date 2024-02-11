import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";

export const ResultModal = ({ playerScore, onChangeClose }) => {
	//implement win lose logic

	const [playerWin, setPlayerWin] = useState(false);
	const jsConfetti = new JSConfetti();

	const handleClose = () => {
		onChangeClose(true);
	};

	useEffect(() => {
		if (playerScore == 3) {
			setPlayerWin(true);
			jsConfetti.addConfetti();
		} else {
			setPlayerWin(false);
		}
	}, []);

	return (
		<>
			<div
				className={`fixed z-40 md:top-0 left-0 w-full h-screen flex items-center backdrop-filter backdrop-blur-sm justify-center overflow-y-scroll`}>
				<div className="w-[500px] bg-white rounded p-5">
					<h1 className="text-green-500 text-2xl">Results</h1>
					<div className="pt-10">
						{playerWin ? (
							<div className="flex flex-col items-center">
								<img src="/images/win.jpg" alt="" className="w-[250px] rounded-lg" />
								<h1 className="pt-3 text-2xl text-center text-green-400">
									Congratulations, you beat the computer in rock, paper, scissors!
								</h1>
							</div>
						) : (
							<div className="flex flex-col items-center">
								<img src="/images/lose.jpg" alt="" className="w-[250px] rounded-lg" />
								<h1 className="pt-3 text-2xl text-center text-red-400">
									You lost, better luck next time.
								</h1>
							</div>
						)}
					</div>
					<div className="pt-5">
						<button
							onClick={handleClose}
							className="px-4 h-10 text-sm text-white bg-green-400 rounded ">
							Close
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
