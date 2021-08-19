import React from 'react'
import Dice from './Die.js'
import  './DiceStyle.css'

class Dice extends React.Component{
    constructor(){
        super()
        this.state={
            dice8:2,
            dice7:3,
        }
        this.handleRoll=this.handleRoll.bind(this)
    }
    handleRoll(){
let dice8 = [this.state.dice8]
let dice7 = [this.state.dice]
dice8 = Math.ceil(Math.random()*6)
dice7= Math.ceil(Math.random()*6)
this.setState(prevState=>{
return{
    dice8:2,
    dice7:3,

}
})
}
    render(){
        return(
<div classNAme= 'Dicegame'>
<Dice pips={this.state.dice8}/>
<Dice pips={this.state.dice7}/>
<div>
<button onClick={this.handleRoll}className="DiceButton">RollDice</button>
</div>
</div>  
        )
 }
}
export default Dice

