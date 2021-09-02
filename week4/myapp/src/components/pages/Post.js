import React, { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import data from "./../../data/posts.json";
function Post (){

    let slug=useParams().slug;
    console.log(slug)

    let[post,setPost]=useState({})

    
    useEffect(()=>{
       setPost (data.find(post=>post.slug===slug))
},[])
 
        return (
            <div>
<h3>{post.title}</h3>
            </div>
        )
    }

export default  Post;