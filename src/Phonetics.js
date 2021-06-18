import React from "react";
import "./Phonetics.css"

export default function Phonetics(props){
    const audio = new Audio(props.phonetics.audio);

    function handlePlay (){
        audio.play()
    }
    if (props.phonetics){
    return (
        <div className="Phonetics">
            <button type="button" className="AudioButton" onClick={handlePlay}>
            <i className="fas fa-play-circle"></i>
            </button>
        <span className="Text">{props.phonetics.text}</span>
        </div>
    );
} else {
    return null;
}
}