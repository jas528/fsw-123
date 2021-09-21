function Todo({ todo, completeTodo, deleteTodo }) {

    //console.log('todo: ', todo)

    return (
        <div>
            <input 
                type="checkbox" 
                checked={todo.isCompleted}
                onChange={() => completeTodo(todo.id)} />
            <span style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    )
}

export default Todo