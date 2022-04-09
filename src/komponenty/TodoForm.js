import React from "react";
import {Button, Form} from 'react-bootstrap';


function TodoForm({pridatTodo}) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        pridatTodo(value);
        setValue("");
    };

    return (
        <div className="pridaniTodo">
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><h2>Nové todo:</h2></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Nový todo"/>
                <Button type="submit">Přidat todo</Button>
            </Form.Group>
        </Form>
        </div>
    );
}

export default TodoForm