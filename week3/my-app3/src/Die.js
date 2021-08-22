import React   from "react"
import die1 from"./images/die1.jpg"
import die2 from"./images/die2.jpg"
//import die3 from"./images/die3.jpg"
//import die4 from"./images/die4.jpg"
import die5 from"./images/die5.jpg"
//import die6 from"./images/die6.jpg"
function Die(props){
//class Die extends React.Component{
//constructor (props){
 //   super(props)
//}
let img;
if (props.pips===1){
    img=die1
}
else if (props.pips===2){
    img=die2

}
else if (props.pips===5){
    img=die5
}
//render(){
   // let paths='./images/die'+ props.pips+'.jpg'
//let imgSrc=require( paths)
let imgID= 'img'+ props.pips
//console.log (imgSrc)
return(<div>
  <img id ={imgID} style={{padding: 15}} src={img} alt ='dice'/>
 this is the number {props.pips}
</div>
)

//}
}
export default Die