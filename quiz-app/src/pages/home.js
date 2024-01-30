import React from "react"

export default function HomePage(props){
    return (
        <div className="homePage-container"> 
            <h1>Quizzical</h1>
            <h2>A Random Quiz Game.</h2>
            <button className="default-style-btn" onClick={props.toggle}>Let's Play!</button>
        </div>
    )
}