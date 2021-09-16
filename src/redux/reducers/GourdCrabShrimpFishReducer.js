import { BET, PLAY, RANDOM } from "../types/gourdCrabShrimpFishType";

const stateDefault = {
  betList: [
    { id: "bau", src: "./img/gourdCrabShrimpFishGame/bau.png", point: 0 },
    { id: "cua", src: "./img/gourdCrabShrimpFishGame/cua.png", point: 0 },
    { id: "ca", src: "./img/gourdCrabShrimpFishGame/ca.png", point: 0 },
    { id: "tom", src: "./img/gourdCrabShrimpFishGame/tom.png", point: 0 },
    { id: "nai", src: "./img/gourdCrabShrimpFishGame/nai.png", point: 0 },
    { id: "ga", src: "./img/gourdCrabShrimpFishGame/ga.png", point: 0 },
  ],
  point: 500,
  dice: [
    { id: "bau", src: "./img/gourdCrabShrimpFishGame/bau.png" },
    { id: "cua", src: "./img/gourdCrabShrimpFishGame/cua.png" },
    { id: "ca", src: "./img/gourdCrabShrimpFishGame/ca.png" },
  ],
};

const GourdCrabShrimpFishReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case BET: {
          let betListUpdate = [...state.betList];
          //tìm quân cược được click
          let index = betListUpdate.findIndex((bet)=>bet.id===action.id)
          //xem người dùng bấm tăng hay giảm
          if (index !== -1 && action.bool && state.point > 0) {
            betListUpdate[index].point += 100;
            state.point -= 100;
          } else if (
            index !== -1 &&
            !action.bool &&
            betListUpdate[index].point > 0
          ) {
            betListUpdate[index].point -= 100;
            state.point += 100;
          }
          return {...state, betList:betListUpdate};
        }
        case RANDOM: {
          //random xúc xắc
          let randomDiceArray = [];
          for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random()*6);
            let randomDice = {
              id: state.betList[randomNumber].id,
              src: state.betList[randomNumber].src
            }
            randomDiceArray.push(randomDice);
          }

          return {...state, dice:randomDiceArray};
        }
        case PLAY: {
          //xử lý trúng thưởng
          for (let randomDice of state.dice) {
            let index = state.betList.findIndex((dice) => dice.id === randomDice.id)
            if (index !== -1) {
              state.point += state.betList[index].point;
            }
          }
          //xử lý hoàn tiền
          for (let bet of state.betList) {
            let index = state.dice.findIndex(
              (dice) => dice.id === bet.id
            );
            if (index !== -1) {
              state.point += bet.point;
            }
          }
          //xử lý reset mảng
          state.betList = state.betList.map((dice) => {
            return { ...dice, point: 0 };
          });
          return {...state};
        }
        default:
            return {...state};
    }
}
export default GourdCrabShrimpFishReducer;