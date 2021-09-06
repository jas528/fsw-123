import { useState, useEffect } from "react"
import axios from "axios"
function GiphySearch({initialQuery}){

const [imgSrc, setImageSrc]=useState("")
const [alt, setAlt]=useState("")
//need another hook for the input value. 

const fetchImage=(query=initialQuery)=>{
axios.get(`https://api.giphy.com/v1/gifs/random?api_key=BtiKnJZ5QHnBRHTGKTFqdeZGhugIKCpZ&tag=cat`)
.then(response=>{
    console.log(response)
    setImageSrc(response.data.data.fixed_height_downsampled_url)
   setAlt (response.data.data.title)
})
}
//need a handle change function
const handleSubmit=(evt) =>{
//inide o f this handlesubimt you need to call the fetch image function and give it the value of the input. 
}
useEffect(()=>{
    fetchImage(initialQuery)
},[])

return(
        <div class= "GispyDiv">
            <input type='text'></input> 
      <button>Search</button>
      {/* button needs a handle submit, input needs a handle change */}
      <img src={imgSrc} alt={alt} width="500" height="600"></img>
        </div>

    )
}

export default GiphySearch