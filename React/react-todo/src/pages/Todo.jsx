import React, { useEffect } from "react";
import Button from "../components/Button";
import styles from "./Todo.module.css";

export default function Todo() {
  // use React state hook to manipulate newTodo and todoList
  const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  // on mount, fetch todoList from localStorage
  useEffect(() => {
    const todoList = localStorage.getItem("todoList");
    if (todoList) setTodoList(JSON.parse(todoList));
  }, []);

  // set updated todoList and save to localStorage
  const updateTodoList = (newTodoList) => {
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  const addTodo = (e) => {
    // prevent page reload
    e.preventDefault();
    // add new todo to the front of the list
    const newTodoList = [
      {
        content: newTodo,
        checked: false,
        id: Date.now().toString(),
      },
      ...todoList,
    ];
    updateTodoList(newTodoList);
    // clear input
    setNewTodo("");
  };

  const setChecked = (id, checked) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) todo.checked = checked;
      return todo;
    });
    updateTodoList(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    updateTodoList(newTodoList);
  };

  return (
    <main className={styles.main}>
      <h1>Todo</h1>
      <div>
        <form onSubmit={addTodo} className={styles.form}>
          <input
            className={styles.inp}
            type="text"
            required
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <Button type={"submit"} color={"primary"}>
            Add
          </Button>
        </form>

        <div>
          <ul className={styles.ul}>
            {todoList.map((todo) => (
              <li className={styles.li} key={todo.id}>
                <span className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id={todo.id}
                    checked={todo.checked}
                    onChange={(e) => {
                      setChecked(todo.id, e.target.checked);
                    }}
                  />
                  <label
                    htmlFor={todo.id}
                    className={todo.checked ? styles.cross : ""}
                  >
                    {todo.content}
                  </label>
                </span>
                <Button color={"error"} onClick={() => deleteTodo(todo.id)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
