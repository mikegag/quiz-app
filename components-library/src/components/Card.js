import React, { useState } from "react";

export default function Card(props) {
  const [clicked, setClicked] = useState(false)
  const [styleMode, setStyleMode] = useState({
    background: props.lightMode ? "#FFF" : "#36454F",
    color: props.lightMode ? "#000" : "#FFF",
    animation: ""
  })

  const cardRevealAnimation = `
    @keyframes cardReveal {
      from { height: 100%; }
      to { height: 11%; 
        
      }
    }
  `

  const cardHideAnimation = `
    @keyframes cardHide {
      from { height: 11%; }
      to { height: 100%; }
    }
  `

  function toggleCard() {
    console.log("toggle func ran")
      setStyleMode(prevStyleMode => ({
        ...prevStyleMode,
        animation: !clicked? "cardReveal 1s forwards" : "cardHide 1s forwards",
        overflow: "hidden"
      }))
    setClicked(prevClicked => !prevClicked)
  }

  return (
    <div className="card" style={{...styleMode, animationName: clicked ? "cardReveal" : ""}} onClick={toggleCard}>
      <style>{clicked ? cardHideAnimation : cardRevealAnimation}</style>
      {props.icon ? 
        props.icon
      : 
        <i className="fa fa-folder-open" style={{ color: props.iconColor ? props.iconColor : "#3F75FE" }}></i>
      }
      <h3>{props.title ? props.title : "Discover More"}</h3>
      <p>
        {props.description
          ? props.description
          : "Start your design journey today with Designo! We are the leading provider in Market Consulting"}
      </p>
    </div>
  )
}


