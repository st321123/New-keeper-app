import React from 'react'

function Note(props)
{
    return(
   
     <div className="note">
      <h1>{props.texT}</h1>
      <p>{props.textC}</p>
      <button onClick = {()=>props.deltu(props.id)}>DELETE</button>
      </div>
   
   )
}
export default Note;