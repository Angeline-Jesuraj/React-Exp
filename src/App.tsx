import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';
import StudentEg from './components/StudentEg';
import Studentfunc from './components/Studentfunc';
import AxiosEg from './components/AxiosEg';
import { BrowserRouter, Routes, Link ,Route} from 'react-router-dom';
import Topic from './Topic';
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
      // <div className="App">
      //   {/* <Student fathername={"Ben"} myClick={this.myClick} /> */}
      //   {/* <Student name={this.state.studentreport[0].name} age={this.state.studentreport[0].age}/>
      //   < */}
      //   <StudentEg/>
      //   <Studentfunc/>
      //   <AxiosEg/>
      // </div>
 <BrowserRouter>
   <nav>
   <Link to="/">Home</Link>
    <Link to="/topics">Topics</Link>
   </nav>
   <Routes>
   <Route path="/topics" element={<Topic />} />
          <Route path="/studenteg" element={<StudentEg />} />
          <Route path="/studentfunc" element={<Studentfunc />} />
          <Route path="/axioseg" element={<AxiosEg />} />
   </Routes>
 </BrowserRouter>
    );
  }
}

export default App;
