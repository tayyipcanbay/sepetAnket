import React from "react";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function Results(props){
    const location = useLocation();
    const answers = location.answers;
    console.log(answers);
    return(
        <div>
            Result Sayfası
        </div>
    )
}
export default Results;