import React from "react"

export default function Footer(props){
    //holds state of when a new game needs to be started or selected answers need to be checked
    const [checkResult, setCheckResult] = React.useState(false)
    //checks current user selections and starts a new game
    const handleUpdateDisplay = () => {
        props.updateDisplay() 
        setCheckResult(!checkResult)
    }

    return (
        <div className="footer-container">
            {checkResult ? 
                (   <h4 className="footer-title">
                        You Scored {props.results}/4 Correct Answers!
                    </h4>
                ) 
            : 
                ( <h4>...</h4>)
            }
            <div>
                <button 
                    className="default-style-btn" 
                    onClick={handleUpdateDisplay}
                    aria-label={`${checkResult ? "initiates a new game" : "Checks current answers and determines score"}`}
                >
                    {checkResult ? "Play Again?" : "Check Answers"}
                </button>
                {checkResult ?
                    <button 
                        className="default-style-btn" 
                        style={{'marginLeft':'1em'}}
                        onClick={props.toggle}
                    >
                        Home
                    </button>
                :
                    <></>
                }
            </div>
        </div>
    )
}