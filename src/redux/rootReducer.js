import { combineReducers } from "redux";
import todoReducer from "./Todos/reducer";

const rootReducer = combineReducers({
    todos: todoReducer,
});

export default rootReducer;