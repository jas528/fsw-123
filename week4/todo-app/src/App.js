import { useState } from 'react'
import { listoftodos } from './store'
import Todo from './Todo'
import TodoList from './TodoList'

function App() {

    const [todos, setTodos] = useState(listoftodos)

    return (
        <div>
            <h1>My Todo App</h1>
            <TodoList todos = {todos} />
        </div>
    )
}

export default App;