import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { Action, AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { TAppDispatch, TRootState } from "../store"

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppThunkDispatch = () => useDispatch<ThunkDispatch<TRootState, any, any>>()

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

