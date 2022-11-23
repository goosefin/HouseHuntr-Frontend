import React, {Component} from 'react'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            password:'',
            email:''
        }
    }

    render(){
        return(
            <div>
            <form onSubmit={this.props.login}>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' onChange={this.props.handleChange}/>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' onChange={this.props.handleChange}/>
                <input type='submit' value='Login'/>
            </form>
            </div>
        )
    }
}

export default Login