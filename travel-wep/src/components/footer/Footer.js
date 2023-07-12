import React from "react";
import "./footer.css";

function Footer(props) {
    return (
        <div className='foot'>
            <h1>Follow us on social media:</h1>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
            <p>Author: Aws Alomari</p>
        </div>
    );
}

export default Footer;