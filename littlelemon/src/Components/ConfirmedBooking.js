import React from 'react';
import '../Style/ConfirmedBooking.css';
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
    const navigate = useNavigate();
    return (
        <section className="confirmed-booking" aria-live="polite">
            <h1>Booking Confirmed</h1>
            <p>Your table has been successfully booked!</p>
            <p>We look forward to welcoming you to Little Lemon.</p>
            <button onClick={() => navigate("/")}>Back to Main</button>
        </section>
    );
}

export default ConfirmedBooking;