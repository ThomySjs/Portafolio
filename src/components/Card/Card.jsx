import "./Card.css"

function Card({title, image, onCardClick}) {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={image} alt={title} className="card-img" />
            </div>
            <div className="card-title-container">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-button-container">
                <button className="summary-button" onClick={onCardClick}>Ver resumen</button>
            </div>
        </div>
    )
}

export default Card