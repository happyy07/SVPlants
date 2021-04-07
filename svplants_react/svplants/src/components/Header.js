import React from 'react';
import logo from '../images/logo.jpg';
import {Link, Redirect, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Header()
{
    return(
        <header>
            <Router>
            <img src={logo} class="logo"></img>
            <nav>
                <ul>
                    <li>
                        {/* <Route path='/' component={Welcome}>Welcome</Route> */}
                        <Link to={"/Welcome"}>Welcome</Link>
                    </li>
                    <li>
                    <a href="Home">Home</a>
                    </li>
                </ul>
            </nav>
            </Router>
        </header>
    )
}

export default Header;