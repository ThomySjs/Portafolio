import "./Summary.css"
import { HiArrowCircleLeft } from "react-icons/hi";
import { motion } from "motion/react";
import geniallyImage from '/assets/genially.svg';


function Modal({visible, title, summary, image, genially, onClick}) {
    if (!visible) return null

    const showMore = () => {
        const text = document.getElementById("summary-text");
        text.style.maxHeight = text.scrollHeight + "px";
        changeButtonDisplay();
    }

    const showLess = () => {
        const text = document.getElementById("summary-text");
        text.style.maxHeight = "420px";
        changeButtonDisplay();
    }

    const changeButtonDisplay = () => {
        const showMoreButton = document.getElementById("show-more-button");
        const showLessButton = document.getElementById("show-less-button");
        if (showMoreButton.style.display !== "none") {
            showMoreButton.style.display = "none";
            showLessButton.style.display = "inline-block";
        } else {
            showMoreButton.style.display = "inline-block";
            showLessButton.style.display = "none";
        }
    }

    return (
        <div className="summary-container">
            <motion.a
                className="back-button"
                onClick={onClick}
                whileHover={ { scale: 1.1 } }
                whileTap={ { scale: 0.9 } }
            >
                <HiArrowCircleLeft size={48} color="#fff0fe"/>
            </motion.a>
            <div className="summary-content">
                <h2>{title}</h2>
                <p id="summary-text">{summary}</p>
                <div className="show-buttons-container">
                    <button onClick={showMore} id="show-more-button" className="show-button">Ver mas</button>
                    <button onClick={showLess} id="show-less-button" className="show-button">Ver menos</button>
                </div>
                <motion.div
                    className="genially-button-container"
                    whileHover={{ scale: 1.1 }}
                    whileTap={ { scale: .9 }}
                >
                    <a href={genially} target="_blank" className="genially-a"><img src={geniallyImage}/>Ver genially</a>
                </motion.div>
            </div>
            <div className="summary-image">
                <img src={image}></img>
            </div>
        </div>
    )
}

export default Modal