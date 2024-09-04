import { useState } from "react";
import s from "./TodoList.module.css";
import todoData from "../../jsonData/todos.json";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [todos, setTodos] = useState(todoData);

  function handleDeleteTodo() {}

  return (
    <div>
      <div>
        <input type="text" />
        <button>add new todo</button>
      </div>
      <ul>
        {todos.map((item) => (
          <TodoListItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
