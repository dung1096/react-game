import {BET, CALC, RANDOM} from "../types/diceType";

export const betAction = (choose) => {
    return {
        type: BET,
        choose,
    }
}

export const randomAction = () => {
    return {
        type: RANDOM,
    }
}

export const calcAction = () => {
    return {
        type: CALC,
    }
}