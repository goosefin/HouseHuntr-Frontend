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
                
                <div id="carousel-div">
                    <Carousel >
                        <Carousel.Item>
                            <img src="./square-xxl.png" alt="black square" id="sample"/>
                                <Carousel.Caption>
                                <p>Sample text lorem ipsum Sample text lorem ipsum Sample text lorem ipsum Sample text lorem ipsum  </p>
                                </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src="./square-xxl.png" alt="black square" id="sample"/>
                                <Carousel.Caption>
                                <p>Sample text lorem ipsum Sample text lorem ipsum Sample text lorem ipsum Sample text lorem ipsum  </p>
                                </Carousel.Caption>
                        </Carousel.Item>                       
                    </Carousel>
                </div>

                <div id="description">
                    <div class="land-des">
                        <p>Organize listings based on where you are in the application process</p>
                    </div>

                    <div class="land-des" id="land-des-two">
                        <p>Created for renters, home buyers and even agents and brokers</p>
                    </div>

                    <div class="land-des">
                        <p>See all of your saved listings in one centralized application</p>
                    </div>
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