import React from "react";
import hero from "../Media/restauranfood.jpg"; // Adjust the path as necessary
import "../Style/Main.css"; // Assuming you have a CSS file for styling
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    return (
        <main>
            <div className="hero">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned business Mediterranean resturant, focused on traditional recipes with a modern twist.</p>
                <button onClick={() => navigate("/booking")}>Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src={hero} alt="Chef make a some brushretta" />
            </div>
        </main>
    )
}

export default Main;