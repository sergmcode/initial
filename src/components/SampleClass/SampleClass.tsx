import React from "react";
import "./SampleClass.css"

interface IProps {

}
interface IState {
    message: string;
}

class SampleClass extends React.Component<IProps, IState> {
  state: IState = {message: "hello"}
  constructor(props: any){
    super(props)
  }
  componentDidUpdate(){
    console.log(this.state.message)
  }
  render(){
    return <div className="SampleClass">
      class component 12312 werwerwete 42342534s <br />
      <button onClick={()=>{
        this.setState({ message: "new message" })
      }}>change state</button>
    </div>
  }
}

export default SampleClass