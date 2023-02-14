import React, {Component} from 'react'
import Register from './Register'
import Login from './Login'

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
                <div id="title-des">
                    <div id="title">
                        <img src="./fullLogo.png" id="landing-logo" alt="yellow circle with black house"/>
                        <h1>HouseHuntr</h1> 
                    </div>

                    <div id="description">
                        <h3>Organize your apartment search</h3>
                        <p>Moving is considered to be one of the top 3 most stressfull events in a persons life. HouseHuntr simplifies the search by optimizing the ability to track the apartment you like from any platform you use. Our platform was designed with simplicity in mind, just upload all of the information related to the listing and you use our dashboard to update as you progress through the application process</p>
                        <h6><b>Create an account now for free or log in to start!</b></h6>
                    </div>
                </div>

                <div id="log-reg">
                    <h3>Register</h3>
                    <Register register={this.props.register} handleChange={this.props.handleChange}/>
                    <h3>Log In</h3>
                    <Login login={this.props.login} handleChange={this.props.handleChange}/>
                </div>
            </div>
        )
    }
}

export default Landing