import React from 'react'
import Todos from '3Store.js'
import  './App.css'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            aryTodos: Todos.map((item,index)=>
            ({
                key:index,
                id: item.id,
                text: item.text,
                isCompleted: item.isCompleted

        })
            )
    }
}
  addTodo = text =>{
      if (e) {
let aryUpdatedTodos = [...this.state.aryTodos]
let index= aryUpdatedTodos.findIndex(item=> item.id === e);
let aryUpdatedTodo ={...aryUpdatedTodos[index]}
if (aryUpdatedTodoisCompleted){
    aryUpdatedTodoisCompleted= false
}else{



      }
     //make copy of existing todos stored in state

}


    }



     //add new todo object to copy
     //update the todos array

 }
completeTodo = (e)=>{
    if (e){
        let aryUpdatedTodos=[...this.state.aryTodos]
        let index =aryUpdatedTodos.findIndex(item=>item.id===e);
        let aryUpdatedTodo={...aryUpdatedTodos[index]}
        if (aryUpdatedTodo.isCompleted){
            aryUpdatedTodo.isCompleted=false
        }else{}
    }
}
DeleteTodo
render(){
return(<div>todoApp</div>)
}

export default App.js
