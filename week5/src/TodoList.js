import Todo from './Todo'

function TodoList({todos}) {

    const myTodos = todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />
    })

    return (
        <div>
            {myTodos}
        </div>
    )

}

export default TodoList