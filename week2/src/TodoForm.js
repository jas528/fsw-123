import { useState } from 'react'

function TodoForm({addTodo}) {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        //alert('form submit!')
        e.preventDefault()
        if(input !== "") {
            addTodo(input)
            setInput("")
        }
        else {
            // input cannot be blank
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange} />
                    <button>Add Todo</button>
            </form>
        </div>
    )

}

export default TodoForm