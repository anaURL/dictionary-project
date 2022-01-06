import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary () { 
    const [word,setWord] = useState("");
    const [load,setLoaded]=useState(false);

    function displayWord (response) {
        setLoaded (true);
        setWord({ })
    }

    function search (event) {
        event.preventDefault();
        
         }

    function handleWordChange (event) {
        setWord(event.target.value);
    }

let form = ( 
    <div className="Dictionary"> 
 <form onSubmit={search}> 
    <label> 
        Search for a word <input type="search" className="search" autoFocus={true}
        onChange={handleWordChange}/> 
    </label>
        <input type="submit" value="Submit"/>
</form>
</div> );

if (loaded) { 
return (  
    <div> 
        {form}
    </div>
    );
} else {
    return null;
}
}


