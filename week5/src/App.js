import { useState } from 'react'
import { listoftodos } from './store'
import Todo from './Todo'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuid4} from "uuid";

function App() {

    const [todos, setTodos] = useState(listoftodos)

    const addTodo = text => {
        const newTodos = [
            ...todos,
            {
                id: uuid4(),
                text: text,
                isCompleted: false
            }
        ]
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>My Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos = {todos} />
        </div>
    )
}

export default App;