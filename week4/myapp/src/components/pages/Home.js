import data from "./../../data/posts.json";
import React from "react";
import {Link} from 'react-router-dom'
class Home extends React.Component{

    render(){
        return (
            <div> Home
{data.map(function(post){
    console.log("Post:",post) 
    return(
<Link to={"/post/"+post.slug}key={post.slug}>
    {post.title}
</Link>
    )
    })}    </div>
        )
    }
}
export default Home;