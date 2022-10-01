import React from "react";
import {useEffect, useState} from "react";

function Results(props){
    return(
        <div>
            Results Page
            {props.answers.map((answer)=>{
                console.log("Result page"+answer);
            })}
        </div>
    )
}
export default Results;