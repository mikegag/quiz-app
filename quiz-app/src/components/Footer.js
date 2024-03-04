import React from "react"

export default function Footer(props){
    const [checkResult, setCheckResult] = React.useState(false)

    const handleUpdateDisplay = () => {
        props.updateDisplay() 
        setCheckResult(!checkResult)
    }

    return (
        <div className="footer-container">
            {checkResult ? 
                ( <h4 className="footer-title">You Scored {props.results}/4 Correct Answers!</h4>) 
            : 
                ( <h4>...</h4>)
            }
            <button className="default-style-btn" onClick={handleUpdateDisplay}>
                {checkResult ? "Play Again?" : "Check Answers"}
            </button>
        </div>
    )
}