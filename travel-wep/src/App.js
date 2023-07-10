import logo from './logo.svg';
import './App.css';


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tours from "./components/tours/Tours";

import data from "./data/db.json";


function App() {
  return (
    <div>
      <Header />

      <Tours data={data} />

      <Footer />

    </div>
  );
}

export default App;
