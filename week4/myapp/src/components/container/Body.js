import React from "react";
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from "./../pages/Home";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import Post from "./../pages/Post";

class Body extends React.Component{

    render(){
        return (
            <div>
<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/post/:slug">
            <Post />
          </Route>
        </Switch>
            </div>
            
        )
    }
}
export default Body;