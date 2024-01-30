import React, { useEffect, useState } from "react"

// export default function Question(props){
//     const [selectedOptions, setSelectedOptions] = useState([])
//     const [optionsToVerify, setOptionsToVerify]  = useState([])
//     const [clearOptions, setClearOptions] = useState(false)
//     const correctAnswer = props.correctOption

//     const handleOptionClick = (choice, index) => {
//         setSelectedOptions(prevSelectedOptions => {
//             // Deselect the option if it's already selected; Select the option if it's not already selected
//             if (prevSelectedOptions.includes(index)) {
//                 return prevSelectedOptions.filter(item => item !== index) 
//             } 
//             else {
//                 return [...prevSelectedOptions, index]
//             }
//         })

//         setOptionsToVerify(prevOptionsToVerify => {
//             // Deselect the option if it's already selected; Select the option if it's not already selected
//             if (prevOptionsToVerify.includes(choice)) {
//                 return prevOptionsToVerify.filter(item => item !== choice)
//             } 
//             else {
//                 return [...prevOptionsToVerify, choice]
//             } 
//         })
//         //checks if current user selection is correct and updates their score
//         if(correctAnswer.includes(choice)) {
//             handleUpdateUserScore()
//         }
//     }

//     // Callback function passed from Game, updates current user score
//     const handleUpdateUserScore = () => { 
//         props.updateUserScore()
//     }

//     // Callback function passed from Game, resets current user score
//     const handleResetUserScore = ()=> {
//         props.resetUserScore()
//     }
    
//     // Clears previous selection storage when user wants to play again
//     useEffect(()=> {
//         setClearOptions(!clearOptions)

//         if(!clearOptions) {
//             setOptionsToVerify([])
//             setSelectedOptions([])
//             handleResetUserScore()
//         }
//     },[props.updateDisplay])


//     return (
//         <div className="question-container"> 
//             <h3 className="question-title">{props.mainQuestion}</h3>

//             {props.answerOptions.map((current,index)=>{
//                 const defaultStyle = {background: selectedOptions.includes(index) ? "#D6DBF5" : "#F5F7FB"}
                
//                 const checkAnswerStyle = {
//                     background: 
//                     // Does selected choice match available answers? 
//                     correctAnswer.includes(optionsToVerify[0]) ?
//                         // Correct choice was made, this choice = green; all other choices = default color
//                         (selectedOptions.includes(index) ? "#94D7A2" : "#F5F7FB") 
//                         : // Incorrect choice was made, color = red
//                         (selectedOptions.includes(index) ? 
//                             "#F8BCBC" 
//                             : // Does unselected choice match available answers?
//                             (correctAnswer.includes(current) ? 
//                                 // This unselected choice was the correct answer; color = light green
//                                 "#EDFCF1" 
//                                 : 
//                                 "#F5F7FB") 
//                         )
//                 }
         
//                 return (
//                     <button key ={index} className="answer-option-btn" 
//                         onClick ={() => handleOptionClick(current, index)} 
//                         style={props.updateDisplay? checkAnswerStyle : defaultStyle}> {current} 
//                     </button>
//                 )
//             })}
//         </div>
//     )
// }



export default function Question(props) {
    const [selectedOptions, setSelectedOptions] = useState([])
    const correctAnswer = props.correctOption

    const handleOptionClick = (choice, index) => {
        // Deselect the option if it's already selected; Select the option if it's not already selected
        const updatedSelectedOptions = selectedOptions.includes(index)
            ? selectedOptions.filter(item => item !== index)
            : [...selectedOptions, index]

        setSelectedOptions(updatedSelectedOptions)

        // Check if current user selection is correct and update their score
        if (correctAnswer.includes(choice)) {
            props.updateUserScore()
        }
    };

    // Clears previously selected answers when the user wants to play again
    useEffect(() => {
        if (!props.updateDisplay) {
            setSelectedOptions([])
            props.resetUserScore()
        }
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
                );
            })}
        </div>
    );
}


