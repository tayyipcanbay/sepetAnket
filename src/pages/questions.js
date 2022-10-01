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
              
    const [questions, setQuestions] = React.useState([questionList]);
    const [answers, setAnswers] = React.useState([]);
      const updateAnswers=()=>{
        let answers=[];
        questionList.map((question)=>{
            let answer=document.querySelector(`input[name="${question.id}"]:checked`).value;
            answers.push(answer);
            console.log(answers);
            
            
        })
        console.log(answers);
    }
    useEffect(() => {
        localStorage.setItem('answers',JSON.stringify(answers),[answers]);
    })
      const renderQuestions=questionList.map((question)=>{
        return (
            <div  id={question.id}>
                <h3>{question.title}</h3>
                <ul>
                    {question.options.map((option)=>{
                        return <li>
                            <input type="radio" name={question.id} value={option} onChange={updateAnswers} />{option}
                        </li>
                    })
                }
                </ul>
            </div>
        )
    })
    return(
        <div>
            <h1>Questions</h1>
            {renderQuestions}
            <Link to={{pathname:"/results"}} state={answers}>
                Go to Results
            </Link>
        </div>
    )
}
export default Questions;