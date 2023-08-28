import "./App.css";

function App() {
	return (
		<>
			<div className="container">
				<nav>
					<div className="option">
						<div className="new-chat">
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
						<div className="toggle-nav">
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
					<div className="history"></div>
					<div className="profile">
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
				<div className="main">
					<div className="top">
						<div className="title">
							<h2>ChatGPT</h2>
							<span>plus</span>
						</div>
					</div>
					<div className="bottom">
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
								stroke-width="2"
							>
								<path
									d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div className="help">
						<img
							src="/assets/point-dinterrogation.png"
							alt="point-dinterrogation"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
