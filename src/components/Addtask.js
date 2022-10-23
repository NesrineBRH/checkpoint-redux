import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
function Add()
{
const task=useSelector((state)=>state.agenda);
const [value, setValue] = useState('');
const dispatch=useDispatch();
const handleSubmit = (e) => {e.preventDefault();
dispatch({type:"agenda/addTask",payload:value}); setValue("");
};
return (
<div className='up'>
<h2>Add a New Task</h2>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Add a New Task" value={value}
onChange={(event) => setValue(event.target.value)} />
<button>Submit</button>
</form>
<h2> {task.id}</h2>   
<p>{task.description}</p>

</div>

);
}



export default Add;