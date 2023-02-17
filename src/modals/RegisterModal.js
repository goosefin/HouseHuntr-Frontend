import React, {Component} from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

class RegisterModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            open:false,
            username:'',
            password:'',
            email:''
        }
    }

    openModal = () => this.setState({open:true})

    closeModal = () => this.setState({open:false})

    render(){
        return(
            <div id="landing-reg-log">
                <Button variant="secondary" onClick={this.openModal}>
                Register</Button>

                <Modal show={this.state.open} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form className="log-reg-forms" onSubmit={this.props.register}>
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

                        <Button variant='outline-secondary' size="md" type="submit" onClick={this.closeModal}>Register</Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default RegisterModal