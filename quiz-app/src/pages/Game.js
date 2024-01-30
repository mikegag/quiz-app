import React, { useRef, useState } from "react"
import Footer from "../components/Footer"
import Question from "../components/Question"

export default function GamePage(){
    const[questions, setQuestions] = React.useState([])
    const[answers, setAnswers] = React.useState([])
    const[correctAnswers, setCorrectAnswers] = React.useState([])
    const[readyForResults, setReadyForResults] = React.useState(false)
    const[reload, setReload] = React.useState(false)
    const[userScore, setUserScore] = React.useState(0)
    const isMounted = useRef(false)


    React.useEffect(() => { 
        async function fetchData() {
            const response = await fetch("https://the-trivia-api.com/v2/questions?limit=4&difficulties=easy,medium")
            const data = await response.json()

            let questionList = []
            let answerList = []
            let correctAnswerList = []

            for(let i=0; i < data.length; i++) {
                questionList.push(data[i].question.text)
                answerList.push(data[i].incorrectAnswers)
                correctAnswerList.push(data[i].correctAnswer)
                answerList[i].splice((Math.random()*data.length),0,data[i].correctAnswer)
            }

            setQuestions(questionList)
            setAnswers(answerList)
            setCorrectAnswers(correctAnswerList)
        }
        return () => {
            fetchData()
            isMounted.current=true
        }
    }, [reload])
    
    // Reloads component (makes new api call for questions) when "play again" button is clicked
    const updateDisplay = () => {
        setReadyForResults(prev=> !prev )
        if(readyForResults) {setReload(prev=>!prev)}
    }

    // Updates the # of correct answers selected by user
    const updateUserScore =() => {
        setUserScore(prev=>prev+1)
        console.log("update func ran")
    }

    // Clears user score
    const resetUserScore =() => {
        setUserScore(0)
        console.log("reset func ran")
    }
  
  
    return (
        <div className="gamePage-container"> 
            {isMounted ? 
                questions.map((current, index) => (
                    <Question 
                        key={index} 
                        mainQuestion={current} 
                        answerOptions={answers[index]} 
                        correctOption={correctAnswers} 
                        updateDisplay={readyForResults}
                        updateUserScore={updateUserScore}
                        resetUserScore={resetUserScore}
                    />
                )) 
            : 
                null
            }
            {isMounted ? <Footer updateDisplay={updateDisplay} results={userScore}/> : <></> }
        </div>
    )
}