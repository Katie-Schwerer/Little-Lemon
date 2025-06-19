import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../Style/BookForm.css';


function BookingForm(props) {
    const [date, setDate] = useState(Date.now);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const {handleSubmit} = useForm();
    const navigate = useNavigate();

    const handleDateChange = (event) => {
        const selectedTime = event.target.value;
        // Update the available times based on the selected date
        props.dispatch({ type: 'UPDATE_TIMES', data: selectedTime });
    };

    const onSubmit = (data) => {
        alert(`Booking confirmed for ${guests} guests on ${date} for a ${occasion} occasion.`);
        navigate('/confirmed');
    }

    return (
        <article className="booking-form">
            <h1>Book a Table</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={handleDateChange}>
                    {(props.availableTimes || []).map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option value="">Select an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </article>
    )
}

export default BookingForm;