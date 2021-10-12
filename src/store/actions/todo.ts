import { ETodoActionType, ITodo, TTodoAction } from "../../types/todo";
import { AnyAction, Dispatch } from "redux";
import { TAppDispatch, TRootState } from "..";
import { ThunkAction } from "redux-thunk";

export function setError(error: string): TTodoAction {
  return { type: ETodoActionType.SET_ERROR, payload: error };
}

export function setLoading(loading: boolean): TTodoAction {
  return { type: ETodoActionType.SET_LOADING, payload: loading };
}

export function setTodos(todos: ITodo[]): TTodoAction {
  return { type: ETodoActionType.SET_TODOS, payload: todos };
}

export function fetchTodos() {
  return async function (dispatch: Dispatch, getState: () => TRootState) {};
}

export const thunkSetError =
  (errorMessage: string) =>
  async (dispatch: TAppDispatch, getState: () => TRootState) => {
    setTimeout(() => {
      dispatch(setError(errorMessage));
    }, 1000);
  };

