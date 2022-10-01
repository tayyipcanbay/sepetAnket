import React from "react";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function Results(props){
    const [answers, setAnswers] = useState([]);
    console.log(answers);
    useEffect(() => {
        const answers=JSON.parse(localStorage.getItem('answers'));
        if(answers){
            setAnswers(answers);
        }
    },[])
    return(
        <div>
            Result Sayfası
            {console.log(answers)}
        </div>
    )
}
export default Results;