import React from 'react'
import Die from './Die.js'


class Dice extends React.Component{
    constructor(){
        super()
        this.state={
            dice8:2,
            dice7:5,
        }
        this.handleRoll=this.handleRoll.bind(this)
    }
    handleRoll(){
let dice8 = [this.state.dice8]
let dice7 = [this.state.dice7]
dice8 = Math.ceil(Math.random()*6)
dice7= Math.ceil(Math.random()*6)
this.setState(prevState=>{
return{
    dice8:dice8,
    dice7:dice7,

}
})
}
    render(){
        return(
<div className= 'The Big Roll'>
<Die pips={this.state.dice8}/>
<Die pips={this.state.dice7}/>
<div>
<button onClick={this.handleRoll}className="DiceButton">RollDice</button>
</div>
</div>  
        )
 }
}
export default Dice

