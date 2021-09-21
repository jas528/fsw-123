import Todo from './Todo'

function TodoList({todos, completeTodo, deleteTodo}) {

    const myTodos = todos.map((todo) => {
        return <Todo 
            key={todo.id} 
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo} />
    })

    return (
        <div>
            {myTodos}
        </div>
    )

}

export default TodoList