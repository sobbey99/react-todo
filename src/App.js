import { useState, useEffect } from 'react';
import './App.css';

// Importing Components 
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  

  //States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  //USE EFFECT
  useEffect(() => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //Functions

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default :
        setFilteredTodos(todos);
        break;

    }
  }

  return (
    <div className="App">
      <header>
        <h1>Mike's Todo List</h1>
    </header>
    <Form 
    todos={todos} 
    setTodos={setTodos}
    setInputText={setInputText}
    inputText={inputText}
    setStatus={setStatus}/>

    <ToDoList 
    todos={todos}
    setTodos={setTodos}
    filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
