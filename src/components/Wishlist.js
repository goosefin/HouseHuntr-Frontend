import React, {Component} from 'react'
import Apartment from './Apartment'

class Wishlist extends Component{
    constructor(props){
        super(props)
        this.state = {
            apartments: this.props.apartments
        }
    }

    render(){
        return(
            <div id="wishlist-l">
                <h2 className="column-title">Wishlist</h2>
                {
                    this.props.apartments.map((apartment) =>{
                        if(apartment.scheduled_showing === false && apartment.seen === false && apartment.applied === false){
                            return(
                                <>
                                    <Apartment address={apartment.address} bedrooms={apartment.bedrooms} price={apartment.price} cats={apartment.cats} dogs={apartment.dogs} washer={apartment.washer} dryer={apartment.dryer} dishwasher={apartment.dishwasher} outdoor_space={apartment.outdoor_space} elevator={apartment.elevator} doorman={apartment.doorman} link={apartment.link} scheduled_showing={apartment.scheduled_showing} scheduled_showing_time={apartment.scheduled_showing_time} seen={apartment.seen} applied={apartment.applied} username={this.state.username} id={apartment.id} handleDeletedState={this.props.updateDeletedState} editApartment={this.props.editApartment} deleteOne={this.props.deleteOne}/>
                                </>
                            )
                        }
                    })
                }
            </div>      
        )
    }
}

export default Wishlist 