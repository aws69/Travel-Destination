import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import TourDetails from './components/TourDetails/TourDetails';

import data from "./data/db.json";



function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Home DATA={data} />} />
        <Route path='/city/:id' element={<TourDetails DATA={data} />} />
        <Route path='/footer' element={ <Footer />} />
      </Routes>

    </div>
  );
}

export default App;