import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import RegisterModal from '../modals/RegisterModal'
import SignInModal from '../modals/SignInModal'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            openForm:false,
            loggedIn:this.props.loggedIn
        }
    }

    formDisplay = () =>{
        if(this.state.openForm){
            this.setState({
                openForm:false
            })
        }else{
            this.setState({
                openForm:true
            })
        }
    }

    render(){
        const loggedIn = this.props.loggedIn
        let regBtn
        let signOut
        let signIn
        if(loggedIn){
            signOut = <Button id="sign-out" variant="outline-secondary">Sign Out</Button>
            regBtn=<></>
            signIn=<></>
            // <NewApartment handleAddApartment={this.props.handleAddApartment} formDisplay={this.formDisplay}/>
        }else{
            signOut=<></>
            regBtn = <RegisterModal register={this.props.register} loggedIn={this.props.loggedIn} users={this.props.users} handleChange={this.props.handleChange}/>
            signIn=<SignInModal login={this.props.login} handleChange={this.props.handleChange}/>
        }
        return(
            // <div className="nav">
            //     <img src="./fullLogo.png" id="navLogo" alt="yellow circe with black house"/>
            //         <div id="nav-listing">
            //             <h3>Listings</h3>
            //             <Button onClick={this.formDisplay} variant="outline-secondary"><i class="bi bi-house-door" style={{fontSize:20}}></i>Add New Listing</Button>
            //             {content}
            //         </div>
                        
            //         <div id="user-nav">
            //             <h3>Account</h3>
            //             <Button variant="outline-secondary"><i class="bi bi-door-open" style={{fontSize:20}}></i>Log Out</Button>
            //         </div>
            // </div>

            <div className="nav-bar">
                <img src="./Logo.png" id="landing-logo" alt="yellow circle with black house"/>
                <h1>HouseHuntr</h1> 
                {signOut}
                {regBtn}
                {signIn}
            </div>
        )
    }
}


export default NavBar

