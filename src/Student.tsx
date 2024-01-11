import React, { Component } from "react";
//we can use type instead of interface keyword
interface StudentState {
  name: string;
  age: number;
}
//props define
interface StudentProps {
    name: string;
    age: number;
  }
//define props

// type StudentProps=
// {
//     fathername:string
//     mothername?:string
//     myClick:()=>void
// }
//city?:string means it is optional
//city:string then throw an error because it is mandatory
// class Student extends Component<{},{name:String,age:Number,city?:string}>
class Student extends Component<StudentProps, StudentState> {
  // constructor(props:any)
  // {
  //     super(props);
  //     this.state={
  //         name:'angel',
  //         age:12
  //     }
  // }
  //adding state like this
  state: Readonly<StudentState> = {
    name: "Angel",
    age: 12,
  };
  myClick=()=>{
    this.setState({
        name:"Ishu"
    })
  }
  render(): JSX.Element {
    const { name } = this.state;
    // return 12;
    return (
      <div>
        <h1>{name}</h1>
        {/* <h2>{this.props.fathername}</h2> */}
        {/* <button type="button" onClick={this.myClick}>
          Click
        </button> */}
        {/* <button onClick={this.props.myClick}>Click</button> */}
        <p>Name: {this.props.name}</p>
        <p> Age :{this.props.age}</p>
      </div>
    );
  }
}
export default Student;
