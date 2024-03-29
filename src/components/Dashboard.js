import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import NavBar from './NavBar'
import Wishlist from './Wishlist';
import Footer from './Footer'
import Scheduled from './Scheduled';
import Seen from './Seen'
import Applied from './Applied';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn:this.props.loggedIn
        }
    }

    render(){
        return(
            <div className='font-dash'>
                {/* <div className="nav-bar">
                    <img src="./Logo.png" id="landing-logo" alt="yellow circle with black house"/>
                    <h1>HouseHuntr</h1> 
                    <Button id="sign-out" variant="outline-secondary">Sign Out</Button>
                </div> */}

                <NavBar handleAddApartment={this.props.handleAddApartment} loggedIn={this.props.loggedIn}/>
                <div id="dash-ctrl">
                    <div className='list'>
                        <Wishlist apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                        <Scheduled apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                        <Seen apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                        <Applied apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                    </div> 
                </div> 
                <Footer/>
            </div>
        )
    }
}

export default Dashboard