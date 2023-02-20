import React, {Component} from 'react'
import {Carousel} from 'react-bootstrap'
import NavBar from './NavBar'
import RegisterModal from '../modals/RegisterModal'
import SignInModal from '../modals/SignInModal'


class Landing extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:this.props.users,
            loggedIn: this.props.loggedIn,
        }
    }

    render(){
        return(
            <div id="landing">
                {/* <div className="nav-bar">
                    <img src="./Logo.png" id="landing-logo" alt="yellow circle with black house"/>
                    <h1>HouseHuntr</h1> 
                    <RegisterModal register={this.props.register} loggedIn={this.props.loggedIn} users={this.props.users} handleChange={this.props.handleChange}/>
                    <SignInModal login={this.props.login} handleChange={this.props.handleChange}/>
                </div> */}
                <NavBar handleChange={this.props.handleChange} register={this.props.register} login={this.props.login} users={this.props.user} loggedIn={this.props.loggedIn}/>
                
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
                        <i class="bi bi-sort-down" style={{fontSize:30}}></i>
                        <p>Organize listings based on where you are in the application process</p>
                    </div>

                    <div class="land-des" id="land-des-two">
                        <i class="bi bi-key" style={{fontSize:30}}></i>
                        <p>Created for renters, home buyers and even agents and brokers</p>
                    </div>

                    <div class="land-des">
                        <i class="bi bi-save2" style={{fontSize:30}}></i>
                        <p>See all of your saved listings in one centralized application</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing