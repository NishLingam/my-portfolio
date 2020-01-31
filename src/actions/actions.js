const patternGenerator = (pattern)  => {

    return {
        type: 'PATTERN_GENERATOR',
        pattern
    }
}

const correctSelected = (id) => {

    return {
        type: 'CORRECT_SELECTED',
        id
    }
}

const incorrectSelected = (id) => {

    return {
        type: 'INCORRECT_SELECTED',
        id
    }
}

const gameOver = () => {

    return {
        type: 'GAME_OVER'
    }
}

const resetAll = () => {

    return {
        type: 'RESET_ALL'
    }
}

const hideSquares = (emptyPattern) => {

    return {
        type: 'HIDE_SQUARES',
        emptyPattern
    }
}

const nextRound = () => {

    return {
        type: 'NEXT_ROUND'
    }
}

const startButtonHandler = () => {

    return {
        type: 'START_BUTTON_HANDLER'
    }
}

const levelUp = () => {

    return {
        type: 'LEVEL_UP'
    }
}

export { hideSquares, patternGenerator, correctSelected, incorrectSelected, gameOver, resetAll, nextRound, startButtonHandler, levelUp };