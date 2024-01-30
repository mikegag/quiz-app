import React from "react"

export default function Blobs(props){
    const styles = {
        height: props.hasGameStarted? "2em" : "13em",
        transition: "1s",
        opacity: props.hasGameStarted? "0%" : "100%"
    }

    return (
        <div className="blob-container"> 
            <img src={require(`../images/${props.color}-blob.png`)} alt={`${props.color} blob present in background`} 
                style={styles} className={`${props.color}-blob`}/>
        </div>
    )
}