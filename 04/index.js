// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const App = (
// 	<div>
// 		<h1>This is JSX</h1>
// 	</div>
// )


const navbar = (
	<nav>
		<h1>Kush Corp</h1>
		<ul>
			<li>Pricing</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
)
ReactDOM.render(navbar, document.getElementById("root"))