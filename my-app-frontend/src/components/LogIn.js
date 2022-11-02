import React from "react";


function LogIn({ user }){
    return(
        <div>
            <form>
                <label for="first-name-field">First Name</label>
                    <input id="first-name-field" className="user-form-input"></input>
                <label for="last-name-field">Last Name</label>
                    <input id="last-name-field" className="user-form-input"></input>
                <label for="username-field">UserName</label>
                    <input id="username-field" className="user-form-input"></input>
                <label for="password-field">Password</label>
                    <input id="password-field" className="user-form-input"></input>
                <label for="img-field">Profile Image</label>
                    <input id="img-field" className="user-form-input"></input>
            </form>
        </div>
    )
}

export default LogIn