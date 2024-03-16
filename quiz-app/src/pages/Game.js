import React from "react"
import Footer from "../components/Footer"
import Question from "../components/Question"

export default function GamePage(){
    const[questions, setQuestions] = React.useState([])
    const[answers, setAnswers] = React.useState([])
    const[correctAnswers, setCorrectAnswers] = React.useState([])
    const[readyForResults, setReadyForResults] = React.useState(false)
    const[reload, setReload] = React.useState(false)
    const[userScore, setUserScore] = React.useState(0)
    const[isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        let controller = new AbortController()

        async function fetchData() {
            try {
                const response = await fetch("https://the-trivia-api.com/v2/questions?limit=4&difficulties=easy,medium",
                    { signal: controller.signal })
                if (!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const data = await response.json()

                let questionList = []
                let answerList = []
                let correctAnswerList = []

                for (let i = 0; i < data.length; i++) {
                    questionList.push(data[i].question.text)
                    answerList.push(data[i].incorrectAnswers)
                    correctAnswerList.push(data[i].correctAnswer)
                    answerList[i].splice((Math.random() * data.length), 0, data[i].correctAnswer)
                }

                setQuestions(questionList)
                setAnswers(answerList)
                setCorrectAnswers(correctAnswerList)
                setTimeout(() => {
                    setIsMounted(true)
                }, 500) 
                
            } catch (error) {
                console.error("Error fetching data:", error)
                setIsMounted(false)
            }
        }

        fetchData();

        return () => {
            if (controller) {
                controller.abort()
            }
        }
    }, [reload])

    const updateDisplay = () => {
        setReadyForResults(prev=> !prev )
        if(readyForResults) {
            setReload(prev=>!prev) 
        }
    }

    const updateUserScore = () => {
        setUserScore(prev => Math.min(prev + 1, 4))
        console.log("+")
    }
    
    const resetUserScore =() => {
        setUserScore(0)
    }

    const decrementUserScore = () => {
        setUserScore(prev => Math.max(prev - 1, 0));
        console.log("-")
    };
  
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
                        decrementUserScore={decrementUserScore}
                    />
                )) 
            : 
                <h3 className="question-title error-msg">loading questions...</h3>
            }
            {isMounted ? <Footer updateDisplay={updateDisplay} results={userScore} /> : <></> }
        </div>
    )
}