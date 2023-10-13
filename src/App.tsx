import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./component/navBar";
import HelpButton from "./component/helpButton";

function App() {
	const [navActive, setNavActive] = useState(false);
	const [activeContentIndex, setActiveContentIndex] = useState<number | null>(
		null
	);
	const [contentItems, setContentItems] = useState([
		{
			title: "Latest Research",
			active: true, // Set the first item as active by default
		},
	]);
	const [inputText, setInputText] = useState(""); // State to store the input text
	const [chatText, setChatText] = useState(""); // State to store chat text

	useEffect(() => {
		// Set the initial active content index when the component mounts
		setActiveContentIndex(0);
	}, []);

	const closeNav = () => {
		setNavActive(false);
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		// Update the input text state
		setInputText(event.target.value);
	};

	const handleSubmit = () => {
		if (inputText.trim() !== "") {
			setChatText(inputText); // Set chat text to the entered text
			setInputText(""); // Clear the input text
		}
	};

	// Handle Enter key press to submit
	const handleKeyPress = (
		event: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault(); // Prevent newline character
			handleSubmit();
		}
	};

	const [text, setText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		const originalText =
			"Can you provide me with a list of 8 interview questions that a tech recruiter can use to evaluate candidates for technical roles.";

		if (currentIndex < originalText.length) {
			setTimeout(() => {
				setText(originalText.substring(0, currentIndex + 1));
				setCurrentIndex(currentIndex + 1);
			}, 35);
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
							<div className="answer">
								<h2>
									<span>
										Important Notice: App Functionality
										Limited Due to Cost Constraints
									</span>
									<br />
									<br />
									We want to inform our valued users that the
									current version of our app does not connect
									to a real API. We understand that this
									limitation may impact your experience, and
									we apologize for any inconvenience caused.
									<br />
									<br />
									The reason behind this decision is primarily
									due to cost considerations. Integrating with
									a real API can incur significant expenses,
									and as a result, we have opted for a
									simulated data environment to keep our app
									accessible to as many users as possible
									without compromising its quality.
									<br />
									<br />
									We appreciate your understanding and
									continued support as we work towards
									enhancing the functionality of our app. If
									you have any questions or concerns, please
									don't hesitate to reach out to our customer
									support team.
									<br />
									<br />
									Thank you for your interest in my work!
								</h2>
							</div>
						</div>
						<div className="text-input">
							<textarea
								id="prompt-textarea"
								data-id="root"
								rows={1}
								placeholder="Send a message"
								value={inputText}
								onChange={handleInputChange}
								onKeyPress={handleKeyPress}
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
