import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import SampleClass from "../SampleClass/SampleClass";
import "./AppContent.css";

interface Props {}

const AppContent = (props: Props) => {
  const appState = useAppSelector((state) => state);
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  return (
    <div className="AppContent">
      <div className="AppContent__item">{appState.todoReducer.error}</div>
      <div className="AppContent__item">{appState.todoReducer.error}</div>
      <div className="AppContent__item">{appState.todoReducer.error}</div>
      <p className="AppContent__item">{appState.todoReducer.error}</p>
    </div>
  );
};

export default AppContent;
