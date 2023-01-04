// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

const root = document.getElementById('root')
const h1 = document.createElement('h1')
h1.textContent = 'Title'
h1.classList.add('header')

root.append(h1)
