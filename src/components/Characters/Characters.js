import React from "react";
import "./Characters.css"

const Characters = props => (
    <div>
        <a onClick={() => props.selectPhoto(props.character)} className = { props.currentScore === 0 } >
            <img class="thumbnail" alt={ props.character } src={ props.photo } />
        </a>
    </div>
)

export default Characters;