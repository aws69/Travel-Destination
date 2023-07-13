import React from "react";
import "../home/Home.css";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";


function Home(props) {

    return (
        <div>
            <Header />
            <Tours DATA1={props.DATA} />
            <Footer />

        </div>
    );
}

export default Home;