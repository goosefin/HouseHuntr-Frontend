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
            id: this.props.id
        }
    }

    deleteOne = (id) =>{
        let url = 'http://localhost:8000/api/v1/apartments/' + id
        fetch(url, {
            method:'DELETE',
            credentials: 'include'
        })
        .then(res =>{
            console.log(res)
            const copyApt = [...this.props.apartment]
            const idx = this.props.plants.findIndex((apt) => apt.id === id)
            copyApt.splice(idx,1)
            this.props.handleDeletedState(this.state.id)
            this.setState({
                apartments: copyApt
            })
        })
    }

    editApartment= async (e,apartment) =>{
        e.preventDefault()
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
            <h3>{this.state.address} <span onClick={() =>this.deleteOne(this.state.id)}>X</span> <span onClick={() => this.editApartment()}>Edit</span></h3>
                <ul>
                    <li>Bedrooms:{this.state.bedrooms}</li>
                    <li>Price:{this.state.price}</li>
                    <li>Cats:{this.state.cats}</li>
                    <li>Dogs:{this.state.dogs}</li>
                    <li>Washer:{this.state.washer}</li>
                    <li>Dryer:{this.state.dryer}</li>
                    <li>Dishwasher:{this.state.dishwasher}</li>
                    <li>Outdoor Space:{this.state.outdoor_space}</li>
                    <li>Elevator:{this.state.elevator}</li>
                    <li>Doorman:{this.state.doorman}</li>
                    <li>Link:{this.state.link}</li>
                    <li>Scheduled Showing:{this.state.scheduled_showing}</li>
                    <li>Scheduled Showing Time:{this.state.scheduled_showing_time}</li>
                    <li>Seen:{this.state.seen}</li>
                    <li>Applied:{this.state.applied}</li>
                </ul>
            </div>
        )
    }
}

export default Apartment