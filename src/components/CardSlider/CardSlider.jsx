import "./CardSlider.css"
import Card from "../Card/Card"
import texts from "../../data/texts"
import { motion } from "motion/react"
import { useState } from "react"
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";



function CardSlider({visible, onCardClick, cardIndex}) {
    if (!visible) return null

    const cards = texts.map(text => {
        return <Card
            title={text.title}
            image={text.image}
            onCardClick={() => onCardClick(text.title, text.summary, text.image, text.genially, middleCard)}
        />
    })
    const [middleCard, setMiddleCard] = useState(cardIndex)
    const leftCard = (middleCard == 0)? cards.length - 1 : middleCard - 1
    const rightCard = (middleCard == cards.length - 1)? 0 : middleCard + 1
    const toLeft = () => {
        if (middleCard > 0)
            setMiddleCard(middleCard - 1)
        else {
            setMiddleCard(cards.length - 1)
        }
    }

    const toRight = () => {
        if (middleCard < cards.length - 1)
            setMiddleCard(middleCard + 1)
        else {
            setMiddleCard(0)
        }
    }
    return (
        <div className="card-slider" id="Resúmenes">
            <div className="section-title">
                <h2>Resúmenes</h2>
            </div>
            <div className="slider-container">
                <div className="left">
                    {cards[leftCard]}
                </div>
                <div className="mid">
                    {cards[middleCard]}
                </div>
                <div className="right">
                    {cards[rightCard]}
                </div>
            </div>
            <div className="slider-dots">
                {cards.map((_,index) => (
                    <div className={`dot ${index===middleCard?'active':'passive'}`}></div>
                ))}
            </div>
            <div className="slider-buttons">
                <motion.a
                    onClick={toLeft}
                    className="slider-arrows"
                    whileHover={ { scale: 1.05 } }
                    whileTap={ { scale: .90 } }
                >
                    <SlArrowLeftCircle size={56} color="#fff0fe"/>
                </motion.a>
                <motion.a
                    onClick={toRight}
                    className="slider-arrows"
                    whileHover={ { scale: 1.05 } }
                    whileTap={ { scale: .90 } }
                >
                    <SlArrowRightCircle size={56} color="#fff0fe"/>
                </motion.a>
            </div>
        </div>
    )
}

export default CardSlider