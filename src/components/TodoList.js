import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {

    return (
        <div className={style.TodoList}>
            <p>Zadania do wykonania:</p>
            <ul>
            { props.todos.map(todo =>
                <li key={todo.id} onClick={ props.remove }>
                    {todo.text}
                </li>
            )}
            </ul>
        </div>
    )
}

export default TodoList;