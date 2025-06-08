import React from 'react';
import '../Style/Header.css';
import bruchetta from '../Media/bruchetta.svg'
import greeksalad from '../Media/greeksalad.jpg'
import lemondessert from '../Media/lemondessert.jpg'
import Card from './Card';

function Header() {
    return (
        <section className="header">
            <header>
                <h2>This weeks specials!!</h2>
                <button>Online Menu</button>
            </header>
            <div className="cards">
                <Card title="Bruchretta" description="Our bruchetta is made with fresh grilled bread spread with garlic and season olive oil." price="5.99" image={bruchetta} />
                <Card title='Greek Salad' description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons." price="12.99" image={greeksalad} />
                <Card title="Lemon Dessert" description="This comes straight from grandma's recipe book, every last ingredients has been sourced and is as authentic as can be imagined" price="5.00" image={lemondessert} />
            </div>
        </section>
    );
}

export default Header;