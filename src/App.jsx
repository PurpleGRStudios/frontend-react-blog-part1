import './App.css'
import logoMedium from './assets/logo-medium.png'
import { Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Overview from "./pages/Overview/Overview.jsx";
import NewPost from "./pages/NewPost/NewPost.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";




function App() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="main-navigation outer-content-container">
                <div className="inner-nav-container">
                    <button className="main-navigation-logo-button" onClick={navigate}>
                        <img src={logoMedium} alt="Company logo"/>
                    </button>
                    <ul className="main-navigation-links">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/overview">Alle posts</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "default-link"} to="/"> Overview </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/newpost" element={<NewPost />} />
                    <Route path="/test" element={<ErrorPage />} />
                </Routes>
            </main>
        </>

    )
}

export default App
