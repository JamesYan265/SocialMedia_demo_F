import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import './Register.css';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // check password and passwordConfirmation is same or not same
        if (password.current.value !== passwordConfirmation.current.value) {
            //setCustomValidity 係HTML插件
            passwordConfirmation.current.setCustomValidity("Password not correct !");
        } else {
            try {
                //register API
                const user = {
                    username : username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="Register">
        <div className="RegisterWrapper">
            <div className="RegisterLeft">
                <h3 className='RegisterLogo'>Real Social Media</h3>
                <span className="RegisterDesc">Real Social Media, On your hand</span>
            </div>
            <div className="RegisterRight">
                <form className="RegisterBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className="RegisterMsg">Register Form</p>
                    <input type="email" className="RegisterInput" placeholder='Email' required ref={email}/>
                    <input type="text" className="RegisterInput" placeholder='Username' required ref={username}/>
                    <input type="password" className="RegisterInput" placeholder='Password' required minLength="6" ref={password}/>
                    <input type="password" className="RegisterInput" placeholder='Confirm Password' required minLength="6" ref={passwordConfirmation}/>
                    <button className="RegisterButton" type='submit'>Sign Up</button>
                    <button className="loginButton" type="button">Login</button>
                </form>
            </div>
        </div>
        </div>
    )
}
