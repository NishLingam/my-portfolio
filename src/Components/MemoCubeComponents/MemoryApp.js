import React from 'react';
import TotalSquare from './TotalSquare';
import StartButton from './StartButton';
import ScoreCounter from './ScoreCounter';
import GameOver from './GameOver';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeSVG } from '../../images/home-run.svg';


const MemoryApp = (props) => {
    
    return (

        <div className = 'memocube-container'>
            {!props.gameOver && 
            <div className = 'game-container'> 
                <div className = 'tapmath-header'> 
                    <NavLink to='/portfolio' className='back-button'> <HomeSVG className = 'homeSVG' /> </NavLink>
                    <h1 className = 'memocube-title'> MemoCube </h1>
                </div>
            <TotalSquare />
            <StartButton />
            <ScoreCounter score = {props.score}/>
            </div>}
            {props.gameOver && <GameOver />}
        </div>


    )

};

const mapStatetoProps = (state) => {
    return {
        showButton: state.showStartButton,
        score: state.score,
        correctCounter: state.correctCounter,
        gameOver: state.gameOver,
        levelCounter: state.levelCounter,
        dimension: state.dimension
    }
}




export default connect(mapStatetoProps)(MemoryApp);