import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeSVG } from '../images/home-run.svg';


class TapMath extends Component {

    constructor() {
        super()
        this.state = {
            questionNumber0: Math.floor(Math.random()*100),
            questionNumber1: Math.floor(Math.random()*100),
            answer0Style: 'neutral-answer',
            answer1Style: 'neutral-answer',
            correctAnswer: Math.floor(Math.random()*2),
            wrongAnswer: Math.floor(Math.random()*200),
            score: 0,
            gameOver: false,
            timer: '1:00'
        }
    }

    init = () => {
        this.setState({
            questionNumber0: Math.floor(Math.random()*100),
            questionNumber1: Math.floor(Math.random()*100),
            answer0Style: 'neutral-answer',
            answer1Style: 'neutral-answer',
            correctAnswer: Math.floor(Math.random()*2),
            wrongAnswer: Math.floor(Math.random()*200),
            score: 0,
            gameOver: false,
            timer: '1:00'
        })
    }

    nextRound = () => {
        this.setState({
            questionNumber0: Math.floor(Math.random()*100),
            questionNumber1: Math.floor(Math.random()*100),
            answer0Style: 'neutral-answer',
            answer1Style: 'neutral-answer',
            correctAnswer: Math.floor(Math.random()*2),
            wrongAnswer: Math.floor(Math.random()*200),
            score: this.state.score + 1,
            gameOver: false
        })
    }

    answer0SelectedHandler = () => {
       if (this.state.correctAnswer === 1) {
            this.setState({
                answer0Style: 'wrong-answer',
                gameOver: true
            });
            setTimeout(this.init, 1000)
       } else {
           this.setState({
               answer0Style: 'correct-answer'
           });
           setTimeout(this.nextRound, 200)
       }
    }

    answer1SelectedHandler = () => {
        if (this.state.correctAnswer !== 1) {
             this.setState({
                 answer1Style: 'wrong-answer',
                 gameOver: true
             });
             setTimeout(this.init, 1000)
        } else {
            this.setState({
                answer1Style: 'correct-answer'
            });
            setTimeout(this.nextRound, 200)
        }
     }

    startTimer = () => {
        
        var timeArray = this.state.timer.split(/[:]+/);
        var m = timeArray[0];
        var s = this.checkSecond((timeArray[1] - 1));
        if(s===59){m=m-1}

        this.setState({
            timer: `${m} : ${s}`
        })

       

       
        
        if(m<0){
        this.setState({
                gameOver: true
        });
        setTimeout(this.init, 1000)
        }
        setTimeout(this.startTimer, 1000);
      }
      
    checkSecond = (sec) => {
        if (sec < 10 && sec >= 0) {sec = '0' + sec}; // add zero in front of numbers < 10
        if (sec < 0) {sec = '59'};
        return sec;
    }

    componentDidMount() {
        this.startTimer();
    }

      

    

// If second answer is correct
render() {
    return (
        
        <div className = 'tapmath-container'>  
        <div className = 'app'>
            <div className = 'tapmath-header'>
                <NavLink to='/portfolio' className='back-button'> <HomeSVG className = 'homeSVG' /> </NavLink>
                <h1 className = 'tapmath-title'> TapMath  </h1>
            </div>
        <div className="container">
            <div className="question">
                <p className="question-box">
                    {this.state.questionNumber0} + {this.state.questionNumber1}
                </p>
            </div>
            <div className="answers">
                <div className={this.state.answer0Style} onClick={this.answer0SelectedHandler}>
                     {!this.state.correctAnswer ? this.state.questionNumber0 + this.state.questionNumber1 : this.state.wrongAnswer}
                </div>  
                <div className= {this.state.gameOver ? "game-over-red" : "game-over-white"}>
                    <p> GAME OVER :( </p>
                </div>
                <div className={this.state.answer1Style} onClick = {this.answer1SelectedHandler}>
                {this.state.correctAnswer ? this.state.questionNumber0 + this.state.questionNumber1 : this.state.wrongAnswer}
                </div>                
            </div>
            <div className="score">
                <div className="score-box">
                    Score: {this.state.score}
                </div>
                <div className = "time-left"> Time left = {this.state.timer} <span className="timer"></span></div>
            </div>
        </div>
    </div>
    </div>
)
    }
}


export default TapMath