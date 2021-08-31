import React from "react";
import {Link} from 'react-router-dom'
class Header extends React.Component{
    render(){
        return (
            <nav>
                <Link to="/blog"> Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        )
    }
}
export default Header;