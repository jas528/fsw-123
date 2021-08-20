import React from 'react'
import Todo3Card from './App.js'
import Todos from './Todo3Store'
import  './App.js css'

class App.js extends React.Component{
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
completeTodo - (e)=>{
    if (e){
        let aryUpdatedTodos=[..this.state.aryTodos]
        let index =aryUpdatedTodos.findIndex(item=>item.id===e);
        let aryUpdatedTodo={...aryUpdatedTodos[index]}
        if (aryUpdatedTodo.isCompleted){
            aryUpdatedTodo.isCompleted=false
        }else
    }
}
