import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tours from "./components/tours/Tours";

import data from "./data/db.json";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home DATA={data} />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Tours' element={<Tours />} />
        <Route path='/city/:id' element={<TourDetails DATA={data} />} />
        <Footer />
      </Routes>

    </div>
  );
}

export default App;