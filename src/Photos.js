import React from "react";
import "./Photos.css";

export default function Photos(props){
    if (props.photos) {
        console.log(props.photos)
return(
    <section className="Photos">
        <div className="row">
        {props.photos.map(function(photo,index){
            return ( 
                <div className="col-4" key={index}>
                    <a href={photo.src.original} tagert="_blank" rel="noreferrer">
                    <img src={photo.src.landcaspe} alt="" className="img-fluid"/>
                    </a>
                </div>);
        })}
        </div>
    </section>
)
} else{
    return null;
}}