import React from 'react';
import '../Style/Testimonial.css';

function Testimonial(props) {
    return (
        <div className="testionial-card">
            <img src={props.image} alt={props.name} className="testimonial-image" />
            <div className="text">
                <h3 className="testimonial-name">{props.name}</h3>
                <p className="testimonial-text">{props.text}</p>
                <p className="testimonial-rating" aria-label={`Rating: 5 out of 5`}>Rating: <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
            </div>
        </div>
    )
}

export default Testimonial;