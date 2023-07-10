import React from "react";
import ".//Home.css";
import Header from "./header/Header";
import Tours from "./tours/Tours";
import Footer from "./footer/Footer";

function Home(){
    return(
        <div>
            <Header />
            <Tours data={data} />
            <Footer />
        </div>
    );
};

export default Home;