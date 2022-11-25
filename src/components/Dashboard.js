import React, {Component} from 'react'
import NavBar from './NavBar'
import Wishlist from './Wishlist';
import Login from './Login'
import Register from './Register';
import Footer from './Footer'
import Scheduled from './Scheduled';
import Seen from './Seen'
import Applied from './Applied';

class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <NavBar handleAddApartment={this.props.handleAddApartment}/>
                <div className='list'>
                    <Wishlist apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                    <Scheduled apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                    <Seen apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                    <Applied apartments={this.props.apartments} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                </div> 
            <Footer />
            </>   
        )
    }
}

export default Dashboard