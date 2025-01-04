import React, { useState } from 'react';  // Import useState hook
import './style.css';  // Import the CSS file
import Hamburger from 'hamburger-react';

export default function NavBar() {
    const [isOpen, setOpen] = useState(false);


    return (
        <div className="Nav-back">
            <p>Welcome to ParsePro</p>
            

           
        </div>
    );
}
