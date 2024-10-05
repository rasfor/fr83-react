import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteLastTask } from '../store/features/todoSlice';
import { useState } from 'react';


const Application = (props) => {

    const tasks = useSelector(state =>state.todo.tasks);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const onInputChange = (e) => {
        setValue(e.target.value);
    }

    const onAddClick = () => {
        dispatch(addTask(value))
    }

    const onDoneClick = () => {
        dispatch(deleteLastTask())
    }
    
    return (<>
    <h1> To do list</h1>
    <ul>{tasks?.map(task => <li>{task}</li>)}</ul>
    <input onChange={onInputChange}/> <button onClick={onAddClick}> add new task</button><button onClick={onDoneClick}>done</button>
    </>)
}

export default Application;