export interface ICounterState {
  counter: number;
}

export enum ECounterActionType {
  SET_COUNTER
}

export interface ISetCounterAction {
  type: ECounterActionType.SET_COUNTER;
  payload: number;
}

export type TCounterAction = ISetCounterAction