import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

function List()
{
const task=useSelector((state)=>state.agenda);
const dispatch=useDispatch();
return (
<>
<h1>Your Tasks</h1>
{task.map((y)=>(
<div>
    <h2> Task {y.id}</h2>   
     <p>{y.description}</p>
     <input  type="checkbox" checked={y.isDone}
     onChange={() => dispatch({
        type:"agenda/editTask",
        payload:y.id,
     })}
     /> 
     
</div>

))}

</>

);
}



export default List;