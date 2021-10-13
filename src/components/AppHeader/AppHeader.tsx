import { useDispatch, useSelector } from "react-redux";
import {
  useAppDispatch,
  useAppSelector,
  useAppThunkDispatch,
} from "../../hooks/store";
import "./AppHeader.css";
import { thunkSetError } from "../../store/actions/todo";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TAppDispatch, TRootState } from "../../store";
import { ETodoActionType, TTodoAction } from "../../types/todo";
import { useState } from "react";
import { ECounterActionType } from "../../types/counter";
import { checkInputIsANumber } from "../../utils/checkInput";

interface Props {}

const AppHeader = (props: Props) => {
  const appState = useAppSelector((state) => state);
  const appDispatch = useAppDispatch();
  const thunkDispatch = useAppThunkDispatch();
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="AppHeader">
      <div
        className="AppHeader__item"
        onClick={() => {
          appDispatch({
            type: ETodoActionType.SET_ERROR,
            payload: "error set!",
          });
        }}
      >
        Set error
      </div>
      <div
        className="AppHeader__item"
        onClick={() => {
          thunkDispatch(thunkSetError("some error..."));
        }}
      >
        Set error thunk
      </div>
      <div
        className="AppHeader__item"
        onClick={() => {
          appDispatch({
            type: ECounterActionType.SET_COUNTER,
            payload: checkInputIsANumber(inputValue),
          });
        }}
      >
        Set counter
      </div>
      <input
        type="number"
        className="AppHeader__item"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default AppHeader;
