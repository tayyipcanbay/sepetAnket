import React from "react";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function Results(props){
    const location= useLocation();
    const answers = props.location.answers;
    console.log("Results sayfasındaki cevaplar"+answers);
    return(
        <div>
            Results Page
            {answers.map((answer)=>{
                console.log("Result page"+answer);
            })}
        </div>
    )
}
export default Results;