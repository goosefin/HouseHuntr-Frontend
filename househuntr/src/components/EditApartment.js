import React, { Component } from 'react'

class EditApartment extends Component{
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
            outdoor_space: this.props.putdoor_space,
            elevator: this.props.elevator,
            doorman:this.props.doorman,
            link:this.props.link,
            scheduled_showing: this.props.scheduled_showing,
            scheduled_showing_time:this.props.scheduled_showing_time,
            seen: this.props.seen,
            applied: this.props.applied,
            id: this.props.id
        }
    }

    handleChange = (e) =>{
        console.log(e.target.id)
        console.log(e.target.value)
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    submit = (e) =>{
        e.preventDefault()
        const apartment = this.state
        this.props.editApartment(apartment)
        this.props.toggleForm()
    }

    render(){
        return(
            <div>
                <h2>Edit Apartment</h2>
                <form onSubmit={this.submit}>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" onChange={this.handleChange} value={this.state.address}/>
                    <label htmlFor="bedrooms">Bedrooms:</label>
                    <input type="number" id="bedrooms" name="bedrooms" onChange={this.handleChange} value={this.state.bedrooms}/>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" onChange={this.handleChange} value={this.state.price}/>
                    <label htmlFor="cats">Cats:</label>
                    <input type="checkbox" id="cats" name="address" onChange={this.handleChange} value={this.state.cats} checked={this.state.cats}/>
                    <label htmlFor="dogs">Dogs:</label>
                    <input type="checkbox" id="dogs" name="dogs" onChange={this.handleChange} value={this.state.dogs} checked={this.state.dogs}/>
                    <label htmlFor="washer">Washer:</label>
                    <input type="checkbox" id="washer" name="washer" onChange={this.handleChange} value={this.state.washer} checked={this.state.washer}/>
                    <label htmlFor="dryer">Dryer:</label>
                    <input type="checkbox" id="dryer" name="dryer" onChange={this.handleChange} value={this.state.dryer} checked={this.state.dryer}/>
                    <label htmlFor="dishwasher">Dishwasher:</label>
                    <input type="checkbox" id="dishwasher" name="dishwasher" onChange={this.handleChange} value={this.state.dishwasher} checked={this.state.dishwasher}/>
                    <label htmlFor="outdoor_space">Outdoor Space:</label>
                    <input type="checkbox" id="outdoor_space" name="outdoor_space" onChange={this.handleChange} value={this.state.outdoor_space} checked={this.state.outdoor_space}/>
                    <label htmlFor="elevator">Elevator:</label>
                    <input type="checkbox" id="elevator" name="elevator" onChange={this.handleChange} value={this.state.elevator} checked={this.state.elevator}/>
                    <label htmlFor="doorman">Doorman:</label>
                    <input type="checkbox" id="doorman" name="doorman" onChange={this.handleChange} value={this.state.doorman} checked={this.state.dogs}/>
                    <label htmlFor="link">Link:</label>
                    <input type="text" id="link" name="link" onChange={this.handleChange} value={this.state.link}/>
                    <label htmlFor="scheduled_showing">Scheduled Showing:</label>
                    <input type="checkbox" id="scheduled_showing" name="scheduled_showing" onChange={this.handleChange} value={this.state.scheduled_showing} checked={this.state.scheduled_showing}/>
                    <label htmlFor="scheduled_showing_time">Scheduled Showing Time:</label>
                    <input type="text" id="scheduled_showing_time" name="scheduled_showing_time" onChange={this.handleChange} value={this.state.scheduled_showing_time}/>
                    <label htmlFor="seen">Seen:</label>
                    <input type="checkbox" id="seen" name="seen" onChange={this.handleChange} checked={this.state.seen}/>
                    <label htmlFor="applied">Applied:</label>
                    <input type="checkbox" id="applied" name="applied" onChange={this.handleChange} checked={this.state.applied}/>
                    <input type="submit" value="Add new apartment"/>
                </form>
            </div>
        )
    }
}

export default EditApartment