import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary () { 
    const [word,setWord] = useState("");
    const [results,setResults]=useState(null);

    function handleResponse (response) {
        setResults (response.data[0]);
    }
         
    function search (event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/
         let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
         axios.get(url).then(handleResponse);
        }

    function handleWordChange (event) {
        setWord(event.target.value);
    }

        return ( 
            <div className="Dictionary"> 
            <section> 
            <form onSubmit={search}>
         <input type="search" className="search" autoFocus={true} onChange={handleWordChange}/> 
         <input type="submit" className="submit" value="Search"/>
            </form>
            </section>
            <Results results={results}/>
            </div> 
             );

}



