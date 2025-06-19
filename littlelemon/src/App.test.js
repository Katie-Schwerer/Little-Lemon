import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';
import { updateTimes, initializeTimes } from './BookPage'; // Assuming updateTimes is exported from BookPage.js

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
})

test('Testing updateTimes function', () => {
  expect(updateTimes([], {})).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Testing initializeTimes function', () => {
  expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});