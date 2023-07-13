import React from "react";

import "../header/Header.css";
import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <div>
            <div className="title">
                <h1>This is Header</h1>
            </div>
            <div><Navbar /></div>
        </div>
    );
};

export default Header;