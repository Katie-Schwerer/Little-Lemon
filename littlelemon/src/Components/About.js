import React from 'react';
import '../Style/About.css';
import mario from '../Media/mario.jpg';
import adrian from '../Media/Adrian.jpg';

function About() {
    return (
        <section className="about">
            <article className='text-container'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a family-owned restaurant that has been serving delicious food since 1995. Our mission is to provide a warm and welcoming atmosphere where families and friends can come together to enjoy great food and each other's company. We take pride in using fresh, locally sourced ingredients to create our dishes. Our menu features a variety of options, from classic comfort food to modern culinary creations, ensuring there's something for everyone. At Little Lemon, we believe in the power of food to bring people together.</p>
            </article>
            <article className='image-container'>
                <img src={adrian} alt="mario and adrian 1" className="img1" />
                <img src={mario} alt="adrian and mario" className='img2' />
            </article>
        </section>
    );
}

export default About;