import React from "react";
import { useState, useEffect } from "react";
import NewUserForm from "./NewUserForm";
import ExistingUserForm from "./ExistingUserForm";


function LogIn({ setUser }){
    const [newUser, changeExistingUser] = useState(true)
    function handleClick(){
        changeExistingUser(!newUser)
    }
    return(
        <div>
            {newUser? <h1>Sign-up</h1> : <h1>Log in</h1>}
            {newUser? <NewUserForm setUser={setUser}/> : <ExistingUserForm setUser={setUser}/>}
            <button onClick={handleClick}>{newUser? "Already have an account? Sign in" : "Click to Sign Up"}</button>
        </div>
    )
}

export default LogIn