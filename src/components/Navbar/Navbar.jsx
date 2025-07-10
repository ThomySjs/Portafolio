import './Navbar.css'
import { SlMenu } from "react-icons/sl";

function Navbar() {
    const showNavbarLinks = () => {
        const container = document.getElementById("navbar-links");
        container.classList.toggle("show");
    }

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <h3>Melany F</h3>
            </div>
            <div className="links-container">
                <div className="navbar-button-container">
                    <a onClick={showNavbarLinks} className="navbar-button"><SlMenu /></a>
                </div>
                <div className="navbar-links" id="navbar-links">
                    <a href="#Inicio" className="navbar-link">Inicio</a>
                    <a href="#Resúmenes" className="navbar-link">Resúmenes</a>
                    <a href="#Trabajos prácticos" className="navbar-link">Trabajos prácticos</a>
                    <a href="#Bibliografia" className="navbar-link">Bibliografia</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar