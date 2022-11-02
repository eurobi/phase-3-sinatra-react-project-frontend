import React, { useReducer } from "react";
import { NavLink } from 'react-router-dom';

function NavBar({setUser, user}){

    function handleClick(){
        setUser(null)
    }
    return(
        <>
            {user !== null? <NavLink onClick={handleClick} className='navItem' to='/login'>Log out</NavLink> :<NavLink className='navItem' to='/login'>Log in</NavLink>}
            <NavLink className='navItem' to='/home'>Home</NavLink>
            <NavLink className='navItem' to='/me'>{user? user.user_name : <></>}</NavLink>
        </>
    )
}

export default NavBar