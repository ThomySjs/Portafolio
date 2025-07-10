import './Navbar.css'
import { SlMenu } from "react-icons/sl";
import { useRef, useEffect } from 'react';

function Navbar() {
    const showNavbarLinks = () => {
        const container = document.getElementById("navbar-links");
        container.classList.toggle("show");
    }
    const lastScrollTop = useRef(0);
    const navbarRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop.current) {
                navbarRef.current.classList.add("navbar-hidden")
            } else {
                navbarRef.current.classList.remove("navbar-hidden");
            }
            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className="navbar-container" ref={navbarRef}>
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