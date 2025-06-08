import React from 'react';
import '../Style/Testimony.css';
import Testimonial from './Testimonial.js';

function Testimony() {
    return (
        <section className="testimony">
            <h2>Testimonial</h2>
            <article className="testimonials">
                <Testimonial image="https://i.pravatar.cc/150?img=60" name="John Doe" text="Little Lemon is the best restaurant I've ever been to! The food is amazing and the service is top-notch."/>
                <Testimonial image="https://i.pravatar.cc/150?img=36" name="Jane Smith" text="I love the atmosphere at Little Lemon. It's cozy and welcoming, and the food is always delicious." />
                <Testimonial image="https://i.pravatar.cc/150?img=38" name="Alice Johnson" text="Little Lemon has quickly become my favorite spot for lunch. The menu is diverse and everything I've tried has been fantastic." />
                <Testimonial image="https://i.pravatar.cc/150?img=59" name="Bob Brown" text="I can't recommend Little Lemon enough! The staff is friendly, the food is fresh, and the prices are reasonable." />
            </article>
        </section>
    );
}

export default Testimony;