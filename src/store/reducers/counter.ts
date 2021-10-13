import {
  ECounterActionType,
  ICounterState,
  TCounterAction,
} from "../../types/counter";

const initialState: ICounterState = {
  counter: 0,
};

export const counterReducer = (
  state: ICounterState = initialState,
  action: TCounterAction
): ICounterState => {
  switch (action.type) {
    case ECounterActionType.SET_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
