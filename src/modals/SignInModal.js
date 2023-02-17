import React, {Component} from 'react'
import {Form,Button,Modal} from 'react-bootstrap'

class SignInModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            open:false,
            email:'',
            password:''
        }
    }

    openModal = () => this.setState({open:true})

    closeModal = () => this.setState({open:false})

    render(){
        return(
            <div>
                <Button variant="secondary" onClick={this.openModal}>Sign In</Button>

                <Modal show={this.state.open} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form className="log-reg-forms" onSubmit={this.props.login}>
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
                                <Form.Label htmlFor='password'>Password:</Form.Label>
                                <Form.Control 
                                    type='password' 
                                    id='password' 
                                    name='password' 
                                    onChange={this.props.handleChange} 
                                />
                            </Form.Group>

                            <Button variant='outline-secondary' size="md" type="submit" onClick={this.closeModal}>Sign In</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default SignInModal