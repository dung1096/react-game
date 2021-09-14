import { BET, CALC, RANDOM } from "../types/diceType";

const diceList = [
    { id: 1, src: "./img/diceGame/1.png", num: 1 },
    { id: 2, src: "./img/diceGame/2.png", num: 2 },
    { id: 3, src: "./img/diceGame/3.png", num: 3 },
    { id: 4, src: "./img/diceGame/4.png", num: 4 },
    { id: 5, src: "./img/diceGame/5.png", num: 5 },
    { id: 6, src: "./img/diceGame/6.png", num: 6 },
];

const stateDefault = {
    choose: "Tài",
    win:0,
    play:0,
    diceArray: [
        { id: 1, src: "./img/diceGame/1.png", num: 1 },
        { id: 2, src: "./img/diceGame/2.png", num: 2 },
        { id: 3, src: "./img/diceGame/3.png", num: 3 },
    ]
}

const DiceReducer = (state = stateDefault,action) => {
    switch (action.type) {
        case BET:
            state.choose = action.choose;
            return {...state};
        case RANDOM: {
            let randomArray = [];
            for (let i = 0; i < 3; i++) {
                let numberRandom = Math.floor(Math.random()*6);
                randomArray.push(diceList[numberRandom])
            }
            state.diceArray = randomArray;
             return { ...state };
        }
        case CALC:
            let sum = state.diceArray.reduce((sumDice, dice) => {
                return sumDice += dice.num;
            },0)
             //cập nhật số bàn thắng
            if (
                (state.choose === "Xỉu" && sum <= 10) ||
                (state.choose === "Tài" && sum > 10)
            ) {
                state.win++;
            }
            //cập nhật số bàn chơi
            state.play++;
            return {...state};
        default:
            return { ...state };
    }
}

export default DiceReducer;