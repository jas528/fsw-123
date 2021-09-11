import React from 'react'
//import Todos from 
//import  './App.js css'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            //aryTodos: Todos.map((item,index)=>
            //({
              //  key:index,
               // id: item.id,
                //text: item.text,
                //isCompleted: item.isCompleted

       // })
         //  )
    }
}
  addTodo = text =>{
     //make copy of existing todos storedin state
//add new todo objectto copy
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
render(){
return(<div>todoApp</div>)
}
}
export default App