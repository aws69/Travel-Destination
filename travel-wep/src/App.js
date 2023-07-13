import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import TourDetails from './components/TourDetails/TourDetails';

import data from "./data/db.json";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home DATA={data} />} />
        <Route path='/city/:id' element={<TourDetails DATA={data} />} />
        <Footer />
      </Routes>

    </div>
  );
}

export default App;