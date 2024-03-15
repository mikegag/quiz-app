import React, { useEffect, useState, useRef } from "react"

export default function Question(props) {
    const [selectedOptions, setSelectedOptions] = useState([])
    const [previouslySelectedOptions, setPreviouslySelectedOptions] = useState(false)
    let firstLoad = useRef(true)
    const correctAnswer = props.correctOption
    
    
    const handleOptionClick = (choice, index) => {
        const isOptionSelected = selectedOptions.includes(index)
        const isCorrectSelection = correctAnswer.includes(choice)
        let updatedSelectedOptions
    
        if (isOptionSelected) {
            updatedSelectedOptions = selectedOptions.filter(item => item !== index);
           
            if(isCorrectSelection) {
                setPreviouslySelectedOptions(true); 
            }
        } 
        else {
            updatedSelectedOptions = [...selectedOptions, index]

            // Update the user score based on the selection
            if (isCorrectSelection ) {
                props.updateUserScore() 
                setPreviouslySelectedOptions(false)
            } else if (!isCorrectSelection && previouslySelectedOptions) {
                // Decrement score if correct answer is deselected for an incorrect one
                props.decrementUserScore()
                setPreviouslySelectedOptions(false)
            }
        }
        setSelectedOptions(updatedSelectedOptions) 
    }
    
    // Clears previously selected answers when the user wants to play again
    useEffect(() => {
        if (!props.updateDisplay && !firstLoad.current) {
            setSelectedOptions([])
            props.resetUserScore()
            setPreviouslySelectedOptions(false)
        }
        else { firstLoad.current = false}
    }, [props.updateDisplay]) 
   

    return (
        <div className="question-container"> 
            <h3 className="question-title">{props.mainQuestion}</h3>

            {props.answerOptions.map((current, index) => {
                const isSelected = selectedOptions.includes(index)
                const isCorrect = correctAnswer.includes(current)
                const defaultStyle = { background: isSelected ? "#D6DBF5" : "#F5F7FB" }
                const checkAnswerStyle = {
                    background: correctAnswer.includes(props.answerOptions[selectedOptions[0]])
                        // Correct choice was made; current choice = bright green, rest = default color
                        ? (isSelected ? "#94D7A2" : "#F5F7FB")
                        // Incorrect choice was made; current choice = red, 
                        : (isSelected ? "#F8BCBC" : 
                            // if unselected choice was correct; current choice = light green, rest = default color
                            (isCorrect ? "#EDFCF1" : "#F5F7FB"))
                }

                return (
                    <button
                        key={index}
                        className="answer-option-btn"
                        onClick={() => handleOptionClick(current, index)}
                        style={props.updateDisplay ? checkAnswerStyle : defaultStyle}
                    >
                        {current}
                    </button>
                )
            })}
        </div>
    )
}


