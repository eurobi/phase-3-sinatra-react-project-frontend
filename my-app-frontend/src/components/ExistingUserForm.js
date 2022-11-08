import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'


function ExistingUserForm({setUser}){
    const history = useNavigate()
    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9292/search-users/${formData.userName}`)
        .then(r => r.json())
        .then(user => {
            if(user === null){
                alert(`Cannot find user with username: ${formData.userName}`)
            }
            else if(user.password !== formData.password){
                alert(`Incorrect password`)
            }
            else{
                setUser(user)
                history('/')

            }
        })
        
    } 


    return(
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <label for="username-field">UserName</label>
                    <input value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})} id="username-field" className="user-form-input"></input>
                <label for="password-field">Password</label>
                    <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} id="password-field" className="user-form-input"></input>
                <input className="post-edit-button" type='submit'></input>
            </form>
        </div>
    )
}

export default ExistingUserForm