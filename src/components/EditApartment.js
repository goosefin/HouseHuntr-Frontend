import React, { Component } from 'react'
import {Form, Button, FloatingLabel} from 'react-bootstrap'

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
        console.log(e.target.checked)
        console.log(e.target.type)
        console.log(e.target.id)
        if(e.target.checked && e.target.type === 'checkbox'){
            console.log('inside first conditional')
            this.setState({
                [e.target.id]:true
            })
        }else if(!e.target.checked && e.target.type === 'checkbox'){
            console.log('inside second conditional')
            this.setState({
                [e.target.id]:false
            })
        }else if(e.target.type === 'text' || e.target.type === 'number'){
            console.log('inside third conditional')
            this.setState({
                [e.target.id]:e.target.value
            })
        }
    }

    submit = (e) =>{
        e.preventDefault()
        const apartment = {
            address:this.state.address,
            bedrooms:this.state.bedrooms,
            price:this.state.price,
            cats:this.state.cats,
            dogs:this.state.dogs,
            washer:this.state.washer,
            dryer:this.state.dryer,
            dishwasher:this.state.dishwasher,
            outdoor_space:this.state.outdoor_space,
            elevator:this.state.elevator,
            doorman:this.state.doorman,
            link:this.state.link,
            scheduled_showing: this.state.scheduled_showing,
            scheduled_showing_time:this.state.scheduled_showing_time,
            seen:this.state.seen,
            applied:this.state.applied,
            id:this.state.id
        }
        this.props.editApartment(apartment)
        this.props.toggleForm()
    }

    render(){
        return(
            <div className='edit-form'>
                <form onSubmit={this.submit}>
                    <FloatingLabel
                        label="Address"
                        className="mb-3"
                    >
                        <Form.Control 
                        type="text" 
                        placeholder={this.state.address}
                        value={this.state.address}
                        id="address"
                        name="address"
                        onChange={this.handleChange}
                        />
                    </FloatingLabel>
                    
                    <FloatingLabel
                        label="Bedrooms"
                        className="mb-3"
                    >
                        <Form.Control 
                        type="number" 
                        placeholder={this.state.bedrooms}
                        value={this.state.bedrooms}
                        id="bedrooms"
                        name="bedrooms"
                        onChange={this.handleChange}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        label="Price"
                        className="mb-3"
                    >
                        <Form.Control 
                        type="number" 
                        placeholder={this.state.price}
                        value={this.state.price}
                        id="price"
                        name="price"
                        onChange={this.handleChange}
                        />
                    </FloatingLabel>

                    <Form.Check 
                        type="switch"
                        id="cats"
                        name="cats"
                        label="Cats"
                        onChange={this.handleChange}
                        defaultChecked={this.state.cats} 
                    />

                    <Form.Check 
                        type="switch"
                        id="dogs"
                        name="dogs"
                        label="Dogs"
                        onChange={this.handleChange}
                        defaultChecked={this.state.dogs}
                    />

                    <Form.Check 
                        type="switch"
                        id="washer"
                        name="washer"
                        label="Washer"
                        onChange={this.handleChange}
                        defaultChecked={this.state.washer}
                    />

                    <Form.Check 
                        type="switch"
                        id="dryer"
                        name="dryer"
                        label="Dryer"
                        onChange={this.handleChange}
                        defaultChecked={this.state.dryer}
                    />
                    
                    <Form.Check 
                        type="switch"
                        id="dishwasher"
                        name="dishwasher"
                        label="Dishwasher"
                        onChange={this.handleChange}
                        defaultChecked={this.state.dishwasher}
                    />

                    <Form.Check 
                        type="switch"
                        id="outdoor_space"
                        name="outdoor_space"
                        label="Outdoor Space"
                        onChange={this.handleChange}
                        defaultChecked={this.state.outdoor_space}
                    />

                    <Form.Check 
                        type="switch"
                        id="elevator"
                        name="elevator"
                        label="Elevator"
                        onChange={this.handleChange}
                        defaultChecked={this.state.elevator}
                    />

                    <Form.Check 
                        type="switch"
                        id="doorman"
                        name="doorman"
                        label="Doorman"
                        onChange={this.handleChange}
                        defaultChecked={this.state.doorman}
                    />

                    <FloatingLabel
                        label="Link"
                        className="mb-3"
                    >
                        <Form.Control 
                        type="text" 
                        placeholder="streeteasy.com"
                        id="link"
                        name="link"
                        onChange={this.handleChange}
                        value={this.state.link}
                        />
                    </FloatingLabel>

                    <Form.Check 
                        type="switch"
                        id="scheduled_showing"
                        name="scheduled_showing"
                        label="Scheduled Showing"
                        onChange={this.handleChange}
                        defaultChecked={this.state.scheduled_showing}
                    />

                    <FloatingLabel
                        label="Scheduled Showing Time"
                        className="mb-3"
                    >
                        <Form.Control 
                        type="text" 
                        placeholder="Monday, 27th"
                        id="scheduled_showing_time"
                        name="scheduled_showing_time"
                        onChange={this.handleChange}
                        value={this.state.scheduled_showing_time}
                        />
                    </FloatingLabel>
                    
                    <Form.Check 
                        type="switch"
                        id="seen_e"
                        name="seen"
                        label="Seen"
                        onChange={this.handleChange}
                        defaultChecked={this.state.seen}
                    />
                    
                    <Form.Check 
                        type="switch"
                        id="applied_e"
                        name="applied"
                        label="Applied"
                        onChange={this.handleChange}
                        defaultChecked={this.state.applied}
                    />
                    
                    <Button variant='outline-secondary' size="md" type="submit" id="edit-btn">Edit Apartment</Button>
                </form>
            </div>
        )
    }
}

export default EditApartment