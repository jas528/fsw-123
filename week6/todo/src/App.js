import { useState } from 'react'
import { listoftodos } from './store'
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

    const completeTodo = id => {
        const tmpTodos = [...todos];
        const index = tmpTodos.findIndex(todo => todo.id === id);
        tmpTodos[index].isCompleted = !tmpTodos[index].isCompleted;
        setTodos(tmpTodos);
    }

    const deleteTodo = id => {
        const tmpTodos = [...todos];
        const filteredTodos = tmpTodos.filter(todo => todo.id !== id)
        setTodos(filteredTodos);
    }

    return (
        <div>
            <h1>My Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo} />
        </div>
    )
}

export default App;