import { inject, observer } from 'mobx-react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Application = ({ store }) => {
    const [value, setValue] = useState('');
    const onInputChange = (e) => {
        setValue(e.target.value);
    }

    const onAddClick = () => {
        store.addTask(value)
    }

    const onDoneClick = () => {
        store.deleteLastTask()
    }
    
    return (<>
    <h1> To do list</h1>
    <ul>{store.tasks?.map(task => <li>{task}</li>)}</ul>
    <input onChange={onInputChange}/> <button onClick={onAddClick}> add new task</button><button onClick={onDoneClick}>done</button>
    </>)
}

export default inject('store')(observer(Application));

Application.propTypes  = {
    store: PropTypes.shape({
        tasks: PropTypes.array.isRequired,
        addTask: PropTypes.func.isRequired,
        deleteLastTask: PropTypes.func.isRequired,
    }).isRequired
}