import React, { useState } from 'react'


function CreateTodo() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input style={{ padding: 10, margin: 10 }} type='text' placeholder='Title' onChange={(e) => {
        const value = e.target.value;
        setTitle(value);
      }}></input>
      <input style={{ padding: 10, margin: 10 }} type='text' placeholder='Title' onChange={(e) => {
        const value = e.target.value;
        setDescription(value);
      }} ></input>
      <button style={{ padding: 10, margin: 10 }} onClick={() => {
        fetch("http://localhost:3000/todo", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            descrpition: description
          }),
          headers:{
            "Content-type":'application/json'
          }
        }).then(async function (res) {
          const json = await res.json();
          alert("Todo added")
        })
      }}>Add a todo</button>
    </div>
  )
}

export default CreateTodo