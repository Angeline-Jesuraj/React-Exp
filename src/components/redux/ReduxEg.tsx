import React from 'react'
import { NewNoteInput } from './NewNoteInput';

const ReduxEg : React.FC =()=>{
return(
<>
<NewNoteInput addNote={alert}/>
<hr/>
<ul>
    <li>Some notes</li>
</ul>
</>
)
}
export default ReduxEg;