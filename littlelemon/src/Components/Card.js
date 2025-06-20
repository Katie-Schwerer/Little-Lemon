import React from 'react';
import '../Style/Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <div className="card-content">
                <h3>{props.title}</h3>
                <p className="price">${props.price}</p>
            </div>
            <p className='description'>{props.description}</p>
            <a className="order" href="/">Order a delivery</a>
        </div>
    )
}

export default Card;