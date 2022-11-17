import React,{ Component } from 'react'

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            email:''
        }
    }

    render(){
        return(
            <div>
            <form onSubmit={this.props.register}>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' onChange={this.props.handleChange} />
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' onChange={this.props.handleChange}/>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' onChange={this.props.handleChange}/>
                <input type='submit' value='Register'/>
            </form>
        </div>
        )
    }
}

export default Register