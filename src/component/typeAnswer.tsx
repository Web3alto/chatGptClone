import { useState, useEffect } from "react";

interface TypewriterEffectProps {
	text: string;
}

function TypewriterEffect({ text }: TypewriterEffectProps) {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			if (currentIndex <= text.length) {
				setDisplayedText(text.substring(0, currentIndex));
				setCurrentIndex(currentIndex + 1);
			} else {
				clearInterval(typingInterval); // Stop the typewriter effect when done
			}
		}, 5); // Adjust the speed (in milliseconds) of typing here

		return () => {
			clearInterval(typingInterval);
		};
	}, [currentIndex, text]);

	return <h2 dangerouslySetInnerHTML={{ __html: displayedText }} />;
}

function TypeAnswer() {
	// Set the initial text as a single string with HTML elements
	const initialText = `
    <span>
      Important Notice: App Functionality Limited Due to Cost Constraints
    </span>
    <br />
    <br />
    We want to inform our valued users that the current version of our app does not connect to a real API. We understand that this limitation may impact your experience, and we apologize for any inconvenience caused.
    <br />
    <br />
    The reason behind this decision is primarily due to cost considerations. Integrating with a real API can incur significant expenses, and as a result, we have opted for a simulated data environment to keep our app accessible to as many users as possible without compromising its quality.
    <br />
    <br />
    We appreciate your understanding and continued support as we work towards enhancing the functionality of our app. If you have any questions or concerns, please don't hesitate to reach out to our customer support team.
    <br />
    <br />
    Thank you for your interest in my work!
  `;

	const [showTypewriter, setShowTypewriter] = useState(false);

	useEffect(() => {
		const delayTimeout = setTimeout(() => {
			setShowTypewriter(true);
		}, 3000);

		return () => {
			clearTimeout(delayTimeout);
		};
	}, []);

	return (
		<div>
			{showTypewriter && (
				<div className="answer">
					<TypewriterEffect text={initialText} />
				</div>
			)}
		</div>
	);
}

export default TypeAnswer;
