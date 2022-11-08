import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function NewUserForm({setUser}){
    const history = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        profileImg: ""
    })

    const [userNames, setUserNames] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/users",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.firstName,
                last_name: formData.lastName,
                user_name: formData.userName,
                password: formData.password,
                profile_img: formData.profileImg
            })
        })
        .then(r => r.json())
        .then(newUser => {
            setUserNames([...userNames, newUser.user_name])
            setUser(newUser)
            history('/')
        }) 
    } 

    useEffect(() => {
        fetch('http://localhost:9292/usernames')
        .then(r => r.json())
        .then(users => setUserNames(users))
    },[])

    return(
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <label for="first-name-field">First Name</label>
                    <input value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} id="first-name-field" className="user-form-input"></input>
                <label for="last-name-field">Last Name</label>
                    <input value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} id="last-name-field" className="user-form-input"></input>
                <label for="username-field">UserName</label>
                    <input value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})} id="username-field" className="user-form-input"></input>
                <label for="password-field">Password</label>
                    <input value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} id="password-field" className="user-form-input"></input>
                <label for="img-field">Profile Image</label>
                    <input value={formData.profileImg} onChange={(e) => setFormData({...formData, profileImg: e.target.value})} id="img-field" className="user-form-input"></input>
                <input className="post-edit-button" type='submit'></input>
            </form>
        </div>
    )
}

export default NewUserForm