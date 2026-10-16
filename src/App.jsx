import './App.css'
import logo from './assets/logo-white.png'
import Home from './pages/Home/Home.jsx'
import NewPost from './pages/New/NewPost.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'

function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
        </div>
    )
}

export default App
