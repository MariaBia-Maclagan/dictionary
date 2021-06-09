import React, {useState} from "react";

export default function Search(){
    const[keyWord, setKeyWord] = useState (null);

    function handleSearch(event){
    event.preventDefault();
    alert(
        `Searching for ${keyWord} definition`
    );
}
    function handleChange(event){
     setKeyWord (event.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit ={handleSearch}>
<input type="search" onChange={handleChange}/>
            </form>
        </div>
    );
}