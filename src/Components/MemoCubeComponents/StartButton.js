import React from 'react';
import { connect } from 'react-redux';
import { startButtonHandler, hideSquares, patternGenerator } from '../../actions/actions'


const StartButton = (props) => {

    const roundStarter = () => {

 
    let dim = props.dimension;
    let dimSquared = dim * dim;

    let pattern = [];
    let patternTotal = 0;

    let patternSelector = (dimSquared) => {
        
        pattern = [];


        for (let i = 0; i<dimSquared; i++) {
            let rand = Math.round(Math.random())
            pattern.push(rand)
        }

        return pattern;
    }

    let patternTotaler = (pattern) => {
        return patternTotal = pattern.reduce((total, curr) => total + curr)
    }


    patternSelector(dimSquared);
    patternTotaler(pattern);

    let patternAdjuster = () => {

        while (patternTotal !== dim) {
            patternSelector(dimSquared);
            patternTotaler(pattern);
        }

        return pattern;
    }

    patternAdjuster()

    props.dispatch(patternGenerator(pattern))
    props.dispatch(startButtonHandler())

    let emptyPattern = new Array(dimSquared).fill(0)

    setTimeout(() => props.dispatch(hideSquares(emptyPattern)), 1000)

}   

    return (
        <div className = 'start-button-container'>
            <button 
            onClick = {roundStarter}
            disabled = {!props.show}
            className ='start-button'
            > 
            START
            </button>
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        dimension: state.dimension,
        show: state.showStartButton
    }
}

export default connect(mapStateToProps)(StartButton)


