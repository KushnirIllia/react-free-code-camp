import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
const page = (
	<div>
		<header>
			<nav>
				<h1>Kush Corp</h1>
				<ul>
					<li>Menu</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
		<main>
			<p>Main content</p>
		</main>
		<footer>all is copyright</footer>
	</div>
)
root.render(page)
