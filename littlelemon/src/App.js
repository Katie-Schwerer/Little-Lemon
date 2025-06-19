import './App.css';
import Nav from './Components/Nav';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookPage';
import ConfirmedBooking from './Components/ConfirmedBooking';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
