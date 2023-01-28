import React from "react";

// import components
import Todo from "./Todo";

const ToDoList = ({todos, setTodos, filteredTodos}) => {

  
    return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          filteredTodos.map(todo => (
            <Todo text={todo.text} 
            key={todo.id} 
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            />
            
          ))
        }
      </ul>
    </div>
    );
}

export default ToDoList;