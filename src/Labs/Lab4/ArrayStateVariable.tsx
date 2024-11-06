import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement} style={{
                padding: "10px 15px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginBottom: "15px"
            }}>Add Element</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        marginBottom: "5px",
                        border: "1px solid",
                        borderRadius: "5px",
                    }}>
                        {item}
                        <button onClick={() => deleteElement(index)} style={{
                            padding: "5px 10px",
                            backgroundColor: "red", // Red color
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            marginLeft: "10px"
                        }}
                                id="wd-delete-element-click">
                            Delete </button>
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}