import React from "react";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Questions() {
    const questionList=[
        {
          id:1,
          title:"What is the capital of India?",
          answer:"New Delhi",
            options:["New Delhi","Mumbai","Kolkata","Chennai"]
        },
        {
          id:2,
          title:"What is the capital of Australia?",
          answer:"Canberra",
            options:["Canberra","Sydney","Melbourne","Perth"]
        },
        {
          id:3,
          title:"What is the capital of USA?",
          answer:"Washington DC",
            options:["Washington DC","New York","Los Angeles","Chicago"]
        }
      ]
      const renderQuestions=questionList.map((question)=>{
        return (
            <div id={question.id}>
                <h3>{question.title}</h3>
                <ul>
                    {question.options.map((option)=>{
                        return <li>
                            <input type="radio" name={question.id} value={option} />{option}
                        </li>
                    })
                }
                </ul>
            </div>
        )
    })
    const updateAnswers=()=>{
        let answers=[];
        questionList.map((question)=>{
            let answer=document.querySelector(`input[name="${question.id}"]:checked`).value;
            answers.push(answer);
        })
        console.log(answers);
    }
        
    const [questions, setQuestions] = React.useState([questionList]);
    const [answers, setAnswers] = React.useState([]);
    return(
        <div>
            <h1>Questions</h1>
            {renderQuestions}
            <Link to={{pathname:"/results"}} answers={answers}>
                <button onClick={updateAnswers}>Submit</button>
            </Link>
        </div>
    )
}
export default Questions;