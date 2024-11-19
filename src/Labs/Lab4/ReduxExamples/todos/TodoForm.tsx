import {useDispatch, useSelector} from "react-redux";
import {addTodo, setTodo, updateTodo} from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#fff",
        }}>

            <button onClick={() => updateTodo(todo)}
                    id="wd-update-todo-click" style={{
                fontSize: "0.9em",
                padding: "5px 10px",
                backgroundColor: "#f1c40f", // Yellow for Update
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
            }}> Update
            </button>
            <button onClick={() => addTodo(todo)}
                    id="wd-add-todo-click" style={{
                fontSize: "0.9em",
                padding: "5px 10px",
                backgroundColor: "#2ecc71", // Green for Add
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}> Add
            </button>
            <input value={todo.title}
                   onChange={(e) => setTodo({...todo, title: e.target.value})}
                   style={{
                       flex: 1,
                       padding: "10px",
                       border: "1px solid #ddd",
                       borderRadius: "5px",
                       fontSize: "1em",
                   }}/>
        </li>
    );
}

