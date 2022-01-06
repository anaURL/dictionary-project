import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary () { 
    const [word,setWord] = useState("");
    const [loaded,setLoaded]=useState(false);

    function displayWord (response) {
        setLoaded (true);
        setWord({ 
            word: response.data.word,
            phonetic: response.data.phonetic,
            pronounce: response.data.phonetics[1].audio,
            meaning: response.data.meanings[0].partOfSpeach,
            definition: response.data.meanings.definitions[0],

        })
    }
    function search (event) {
        event.preventDefault();
        // documentation: https://dictionaryapi.dev/
         let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
         axios.get(url).then(displayWord);
        }

    function handleWordChange (event) {
        setWord(event.target.value);
    }

let form = ( 
         <div className="Dictionary"> 
            <form onSubmit={search}> 
                 <label> 
         <input type="search" className="search" autoFocus={true}
        onChange={handleWordChange}/> 
                </label>
         <input type="submit" value="Search"/>
            </form>
        </div> );

if (loaded) { 
        return (  
    <div> 
        {form}
        <ul className="results"> 
            <li>Word: {word.Word} </li>
            <li>Phonetic: {word.Phonetic} </li>
            <li>Meaning: {word.Meaning} </li>
            
        </ul>
    </div>
    );
}   else {
    return form;
}
}


