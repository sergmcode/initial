import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import "./AppHeader.css";
import { thunkSetError } from "../../store/actions/todo";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TRootState } from "../../store";
import { ETodoActionType, TTodoAction } from "../../types/todo";

interface Props {}

const AppHeader = (props: Props) => {
  const appState = useAppSelector((state) => state.todoReducer);
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
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
    </div>
  );
};

export default AppHeader;
