import React from 'react'
import { useSelector } from 'react-redux';
function Task()
{
const task=useSelector((state)=>state.agenda);

return (
<div className='todo'>
<h2>Your todo List</h2>
{task.map((y)=>(
        <div>
{y.isDone===true?<p>{y.description}</p>:null}

</div>

))}
</div>

);
}



export default Task;