import React from "react";

const Todo = ({text,todo, setTodos, todos}) => {
    //Events

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`
            todo-item ${todo.completed ? 'completed' : ''} 
            `}>{text}</li>
            <buttons onClick={completeHandler} className='complete-btn'>
                <i className="fas fa-check"></i>
            </buttons>
            <buttons 
            className='trash-btn'
            onClick={deleteHandler}
            >
                <i className="fas fa-trash"></i>
            </buttons>
        </div>
    );
}

export default Todo;