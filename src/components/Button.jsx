import "./Button.css"

import React from "react";
 export default function Button({title,onClick}){
    return (
        <div>
            <button className="btn"
             onClick={onClick}>
                {title}
            </button>
        </div>
    )
 }