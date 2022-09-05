import React, { useContext } from 'react';
import { useRef } from 'react';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import './Login.css';

export default function login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value);
        // console.log(password.current.value);
        loginCall(
            {
                email:email.current.value,
                password:password.current.value,
            }
        , dispatch);
    };

    console.log(user);
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real Social Media</h3>
                <span className="loginDesc">Real Social Media, On your hand</span>
            </div>
            <form className="loginRight" onSubmit={(e) => handleSubmit(e)}>
                <div className="loginBox">
                    <p className="loginMsg">Login Here</p>
                    <input type="email" className="loginInput" placeholder='E-Mail' required ref={email}/>
                    <input type="password" className="loginInput" placeholder='Password' required minLength="5" ref={password}/>
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Password Forget ?</span>
                    <button className="loginRegisterButton">Register Account</button>
                </div>
            </form>
        </div>
    </div>
  )
}
