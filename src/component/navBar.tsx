import "../App.css";
import { useState } from "react";

function Navbar() {
	const [profileTooltipActive, setProfileTooltipActive] = useState(false);
	const [navActive, setNavActive] = useState(false);

	const [contentItems, setContentItems] = useState([
		{
			title: "Latest Research",
			active: true,
		},
	]);

	const toggleProfileTooltip = () => {
		setProfileTooltipActive(!profileTooltipActive);
	};

	const toggleNav = () => {
		setNavActive(!navActive);
	};

	const closeNav = () => {
		setNavActive(false);
	};

	const handleContentClick = (index: number) => {
		setContentItems((prevItems) =>
			prevItems.map((item, i) => ({
				...item,
				active: i === index,
			}))
		);
	};

	const addContentItem = () => {
		setContentItems((prevItems) => [
			...prevItems,
			{ title: "New Content", active: false },
		]);
	};

	const removeContentItem = (index: number) => {
		setContentItems((prevItems) => prevItems.filter((_, i) => i !== index));
	};

	return (
		<>
			<nav className={navActive ? "active" : ""}>
				<div className="option">
					<div className="new-chat" onClick={addContentItem}>
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
						<p>New Chat</p>
					</div>
					<div className="toggle-nav" onClick={toggleNav}>
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="3"
								y="3"
								width="18"
								height="18"
								rx="2"
								ry="2"
							></rect>
							<line x1="9" y1="3" x2="9" y2="21"></line>
						</svg>
					</div>
				</div>
				<div className="history">
					<p>Today</p>
					{contentItems.map((item, index) => (
						<div
							key={index}
							className={`content ${
								item.active ? "selected" : ""
							}`}
							onClick={() => handleContentClick(index)}
						>
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="2"
								viewBox="0 0 24 24"
								strokeLinecap="round"
								strokeLinejoin="round"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
							</svg>
							<h4>{item.title}</h4>
							{item.active && (
								<div className="icon-active">
									<svg
										stroke="currentColor"
										fill="none"
										stroke-width="2"
										viewBox="0 0 24 24"
										stroke-linecap="round"
										stroke-linejoin="round"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12 20h9"></path>
										<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
									</svg>
									<svg
										className="content-icon trashbin"
										stroke="currentColor"
										fill="none"
										strokeWidth="2"
										viewBox="0 0 24 24"
										strokeLinecap="round"
										strokeLinejoin="round"
										xmlns="http://www.w3.org/2000/svg"
										onClick={() => removeContentItem(index)}
									>
										<polyline points="3 6 5 6 21 6"></polyline>
										<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
										<line
											x1="10"
											y1="11"
											x2="10"
											y2="17"
										></line>
										<line
											x1="14"
											y1="11"
											x2="14"
											y2="17"
										></line>
									</svg>
								</div>
							)}
						</div>
					))}
				</div>
				<div className="profile" onClick={toggleProfileTooltip}>
					<div className="pfp"></div>
					<div className="id">alto</div>
					<div className="edit">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="1"></circle>
							<circle cx="19" cy="12" r="1"></circle>
							<circle cx="5" cy="12" r="1"></circle>
						</svg>
					</div>
				</div>
			</nav>
			<div className={`tooltip ${profileTooltipActive ? "active" : ""}`}>
				<div className="profile-tooltip">
					<div className="plan">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
						<h3>My plan</h3>
					</div>
					<div className="custom">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21.44 15.707a2 2 0 0 1-2 2h-12l-4 4v-16a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
							></path>
							<path
								fill="currentColor"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.7"
								d="M7.825 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM12.5 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM17.175 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Z"
							></path>
						</svg>
						<h3>Custom instructions</h3>
					</div>
					<div className="settings">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="3"></circle>
							<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
						</svg>
						<h3>Settings et beta</h3>
					</div>
					<div className="logout">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
							<polyline points="16 17 21 12 16 7"></polyline>
							<line x1="21" y1="12" x2="9" y2="12"></line>
						</svg>
						<h3>Log out</h3>
					</div>
				</div>
			</div>
			{navActive && (
				<div className="show-nav" onClick={closeNav}>
					<svg
						stroke="currentColor"
						fill="none"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="3"
							y="3"
							width="18"
							height="18"
							rx="2"
							ry="2"
						></rect>
						<line x1="9" y1="3" x2="9" y2="21"></line>
					</svg>
				</div>
			)}
		</>
	);
}

export default Navbar;
