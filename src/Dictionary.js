import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary (props) { 
    let [word,setWord] = useState(props.defaultKeyword);
    let [results,setResults]=useState(null);
    let [loaded,setLoaded]= useState(false);


    function handleResponse (response) {
        setResults (response.data[0]);
    }

    function search () {
        // documentation: https://dictionaryapi.dev/
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(url).then(handleResponse);
    }
         
    function handleSubmit (event) {
        event.preventDefault();
        search();
        }

    function handleWordChange (event) {
        setWord(event.target.value);
    }

    function load () {
        setLoaded(true);
        search()
    }

    if (loaded) { 
        return ( 
            <div className="Dictionary"> 
            <section> 
            <form onSubmit={handleSubmit}>
         <input type="search" className="search" autoFocus={true} onChange={handleWordChange}/> 
         <input type="submit" className="submit" value="Search"/>
            </form>
           
            </section>
            <Results results={results}/>
            </div> 
             );

} else {
    load(); 
    return "Loading";
}
}



