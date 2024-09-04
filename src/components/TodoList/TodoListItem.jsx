import s from "./TodoList.module.css"

const TodoListItem = ({ id, todo, handleDeleteTodo }) => {
  return (
    <li className={s.todoItem}>
      {/* <input type="checkbox" /> */}
      <span>{todo}</span>
      <button className={s.deleteBtn} onClick={() => handleDeleteTodo(id)}>
        delete
      </button>
    </li>
  )
}

export default TodoListItem
