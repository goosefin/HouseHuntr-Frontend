import React, { useState } from 'react'

const Apartment = () => {
    return (
        <div>
            <h3>Apartment Address</h3>
            <ul>
                {
                    this.props.apartments.map((apartment,i) =>{
                        return(
                            <>
                            <li>{apartment.bedrooms}</li>
                            <li>{apartment.price}</li>
                            <li>{apartment.pets}</li>
                            <li>{apartment.cats}</li>
                            <li>{apartment.dogs}</li>
                            <li>{apartment.washer}</li>
                            <li>{apartment.dryer}</li>
                            <li>{apartment.dishwasher}</li>
                            <li>{apartment.outdoor_space}</li>
                            <li>{apartment.elevator}</li>
                            <li>{apartment.doorman}</li>
                            <li>{apartment.link}</li>
                            <li>{apartment.scheduled_showing}</li>
                            <li>{apartment.scheduled_showing_time}</li>
                            <li>{apartment.seen}</li>
                            <li>{apartment.applied}</li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Apartment