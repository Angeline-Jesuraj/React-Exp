import React, { Component, FormEvent } from "react";
//we can use type instead of interface keyword
interface StudentState {
  name: string;
}
class StudentEg extends Component<{},StudentState> {
  state: Readonly<StudentState> = {
    name: "",
  };
  //this function doesnt return anything
  myChange = (e: FormEvent<HTMLInputElement>): void => {
    this.setState({
      name: e.currentTarget.value,
    });
  };
  myClick=()=>{
    alert(this.state.name)

  }
  render(): JSX.Element {
    const { name } = this.state;

    return (
      <>
        <input type="text" onChange={this.myChange}></input>
        <button onClick={this.myClick}>Submit</button>
      </>
    );
  }
}
export default StudentEg;
