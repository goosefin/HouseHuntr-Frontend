import React ,{ useState } from 'react'

const Login = (props) =>{
    return(
        <div>
            <form onSubmit={props.login}>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email'/>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password'/>
                <input type='submit' value='Login'/>
            </form>
        </div>
    )
}

export default Login