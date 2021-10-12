import { ETodoActionType, ITodo, TTodoAction } from "../../types/todo";
import { AnyAction, Dispatch } from "redux";
import { TRootState } from "..";
import { ThunkAction } from "redux-thunk";

export function setError(error: string): TTodoAction {
  return { type: ETodoActionType.SET_ERROR, payload: error }
}

export function setLoading(loading: boolean): TTodoAction {
  return { type: ETodoActionType.SET_LOADING, payload: loading }
}

export function setTodos(todos: ITodo[]): TTodoAction {
  return { type: ETodoActionType.SET_TODOS, payload: todos }
}

export function fetchTodos() {
  return async function(dispatch: Dispatch, getState: () => TRootState) {
    
  }
}

export const thunkSetError =
  (errorMessage: string): ThunkAction<void, TRootState, unknown, AnyAction> =>
  async dispatch => {
    const asyncResp = await exampleAPI()
    dispatch(setError(errorMessage))
  }

function exampleAPI() {
  return Promise.resolve('__')
}