import React, {Component} from 'react'

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
        let url = 'http://localhost:8000/api/v1/apartments/'
        fetch(url , {
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
        // console.log(e.target.id)
        this.setState({
          [e.target.id]:e.target.value
        })
    }
    
    render(){
        return(
            <div>
                <h2>New Apartment Form</h2>
                <form onSubmit={this.newApartment}>
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

export default NewApartment