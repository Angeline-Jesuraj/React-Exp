import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';
import StudentEg from './StudentEg';
import Studentfunc from './Studentfunc';

type StudenetState = {
  name: string;
  age: number;
};
type StudentReport={
  studentreport:StudenetState[]
}
class App extends Component<{}, StudentReport> {

  state: Readonly<StudentReport>={
 studentreport:[
  {
    name:"Ang",
    age:12
  },
  {
    name:"Ish",
    age:17
  }
 ]
  }

  myClick = () => {
    alert("Hi");
  };

  render() {
    return (
      <div className="App">
        {/* <Student fathername={"Ben"} myClick={this.myClick} /> */}
        {/* <Student name={this.state.studentreport[0].name} age={this.state.studentreport[0].age}/>
        < */}
        <StudentEg/>
        <Studentfunc/>
      </div>

    );
  }
}

export default App;
