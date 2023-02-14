import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import NewApartment from './NewApartment'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            openForm:false
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
        const form = this.state.openForm
        let content 
        if(form){
            content = <NewApartment handleAddApartment={this.props.handleAddApartment} formDisplay={this.formDisplay}/>
        }else{
            content = <></>
        }
        return(
            <div className="nav">
                <img src="./fullLogo.png" id="navLogo" alt="yellow circe with black house"/>
                    <div id="nav-listing">
                        <h3>Listings</h3>
                        <Button onClick={this.formDisplay} variant="outline-secondary"><i class="bi bi-house-door" style={{fontSize:20}}></i>Add New Listing</Button>
                        {content}
                    </div>
                        
                    <div id="user-nav">
                        <h3>Account</h3>
                        <Button variant="outline-secondary"><i class="bi bi-door-open" style={{fontSize:20}}></i>Log Out</Button>
                    </div>
            </div>
        )
    }
}


export default NavBar