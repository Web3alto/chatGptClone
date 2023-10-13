import "../App.css";
import { useState } from "react";

function helpButton() {
	const [helpTooltipActive, setHelpTooltipActive] = useState(false);

	const toggleHelpTooltip = () => {
		setHelpTooltipActive(!helpTooltipActive);
	};

	return (
		<div
			className={`tooltip ${helpTooltipActive ? "active" : ""}`}
			onClick={toggleHelpTooltip}
		>
			<div className="help">
				<img
					src="/assets/point-dinterrogation.png"
					alt="point-dinterrogation"
				/>
				<div className="help-tooltip">
					<div className="faq">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
							<polyline points="15 3 21 3 21 9"></polyline>
							<line x1="10" y1="14" x2="21" y2="3"></line>
						</svg>
						<h3>Help & FAQ</h3>
					</div>
					<div className="shortcut">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect x="3" y="3" width="7" height="7"></rect>
							<rect x="14" y="3" width="7" height="7"></rect>
							<rect x="14" y="14" width="7" height="7"></rect>
							<rect x="3" y="14" width="7" height="7"></rect>
						</svg>
						<h3>Keyboard shortcuts</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default helpButton;
