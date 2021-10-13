import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { setError } from "../../store/actions/todo";
import SampleClass from "../SampleClass/SampleClass";
import "./HomeContent.css";

interface Props {}

const HomeContent = (props: Props) => {
  const generateDivs = (n: number) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(
        <div key={i} className="HomeContent__item HomeContent__counterInfo">
          div
        </div>
      );
    }
    return arr;
  };
  const appState = useAppSelector((state) => state);
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  return (
    <div className="HomeContent">
      <div className="HomeContent__item">{appState.todoReducer.error}</div>
      <div className="HomeContent__item">{appState.todoReducer.error}</div>
      <div className="HomeContent__item">{appState.todoReducer.error}</div>
      <p className="HomeContent__item">{appState.todoReducer.error}</p>
      <br />
      {generateDivs(appState.counterReducer.counter)}
    </div>
  );
};

export default HomeContent;
