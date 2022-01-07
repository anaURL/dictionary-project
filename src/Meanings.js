import React from "react";
import Synonyms from "./Synonyms"

export default function Meanings (props) {
    return (
        <div className="Meaning"> 
        <h3> {props.meaning.partOfSpeech} </h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}> 
                <div className=" definition"> {definition.definition}</div> 
                <br/>
                <div className=" definition">  Example: </div>
                <em> {definition.example} </em>
                <br/>
                 <Synonyms synonyms={definition.synonyms}/>
                </div> 
            )
        }) }
        </div>
    );


}