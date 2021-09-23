import { combineReducers } from "redux";
import DiceReducer from "./DiceReducer"
import GourdCrabShrimpFishReducer from "./GourdCrabShrimpFishReducer"
const rootReducer = combineReducers({
    DiceReducer,
    GourdCrabShrimpFishReducer,
});

export default rootReducer;