import React from "react";
import {Button} from "react-bootstrap";


function Todo({todo, index, splnitTodo}) {
    return (
        <div className="Todo">
            <p><span className="todoText">{todo.text}</span>
                <Button className="hotovoButton" onClick={() => splnitTodo(index)}>Hotovo</Button>
                </p>
        </div>
    );
}

export default Todo