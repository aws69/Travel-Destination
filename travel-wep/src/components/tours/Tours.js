import React from "react";

import db from "../../data/db.json";
import "./Tours.css";

function Tours (){
    return(
        <div>
            {db.map((item)=>(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img
                        src={item.image}
                        alt={item.image}
                        style={{width: "50%",height: "auto", }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Tours;