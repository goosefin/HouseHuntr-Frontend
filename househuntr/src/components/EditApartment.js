import React, { Component } from 'react'

class EditApartment extends Component{
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

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    editApartment= (e,apartment) =>{
        e.preventDefault()
        const apartment = this.state
        let url = 'http://localhost:8000/api/v1/apartments/' + apartment.id
        fetch(url , {
            method: 'PUT',
            body: JSON.stringify(apartment),
            headers:{
              'Content-Type':'application/json'
            },
            credentials:'include'
        })
        .then(res =>{
            console.log(res)
            if(res.status === 200){
                return res.json()
            } else{
                return []
            }
        })
        .then(data =>{
            console.log(data.data)
            this.setState({
              apartments:data.data
            })
        })
    }

    render(){
        return(
            <div>
                <h2>New Apartment Form</h2>
                <form onSubmit={() => this.editApartment()}>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" onChange={this.handleChange}/>
                    <label htmlFor="bedrooms">Bedrooms:</label>
                    <input type="number" id="bedrooms" name="bedrooms" onChange={this.handleChange}/>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" onChange={this.handleChange}/>
                    <label htmlFor="cats">Cats:</label>
                    <input type="checkbox" id="cats" name="address" onChange={this.handleChange}/>
                    <label htmlFor="dogs">Dogs:</label>
                    <input type="checkbox" id="dogs" name="dogs" onChange={this.handleChange}/>
                    <label htmlFor="washer">Washer:</label>
                    <input type="checkbox" id="washer" name="washer" onChange={this.handleChange}/>
                    <label htmlFor="dryer">Dryer:</label>
                    <input type="checkbox" id="dryer" name="dryer" onChange={this.handleChange}/>
                    <label htmlFor="dishwasher">Dishwasher:</label>
                    <input type="checkbox" id="dishwasher" name="dishwasher" onChange={this.handleChange}/>
                    <label htmlFor="outdoor_space">Outdoor Space:</label>
                    <input type="checkbox" id="outdoor_space" name="outdoor_space" onChange={this.handleChange}/>
                    <label htmlFor="elevator">Elevator:</label>
                    <input type="checkbox" id="elevator" name="elevator" onChange={this.handleChange}/>
                    <label htmlFor="doorman">Doorman:</label>
                    <input type="checkbox" id="doorman" name="doorman" onChange={this.handleChange}/>
                    <label htmlFor="link">Link:</label>
                    <input type="text" id="link" name="link" onChange={this.handleChange}/>
                    <label htmlFor="scheduled_showing">Scheduled Showing:</label>
                    <input type="checkbox" id="scheduled_showing" name="scheduled_showing" onChange={this.handleChange}/>
                    <label htmlFor="scheduled_showing_time">Scheduled Showing Time:</label>
                    <input type="text" id="scheduled_showing_time" name="scheduled_showing_time" onChange={this.handleChange}/>
                    <label htmlFor="seen">Seen:</label>
                    <input type="checkbox" id="seen" name="seen" onChange={this.handleChange}/>
                    <label htmlFor="applied">Applied:</label>
                    <input type="checkbox" id="applied" name="applied" onChange={this.handleChange}/>
                    <input type="submit" value="Add new apartment"/>
                </form>
            </div>
        )
    }
}