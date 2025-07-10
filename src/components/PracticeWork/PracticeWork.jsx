import './PracticeWork.css'
import { practiceWorks } from '../../data/practiceWorks'
import { units } from '../../data/practiceWorks'
import { useState } from 'react'
import { motion } from 'motion/react'
import studying from '/assets/studying.svg'

function PracticeWork() {
    const [selectedUnit, setSelectedUnit] = useState("Módulo 1")

    const selectWorks = (e) => {
        setSelectedUnit(e.target.value)
    }

    return (
        <div className="practice-work-container" id="Trabajos prácticos">
            <h2 className="section-header">Trabajos prácticos</h2>
            <div className="pw">
                <div className="pw-image-container">
                    <img src={studying} alt="Imagen trabajos practicos" />
                </div>
                <div className="pw-content">
                    <div className="unit-selection-container">
                        <select onChange={selectWorks} className="unit-selection">
                            {units.map((unit) => (
                                <option key={unit} value={unit}>
                                    {unit}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="tp-container">
                        {practiceWorks
                            .filter(practiceWork => practiceWork.unit === selectedUnit)
                            .map(practiceWork => (
                                    <motion.a
                                        className="tp"
                                        whileHover={{scale:1.1}}
                                        href={practiceWork.link}
                                    >
                                        <h3>{practiceWork.title}</h3>
                                    </motion.a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeWork