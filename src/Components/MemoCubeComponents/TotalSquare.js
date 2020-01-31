import React from 'react';
import MiniSquare from './MiniSquare';
import { connect } from 'react-redux';
import { levelUp, nextRound, hideSquares, patternGenerator } from '../../actions/actions';
import uuid  from 'uuid';


const TotalSquare = (props) => {

    let count = -1;

    if (props.levelCounter === props.dimension) {
        setTimeout(() => {
            props.dispatch(levelUp())
    }, 500)
    setTimeout(() => {
            roundStarter(props.dimension + 1)
    }, 500)
    } else if (props.correctCounter === props.dimension) {
        setTimeout(() => {
                props.dispatch(nextRound())
        }, 500)
        setTimeout(() => {
                roundStarter(props.dimension)
        }, 1000)
    }



    const roundStarter = (dim) => {

        
        let dimSquared = dim * dim;
    
        let pattern = [];
        let patternTotal = 0;

        console.log(dim, dimSquared)
    
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
    
        let emptyPattern = new Array(dimSquared).fill(0)
    
        setTimeout(() => props.dispatch(hideSquares(emptyPattern)), 1000)
    
    }



    return (

    <div className = 'total-square'>
        {props.dimensionArray.map((ele) => {
            return (
                <div className = 'row' key = {uuid()}>
                {props.dimensionArray.map((ele) => {
                    count++
                    return (
                        <MiniSquare id = {count} key = {uuid()} />
                    )
                })}
                </div>
             )})
            }
    </div>
    )


}


const mapStateToProps = (state) => {
    return {
        dimensionArray: state.dimensionArray,
        levelCounter: state.levelCounter,
        dimension: state.dimension,
        correctCounter: state.correctCounter
        
    }
}


export default connect(mapStateToProps)(TotalSquare);