import React from 'react';

const TapMath = () => {


    return (
        <div className = 'tapmath-container'>
        <div className = 'app'>
            <h1> TapMath </h1>
        <div className="container">
            <div className="question">
                <p className="question-box">
                    50+20
                </p>
            </div>
            <div className="answers">
                <div className="answer0">
                    70
                </div>  
                <div className="game-over">
                    GAME OVER
                </div>
                <div className="answer1">
                    100
                </div>                
            </div>
            <div className="score">
                <div className="score-box">
                    Score: 0
                </div>
                <div className = "time-left">Time left = <span className="timer"></span></div>
            </div>
        </div>
    </div>
    </div>
)
}


export default TapMath