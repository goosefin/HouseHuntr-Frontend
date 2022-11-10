import React,{ useState } from 'react'

const Register = (props) =>{
    return(
        <div>
            <form onSubmit={props.register}>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username'/>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email'/>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password'/>
                <input type='submit' value='Register'/>
            </form>
        </div>
    )
}

export default Register