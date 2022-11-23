import React, { Component } from 'react'
import EditApartment from './EditApartment'

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
            id: this.props.id,
            openForm: false
        }
    }

    // deleteOne = (id) =>{
    //     let url = 'http://localhost:8000/api/v1/apartments/' + id
    //     fetch(url, {
    //         method:'DELETE',
    //         credentials: 'include'
    //     })
    //     .then(res =>{
    //         console.log(res)
    //         const copyApt = [...this.props.apartment]
    //         const idx = this.props.plants.findIndex((apt) => apt.id === id)
    //         copyApt.splice(idx,1)
    //         this.props.handleDeletedState(this.state.id)
    //         this.setState({
    //             apartments: copyApt
    //         })
    //     })
    // }

    toggleForm = () =>{
        if(this.state.openForm){
            this.setState({
                openForm: false
            })
        }else{
            this.setState({
                openForm: true
            })
        }
        
    }


    render(){
        const form = this.state.openForm
        let content 
        if(form){
            content = <EditApartment editApartment={this.props.editApartment} toggleForm={this.toggleForm} address={this.props.address} bedrooms={this.props.bedrooms} price={this.props.price} cats={this.props.cats} dogs={this.props.dogs} washer={this.props.washer} dryer={this.props.dryer} dishwasher={this.props.dishwasher} outdoor_space={this.props.outdoor_space} elevator={this.props.elevator} doorman={this.props.doorman} link={this.props.link} scheduled_showing={this.props.scheduled_showing} scheduled_showing_time={this.props.scheduled_showing_time} seen={this.props.seen} applied={this.props.applied} username={this.state.username} id={this.props.id} handleDeletedState={this.props.updateDeletedState}/>
        }else{
            content = <></>
        }

        return(
            <div>
            <h3>{this.state.address} <span onClick={() =>this.props.deleteOne(this.state.id)}>X</span> <span onClick={this.toggleForm}>Edit</span></h3>
                <ul>
                    <li>Bedrooms:{this.state.bedrooms}</li>
                    <li>Price:${this.state.price}</li>
                    <li>Cats:{String(this.state.cats)}</li>
                    <li>Dogs:{String(this.state.dogs)}</li>
                    <li>Washer:{String(this.state.washer)}</li>
                    <li>Dryer:{String(this.state.dryer)}</li>
                    <li>Dishwasher:{String(this.state.dishwasher)}</li>
                    <li>Outdoor Space:{String(this.state.outdoor_space)}</li>
                    <li>Elevator:{String(this.state.elevator)}</li>
                    <li>Doorman:{String(this.state.doorman)}</li>
                    <li>Link:{this.state.link}</li>
                    <li>Scheduled Showing:{String(this.state.scheduled_showing)}</li>
                    <li>Scheduled Showing Time:{this.state.scheduled_showing_time}</li>
                    <li>Seen:{String(this.state.seen)}</li>
                    <li>Applied:{String(this.state.applied)}</li>
                </ul>
            { content }
            </div>
        )
    }
}

export default Apartment