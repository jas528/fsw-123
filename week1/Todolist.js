import React from 'react';
import Todolist from './Todolist.js';
import  './Todolist.css';
function Todolist (){
    return (
        <div>
       <div className= "TodolistDiv">Todolist</div>
<Todos/>
       <input id= "cb1" type= 'checkbox'/>
       </div>
    );
}
export default Todolist;