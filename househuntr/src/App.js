import React, {Component} from 'react'
import NavBar from './components/NavBar';
import Wishlist from './components/Wishlist';
import Login from './components/Login'
import Register from './components/Register';
import NewApartment from './components/NewApartment';
import Apartment from './components/Apartment';
import Footer from './components/Footer'

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: [],
      apartments: [],
      loggedIn:false,
    }
  }

  getApartments = () =>{
    fetch('http://localhost:8000/api/v1/apartments/',{
      credentials: 'include',
      'Access-Control-Allow-Credentials':true
    })
    .then(res => {
      if(res.status === 200){
        return res.json()
      }else{
        return []
      }
    })
    .then(data => {
      console.log(data.data)
      this.setState({apartments:data.data})
    })
  }

  componentDidMount(){
    console.log('Component did mount')
    this.getApartments()
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleAddApartment = (apartment) =>{
    const copyApartment = [...this.state.apartments]
    copyApartment.push(apartment)
    this.setState({
      apartments:copyApartment
    })
  }

  register = async (e) =>{
    e.preventDefault()
    const url = 'http://localhost:8000/api/v1/user/register'
    try{
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        }),
        headers: {
          'Content-Type':'application/json'
        }
      })
      console.log(res)
      const response = await res.json()
      console.log(response.data)
      if(res.status === 201){
        console.log('register works')
      }
    }
    catch(err){
      console.log('Error =>', err)
    }
  }

  login = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:8000/api/v1/user/login'
    try{
      const res = await fetch(url,{
        method:'POST',
        body: JSON.stringify({
          password:this.state.password,
          email: this.state.email
        }),
        headers:{
          'Content-Type':'application/json'
        },
        credentials: 'include'
      })
      //console.log(res)
      const response = await res.json()
      // console.log(response.data)
      // console.log('Body =>', res.body)
      if(res.status === 200){
        this.setState({
          loggedIn:true,
          user:response.data
        })
      }
    }
    catch(err){
      console.log('Error =>', err)
    }
  }

  newApartment = (e) =>{
    e.preventDefault()
    console.log(e.target)
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
    //console.log('Apartment Data', apartmentData)
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
    //console.log('Looped Object', apartmentData)
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
        console.log(res)
        if(res.status === 201){
            return res.json()
        } else{
            return []
        }
    })
    .then(data =>{
        console.log(data.data)
        this.handleAddApartment(data.data)
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
      <div className="dashboard">
      <NavBar />
      <Login login={this.login} handleChange={this.handleChange}/>
      <Register register={this.register} handleChange={this.handleChange}/>
      <div className='list'>
        {/* <Wishlist /> */}
      </div> 
      {/* <NewApartment newApartment={newApartment}/> */}
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
                <input type="checkbox" id="cats" name="cats" onChange={this.handleChange}/>
                <label htmlFor="dogs">Dogs:</label>
                <input type="checkbox" id="dogs" name="dogs" onChange={this.handleChange}/>
                <label htmlFor="washer">Washer:</label>
                <input type="checkbox" id="washer" name="washer" onChange={this.handleChange}/>
                <label htmlFor="dryer">Dryer:</label>
                <input type="checkbox" id="dryer" name="dryer" onChange={this.handleChange}/>
                <label htmlFor="dishwasher">Dishwasher:</label>
                <input type="checkbox" id="dishwasher" name="dishwasher"/>
                <label htmlFor="outdoor_space">Outdoor Space:</label>
                <input type="checkbox" id="outdoor_space" name="outdoor_space" onChange={this.handleChange}/>
                <label htmlFor="elevator">Elevator:</label>
                <input type="checkbox" id="elevator" name="elevator" onChange={this.handleChange}/>
                <label htmlFor="doormans">Doorman:</label>
                <input type="checkbox" id="doormans" name="doormans" onChange={this.handleChange}/>
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
      <Footer />
    </div>
    )
  }

}

export default App;
