import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
const navbar = (
	<nav>
		<h1>Kush Corp</h1>
		<ul>
			<li>Menu</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
)
root.render(navbar)
