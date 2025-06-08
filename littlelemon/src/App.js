import './App.css';
import Nav from './Components/Nav';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import BookingPage from './BookPage';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
