import React, {Component} from 'react'
import Register from './Register'
import Login from './Login'
import {Button, Carousel} from 'react-bootstrap'

class Landing extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:this.props.users,
            loggedIn: this.props.loggedIn
        }
    }

    render(){
        return(
            <div id="landing">
                <div id="title">
                    <img src="./Logo.png" id="landing-logo" alt="yellow circle with black house"/>
                    <h1>HouseHuntr</h1> 
                    <Button id="landing-reg-log" variant="outline-secondary">Register/Log In</Button>
                </div>
                
                <div id="carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img src="./square-xxl.png" alt="black square" id="sample"/>
                        </Carousel.Item>

                        <Carousel.Caption>
                            <p>Sample text lorem ipsum Sample text lorem ipsum Sample text lorem ipsum Sample text lorem ipsum  </p>
                        </Carousel.Caption>
                    </Carousel>

                    {/* <div id="description">
                        <h3>Organize your apartment search</h3>
                        <p>Moving is considered to be one of the top 3 most stressfull events in a persons life. HouseHuntr simplifies the search by optimizing the ability to track the apartment you like from any platform you use. Our platform was designed with simplicity in mind, just upload all of the information related to the listing and you use our dashboard to update as you progress through the application process</p>
                        <h6><b>Create an account now for free or log in to start!</b></h6>
                    </div> */}
                </div>

                {/* <div id="log-reg">
                    <h3>Register</h3>
                    <Register register={this.props.register} handleChange={this.props.handleChange}/>
                    <h3>Log In</h3>
                    <Login login={this.props.login} handleChange={this.props.handleChange}/>
                </div> */}
            </div>
        )
    }
}

export default Landing