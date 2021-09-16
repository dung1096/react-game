import { BET, PLAY, RANDOM } from "../types/gourdCrabShrimpFishType"

export const betAction = (id,bool) => {
    return {
        type: BET,
        id,
        bool,
    }
}

export const randomAction = () => {
    return {
        type: RANDOM,
    }
}

export const playAction = () => {
    return {
        type: PLAY,
    }
}