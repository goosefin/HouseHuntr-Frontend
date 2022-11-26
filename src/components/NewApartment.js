import React, {Component} from 'react'
import {Form,Button,FloatingLabel} from 'react-bootstrap'

class NewApartment extends Component{
    constructor(props){
        super(props)
        this.state = {
            address: '',
            bedrooms: 0,
            price: 0,
            cats:false,
            dogs:false,
            washer: false,
            dryer: false,
            dishwasher: false,
            outdoor_space: false,
            elevator: false,
            doorman:false,
            link: '',
            scheduled_showing: false,
            scheduled_showing_time:'',
            seen: false,
            applied: false,
        }
    }

    newApartment = (e) =>{
        e.preventDefault()
        // console.log(e.target)
        const apartmentData= {
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
          applied:this.state.applied
        }
        // console.log('Apartment Data', apartmentData)
        for(const key in apartmentData){
          //console.log(apartmentData[key])
          if(apartmentData[key] === undefined){
            apartmentData[key] = false
          }else if(apartmentData[key] === 'on'){
            apartmentData[key] = true
          }else{
            apartmentData[key] = apartmentData[key]
          }
        }
        // console.log('Looped Object', apartmentData)
        fetch('https://househuntr-backend.herokuapp.com/api/v1/apartments/', {
            method: 'POST',
            body: JSON.stringify(apartmentData),
            headers:{
              'Content-Type':'application/json'
            },
            credentials:'include'
        })
        .then(res =>{
            // console.log(res)
            if(res.status === 201){
                return res.json()
            } else{
                return []
            }
        })
        .then(data =>{
            // console.log(data.data)
            this.props.handleAddApartment(data.data)
            this.props.formDisplay()
            this.setState({
                address: '',
                bedrooms: 0,
                price: 0,
                cats:false,
                dogs:false,
                washer: false,
                dryer: false,
                dishwasher: false,
                outdoor_space: false,
                elevator: false,
                doorman:false,
                link: '',
                scheduled_showing: false,
                scheduled_showing_time:'',
                seen: false,
                applied: false,
            })
        })
    }

    handleChange = (e) =>{
        console.log(e.target.id)
        console.log(e.target.value)
        this.setState({
          [e.target.id]:e.target.value
        })
    }
    
    render(){
        return(
            <div>
                <h2>New Apartment Form</h2>
                <form id="new_apt_form" onSubmit={this.newApartment}>
                    <FloatingLabel
                        label="Address"
                        className="mb-3"
                    >
                        <Form.Control 
                        type="text" 
                        placeholder="555 West Dr"
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
                        placeholder="2"
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
                        placeholder="2500"
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
                    />

                    <Form.Check 
                        type="switch"
                        id="dogs"
                        name="dogs"
                        label="Dogs"
                        onChange={this.handleChange}
                    />

                    <Form.Check 
                        type="switch"
                        id="washer"
                        name="washer"
                        label="Washer"
                        onChange={this.handleChange}
                    />

                    <Form.Check 
                        type="switch"
                        id="dryer"
                        name="dryer"
                        label="Dryer"
                        onChange={this.handleChange}
                    />
                    
                    <Form.Check 
                        type="switch"
                        id="dishwasher"
                        name="dishwasher"
                        label="Dishwasher"
                        onChange={this.handleChange}
                    />

                    <Form.Check 
                        type="switch"
                        id="outdoor_space"
                        name="outdoor_space"
                        label="Outdoor Space"
                        onChange={this.handleChange}
                    />

                    <Form.Check 
                        type="switch"
                        id="elevator"
                        name="elevator"
                        label="Elevator"
                        onChange={this.handleChange}
                    />

                    <Form.Check 
                        type="switch"
                        id="doorman"
                        name="doorman"
                        label="Doorman"
                        onChange={this.handleChange}
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
                        />
                    </FloatingLabel>

                    <Form.Check 
                        type="switch"
                        id="scheduled_showing"
                        name="scheduled_showing"
                        label="Scheduled Showing"
                        onChange={this.handleChange}
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
                        />
                    </FloatingLabel>
                    
                    <Form.Check 
                        type="switch"
                        id="seen_n"
                        name="seen"
                        label="Seen"
                        onChange={this.handleChange}
                    />
                    
                    <Form.Check 
                        type="switch"
                        id="applied_n"
                        name="applied"
                        label="Applied"
                        onChange={this.handleChange}
                    />
                    
                    <Button variant='outline-secondary' size="md" type="submit">Add new apartment</Button>
                </form>
            </div>
        )
    }
}

export default NewApartment