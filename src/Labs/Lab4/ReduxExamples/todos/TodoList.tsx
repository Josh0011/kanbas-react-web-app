import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";


export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id="wd-todo-list-redux" style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "400px",
            margin: "20px auto",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#fff",
        }}>
            <h2 style={{ fontSize: "1.5em", marginBottom: "15px" }}>Todo List</h2>
            <ul className="list-group" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem todo={todo} />
                ))}
            </ul>
            <hr/>
        </div>
    );

}

