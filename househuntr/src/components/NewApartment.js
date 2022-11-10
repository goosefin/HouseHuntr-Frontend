import React,{ useState } from 'react'

const NewApartment = () =>{
    return(
        <div>
            <h2>New Apartment Form</h2>
            <form>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address"/>
                <label htmlFor="bedrooms">Bedrooms:</label>
                <input type="number" id="bedrooms" name="bedrooms"/>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price"/>
                <label htmlFor="cats">Cats:</label>
                <input type="radio" id="address" name="address"/>
                <label htmlFor="dogs">Dogs:</label>
                <input type="radio" id="dogs" name="dogs"/>
                <label htmlFor="washer">Washer:</label>
                <input type="radio" id="washer" name="washer"/>
                <label htmlFor="dryer">Dryer:</label>
                <input type="radio" id="dryer" name="dryer"/>
                <label htmlFor="dishwasher">Dishwasher:</label>
                <input type="radio" id="dishwasher" name="dishwasher"/>
                <label htmlFor="outdoor_space">Outdoor Space:</label>
                <input type="radio" id="outdoor_space" name="outdoor_space"/>
                <label htmlFor="elevator">Elevator:</label>
                <input type="radio" id="elevator" name="elevator"/>
                <label htmlFor="doormans">Doorman:</label>
                <input type="radio" id="doormans" name="doormans"/>
                <label htmlFor="link">Link:</label>
                <input type="text" id="link" name="link"/>
                <label htmlFor="scheduled_showing">Scheduled Showing:</label>
                <input type="radio" id="scheduled_showing" name="scheduled_showing"/>
                <label htmlFor="scheduled_showing_time">Scheduled Showing Time:</label>
                <input type="text" id="scheduled_showing_time" name="scheduled_showing_time"/>
                <label htmlFor="seen">Seen:</label>
                <input type="radio" id="seen" name="seen"/>
                <label htmlFor="applied">Applied:</label>
                <input type="radio" id="applied" name="applied"/>
                <input type="submit" value="Add new apartment"/>
            </form>
        </div>
    )
}

export default NewApartment