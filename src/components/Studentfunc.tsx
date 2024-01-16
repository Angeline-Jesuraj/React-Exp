import React, { FC, useState } from 'react'
type Studentdetails ={
    name: string;
    age:number,
    fathername:string,
    mothername:string
  }
const Studentfunc:FC<{}> =(props):JSX.Element=>{

    const[studentname,setstudentname]=useState<Studentdetails[]>([{name:"john",age:34,fathername:"jes",mothername:"ani"}]);

    const myClick=():void=>{
        setstudentname([...studentname,{name:"rob",age:34,fathername:"jes",mothername:"ani"}])
    }
    // function myClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //     throw new Error('Function not implemented.');
    // }

return(
    <>
    
    {JSON.stringify(studentname)}
    <button onClick={myClick}>Click</button>
    </>
)
}

export default Studentfunc;
