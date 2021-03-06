import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props){
    //console.log (props.results)
    if (props.results) { 
    return (<div className ="Results">
        <section>
        <h4>
    {props.results.word}</h4>
   {props.results.phonetics.map (function (phonetics, index){
        return(
            <div key={index}>
                <Phonetics phonetics={phonetics}/>
                </div>
        );
    })}
    </section>
    {props.results.meanings.map (function (meaning,index){
        return(
            <section key={index}>
                <Meaning meaning={meaning}/>
                </section>
        );
    })}
    </div>
        );
} else {
    return null;
}
}