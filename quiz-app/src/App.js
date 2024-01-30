import React from "react"
import HomePage from "./pages/home"
import GamePage from "./pages/Game"
import Blobs from "./components/Blobs"


export default function App(){

    const[userReady, setUserReady] = React.useState(false)

    function startGame() {
        setUserReady(prev => !prev)
    }


    return (
        <main className="container"> 
            <Blobs hasGameStarted ={userReady} color ={"yellow"}/>
            {userReady? <GamePage /> : <HomePage toggle ={startGame} />}
            <Blobs hasGameStarted ={userReady} color ={"blue"}/>
        </main>
        
    )
}