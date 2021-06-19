import axios from "axios";
import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search(props){
    const[keyWord, setKeyWord] = useState (props.defaultKeyWord);
    const[results, setResults] = useState(null);
    const [loaded, setLoaded] =useState(false);
    const[photos, setPhotos] =useState(null);

function handlePexels (response){
    setPhotos (response.data.photos);
}

    function handleResponse(response){
        setResults(response.data[0]);
    }
    function Search (){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
        axios.get(apiUrl).then(handleResponse);

        let apiKeyPexels = `563492ad6f91700001000001addac54c34fd4d02bb849da638fc7ce0`;
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=1`;
        axios.get(pexelsUrl, {headers:{"Authorization" : `Bearer ${apiKeyPexels}`},}).then(handlePexels);
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
            <section>
            <form onSubmit ={handleSearch}>
                <h2>What word are you looking for?</h2>
<input type="search" onChange={handleChange} defaultValue="Enter word"/>
<p className="hint">Suggested words: joy, happiness, sunrise...</p>
            </form>
            </section>
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>
    );
}else{
    load();
    return "Loading..."
}}