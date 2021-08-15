import logo from './logo.svg';
import './App.css';

export default function App() {
  var cb={width:"20px"}
  return (
    <div className="App">
    <div>Todolist</div>
    <div><input id="cb1"class="cb1"type="checkbox"></input></div>
      <div><label for="cb1" >Go to the Gym </lable></div>
      <div><input id="cb1"class="cb1"type="checkbox"></input></div>
      <div><lable for= "cb1">Go Shopping </lable></div>
      <div><input id="cb1"class="cb1"type="checkbox"></input></div>
    <div><label for="cb1">Clean house </label></div> 
      
    </div>
  );
}

export default App;
