import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({todo}: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            marginBottom: "15px",
            borderBottom: "1px solid #ddd",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
        }}
            key={todo.id} className="list-group-item">
            <button onClick={() => dispatch(setTodo(todo))} style={{
                fontSize: "0.9em",
                padding: "5px 10px",
                backgroundColor: "#3498db", // Blue for Edit
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
            }}
                    id="wd-set-todo-click"> Edit
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={{
                fontSize: "0.9em",
                padding: "5px 10px",
                backgroundColor: "#e74c3c", // Red for Delete
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
                    id="wd-delete-todo-click"> Delete
            </button>
            {todo.title}    </li>);
}

