import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input type="text" placeholder="Title" style={{
                padding:10, 
                margin:10
            }} onChange={function(e) {
                const value = e.target.value;
                setTitle(value);
            }}></input><br />
            <input type="text" placeholder="Description" style={{
                padding:10, 
                margin:10
                }} onChange={function(e) {
                    const val = e.target.value;
                    setDescription(val);
                }}></input><br />
            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(async function(res) {
                        const json = await res.json();
                        alert("Todo added");
                    })
            }}>
                Add Todo
            </button>
        </div>
    )
}