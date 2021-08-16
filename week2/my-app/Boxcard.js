import React from 'React'; './Picture.svg';
import './App.css';

function BoxcardsApp(props) {
  return(
  <div className="cards"style={{backgroundColor:props.bgcolor}}>
    <h2>{props.title}</h2>
    <h3>{props.subtitle}</h3>
    <hr/>
    <h4>{props.descrpition}</h4>
    </div>
  )
}
     



export default BoxCardApp;
