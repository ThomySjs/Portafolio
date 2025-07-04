import './References.css'
import texts from '../../data/texts'
import { motion } from 'motion/react'

function References() {
    return (
        <div className="references-container">
            <div className="header-container">
                <h2>Bibliografias</h2>
            </div>
            <div className="items-container">
                {texts.map((text) =>
                    <motion.div
                        className="reference"
                        whileHover={{ scale: 1.1, backgroundColor: "#6247AA" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href={text.bibliography} target="_blank">
                            <h3>{text.author}</h3>
                            <h4>{text.title}</h4>
                        </a>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default References