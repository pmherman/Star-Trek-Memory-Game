import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className = "navbar navbar-default navbar-fixed-top">
        <div className = "container">
            <ul className="nav nav-pills nav-justified">
                <li>Star Trek: The Clicky Game</li>
                <li>Click any image to begin</li>
                <li>Current Score <span class="score">{ props.currentScore }</span> | High Score: { props.highScore }</li>
            </ul>
        </div>
    </nav>
);

export default Navbar;