import React, { useState, useEffect } from "react";


function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  useEffect(() => {
    fetch("https://api.npoint.io/999094e0b4d19f9779fc/todos/")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (editingTodoId === null) {
      // Create new todo item
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({ title: newTodo }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => setTodos([...todos, data]));
    } else {
      // Update existing todo item
      fetch(`https://api.npoint.io/999094e0b4d19f9779fc/todos/${editingTodoId}`, {
        method: "PUT",
        body: JSON.stringify({ title: newTodo }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const updatedTodos = todos.map((todo) =>
            todo.id === editingTodoId ? { ...todo, title: data.title } : todo
          );
          setTodos(updatedTodos);
          setEditingTodoId(null);
        });
    }
    setNewTodo("");
  };

  const handleTodoEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setNewTodo(todoToEdit.title);
    setEditingTodoId(id);
  };

  const handleTodoDelete = (id) => {
    fetch(`https://api.npoint.io/999094e0b4d19f9779fc/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    });
  };

  return (
    <div>
      <form onSubmit={handleNewTodoSubmit}>
        <input id="add"  value={newTodo} onChange={handleNewTodoChange} />
        <button class="btn btn-primary"  id="button-addon2" type="submit">{editingTodoId ? "Save" : "Add Todo"}</button>
      </form>
      <table id="table" className="table table-success table-striped">
        <thead>
          <tr>
            <th  scope="col">ID</th>
            <th scope="col">Todo</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr  key={todo.id}>
              <td colSpan="2">{todo.due_date}</td>
              <td colSpan="2">{todo.title}</td>
              <td colSpan="2">{todo.notes}</td>
              <td colSpan="2">{todo.completed}</td>
              <td>
                <button id="edit_btn" type="button" class="btn btn-primary" onClick={() => handleTodoEdit(todo.id)}>Edit</button>
                <button  type="button" class="btn btn-warning" onClick={() => handleTodoDelete(todo.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;