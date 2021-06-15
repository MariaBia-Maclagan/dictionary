import axios from "axios";
import React, {useState} from "react";
import Results from "./Results";
import "./Search.css";

export default function Search(props){
    const[keyWord, setKeyWord] = useState (props.defaultKeyWord);
    const[results, setResults] = useState(null);
    const [loaded, setLoaded] =useState(false)

    function handleResponse(response){
        setResults(response.data[0]);
    }
    function Search (){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSearch(event){
    event.preventDefault();
    Search();
}
    function handleChange(event){
     setKeyWord (event.target.value);
    }
function load (){
    setLoaded(true);
    Search();
}
if(loaded){
    return (
        <div className="Search">
            <form onSubmit ={handleSearch}>
<input type="search" onChange={handleChange} defaultValue={props.defaultKeyWord}/>
            </form>
            <Results results={results}/>
        </div>
    );
}else{
    load();
    return "Loading..."
}}