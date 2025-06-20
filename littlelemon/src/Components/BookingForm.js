import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../Style/BookForm.css';

function BookingForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        alert(`Booking confirmed for ${data.guests} guests on ${data.date} for a ${data.occasion} occasion.`);
        navigate('/confirmed');
    }

    return (
        <article className="booking-form">
            <h1>Book a Table</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    {...register("date", { required: "Date is required" })}
                />
                {errors.date && <span style={{color: "red"}}>{errors.date.message}</span>}

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    {...register("time", { required: "Time is required" })}
                >
                    <option value="">Select a time</option>
                    {(props.availableTimes || []).map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                {errors.time && <span style={{color: "red"}}>{errors.time.message}</span>}

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    {...register("guests", {
                        required: "Number of guests is required",
                        min: { value: 1, message: "At least 1 guest" },
                        max: { value: 10, message: "No more than 10 guests" }
                    })}
                />
                {errors.guests && <span style={{color: "red"}}>{errors.guests.message}</span>}

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    {...register("occasion", { required: "Occasion is required" })}
                >
                    <option value="" disabled>Select an occasion</option>
                    <option value="none">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                {errors.occasion && <span style={{color: "red"}}>{errors.occasion.message}</span>}

                <input type="submit" value="Make Your reservation" />
            </form>
        </article>
    )
}

export default BookingForm;