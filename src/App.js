import React from 'react';
import './App.css';
import {useState} from "react";
import TodoForm from "./komponenty/TodoForm"
import Todo from "./komponenty/Todo"
import {Card} from "react-bootstrap";


function App() {
    const [todos, setTodos] = useState([]);

    const pridatTodo = text => {
        const novyTodo = [...todos, {text}];
        setTodos(novyTodo);
    };

    const splnitTodo = index =>{
        const hotovyTodo = [...todos];
        hotovyTodo.splice(index, 1);
        setTodos(hotovyTodo);
    };

    return (
        <div className="App">
            <h1>Todo app</h1>
            <TodoForm pridatTodo={pridatTodo} />
            <div className="todoList">
            <h2>Todo list:</h2>
            {todos.map((todo, index) => (
            <Card>
                <Card.Body>
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        splnitTodo={splnitTodo}/>
                </Card.Body>
            </Card>
                ))}
            </div>
        </div>
    );
}

export default App;
