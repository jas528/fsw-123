import React   from "react"

class Die extends React.Component{
constructor (props){
    super(props)
}

render(){
let imgSrc= './images/die'+ this.props.pip+'.jpg'
let imgID= 'img'+ this.props.id
return(
    <img id ={imgID} style={{padding: 15}} scr={imgSrc} alt ='dice'/>
)

}
}
export default Die