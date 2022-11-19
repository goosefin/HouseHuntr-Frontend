import React, { Component } from 'react'

class Apartment extends Component{
    constructor(props){
        super(props)
        this.state = {
            address: this.props.address,
            bedrooms: this.props.bedrooms,
            price: this.props.price,
            cats:this.props.cats,
            dogs:this.props.dogs,
            washer: this.props.washer,
            dryer: this.props.dryer,
            dishwasher: this.props.dishwasher,
            outdoor_space: this.props.outdoor_space,
            elevator: this.props.elevator,
            doorman:this.props.doorman,
            link: this.props.link,
            scheduled_showing: this.props.scheduled_showing,
            scheduled_showing_time: this.props.scheduled_showing_time,
            seen: this.props.seen,
            applied: this.props.applied,
        }
    }

    render(){
        return(
            <div>
            <h3>{this.state.address}</h3>
                <ul>
                    <li>{this.state.bedrooms}</li>
                    <li>{this.state.price}</li>
                    <li>{this.state.pets}</li>
                    <li>{this.state.cats}</li>
                    <li>{this.state.dogs}</li>
                    <li>{this.state.washer}</li>
                    <li>{this.state.dryer}</li>
                    <li>{this.state.dishwasher}</li>
                    <li>{this.state.outdoor_space}</li>
                    <li>{this.state.elevator}</li>
                    <li>{this.state.doorman}</li>
                    <li>{this.state.link}</li>
                    <li>{this.state.scheduled_showing}</li>
                    <li>{this.state.scheduled_showing_time}</li>
                    <li>{this.state.seen}</li>
                    <li>{this.state.applied}</li>
                </ul>
            </div>
        )
    }
}

export default Apartment