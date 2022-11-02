import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <>
            <NavLink className='navItem' to='/'>Log In</NavLink>
            <NavLink className='navItem' to='/home'>Home</NavLink>
            <NavLink className='navItem' to='/me'>Me</NavLink>
        </>
    )
}

export default NavBar