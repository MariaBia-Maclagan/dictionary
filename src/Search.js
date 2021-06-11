import axios from "axios";
import React, {useState} from "react";
import Results from "./Results"

export default function Search(){
    const[keyWord, setKeyWord] = useState (null);
    const[results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleSearch(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;

    axios.get(apiUrl).then(handleResponse);
}
    function handleChange(event){
     setKeyWord (event.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit ={handleSearch}>
<input type="search" onChange={handleChange}/>
            </form>
            <Results results={results}/>
        </div>
    );
}