import './App.css';
import NAVBAR from './components/NAVBAR';
import Home from './components/Home';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NAVBAR />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;