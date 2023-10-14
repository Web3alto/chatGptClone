import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./component/navBar";
import HelpButton from "./component/helpButton";
import TypeAnswer from "./component/typeAnswer";

function App() {
	const [navActive] = useState(false);
	const [, setActiveContentIndex] = useState<number | null>(null);
	const [text, setText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		setActiveContentIndex(0);
	}, []);



	useEffect(() => {
		const originalText =
			"Can you provide me with a list of 8 interview questions that a tech recruiter can use to evaluate candidates for technical roles.";

		if (currentIndex < originalText.length) {
			setTimeout(() => {
				setText(originalText.substring(0, currentIndex + 1));
				setCurrentIndex(currentIndex + 1);
			}, 5);
		} else {
			setIsTyping(false);
		}
	}, [currentIndex]);

	return (
		<>
			<div className="container">
				<Navbar />
				<div className={`main ${navActive ? "active" : ""}`}>
					<div className="top">
						<div className="title">
							<h2>ChatGPT</h2>
							<span>plus</span>
						</div>
					</div>
					<div className="bottom">
						<div className="chat-content">
							<div className="content">
								<h2>
									{text}
									{isTyping && <span>|</span>}
								</h2>
							</div>
						</div>
						<div className="chat-answer">
							<TypeAnswer />
						</div>
						<div className="text-input">
							<textarea
								id="prompt-textarea"
								data-id="root"
								rows={1}
								placeholder="Send a message"
							></textarea>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="none"
								strokeWidth="2"
							>
								<path
									d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
				</div>
				<HelpButton />
			</div>
		</>
	);
}

export default App;
