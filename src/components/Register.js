import React,{ Component } from 'react'
import {Form,Button} from 'react-bootstrap'

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
            <form className="log-reg-forms" onSubmit={this.props.register}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='username'>Username:</Form.Label>
                    <Form.Control 
                        type='text' 
                        id='username' 
                        name='username' 
                        onChange={this.props.handleChange} 
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control 
                        type='email' 
                        id='email' 
                        name='email' 
                        onChange={this.props.handleChange} 
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='username'>Password:</Form.Label>
                    <Form.Control 
                        type='password' 
                        id='password' 
                        name='password' 
                        onChange={this.props.handleChange} 
                    />
                </Form.Group>

                <Button variant='outline-secondary' size="md" type="submit">Register</Button>
            </form>
        </div>
        )
    }
}

export default Register