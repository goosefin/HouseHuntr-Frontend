import React from 'react'
import Button from 'react-bootstrap/Button'

const NavBar = () =>{
    return(
        <div className="nav">
            <img src="./fullLogo.png" id="navLogo"/>
            <div id="nav-lsitings">
                <h3>Listings</h3>
                <Button variant="outline-secondary"><i class="bi bi-house-door" style={{fontSize:20}}></i>Add New Listing</Button>
            </div>
            
            <div id="user-nav">
                <h3>Account</h3>
                <Button variant="outline-secondary"><i class="bi bi-door-open" style={{fontSize:20}}></i>Log Out</Button>
            </div>
            {/* 
                search bar possibly
                add new listing 
                from to add listing
                logout 
            */}
        </div>
    )
}

export default NavBar