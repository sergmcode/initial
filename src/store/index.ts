import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { todoReducer } from "./reducers/todo";
import { counterReducer } from "./reducers/counter";

const rootReducer = combineReducers({
  todoReducer,
  counterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;

