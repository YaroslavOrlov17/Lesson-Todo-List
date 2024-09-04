import { useState } from "react"
import { nanoid } from "nanoid"
import s from "./TodoList.module.css"
import todoData from "../../jsonData/todos.json"
import TodoListItem from "./TodoListItem"

const TodoList = () => {
  // Установка состояния
  const [todos, setTodos] = useState(todoData)

  const [newTodoValue, setNewTodoValue] = useState("")

  //Функция для удаления элемента todo
  function handleDeleteTodo(id) {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  ////Функция для добавления элемента todo
  function handleAddTodo() {
    if (newTodoValue.trim() === "") return
    const newTodo = { todo: newTodoValue, id: nanoid() }
    setTodos((prev) => [...prev, newTodo])
    setNewTodoValue("")
  }

  return (
    <div className="container">
      <div className={s.input}>
        <input
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>add new </button>
      </div>
      <ul className={s.todoList}>
        {todos.map((item) => (
          <TodoListItem
            key={item.id}
            {...item}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
