import React, { useReducer } from "react";
import './Style/BookPage.css';
import BookForm from './Components/BookingForm';
import Footer from './Components/Footer';

function updateTimes(state, action) {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function BookPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    // The userReducer is used to manage the state of available times.
    return (
        <div className="book-page-container">
            <main className="book-page">
                <BookForm availableTimes={availableTimes} dispatch={dispatch} />
            </main>
            <Footer />
        </div>
    )
}

export default BookPage;
export { updateTimes, initializeTimes }; // Exporting functions for testing purposes