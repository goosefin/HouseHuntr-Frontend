import React, {Component} from 'react'
import NavBar from './components/NavBar';
import Wishlist from './components/Wishlist';
import Login from './components/Login'
import Register from './components/Register';
import NewApartment from './components/NewApartment';
import Footer from './components/Footer'
import Scheduled from './components/Scheduled';
import Seen from './components/Seen'
import Applied from './components/Applied';

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
      // console.log(data.data)
      this.setState({apartments:data.data})
    })
  }

  componentDidMount(){
    //console.log('Component did mount')
    this.getApartments()
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  updateState = (apartment) =>{
    const copyApartments = [...this.state.apartments]
    copyApartments.push(apartment)
    this.setState({
      apartments:copyApartments
    })
  }

  updateDeletedState = (id) =>{
    const copyApartments = [this.state.apartments]
    const findIdx = this.state.apartments.findIndex((apt) => apt.id === id)
    copyApartments.splice(findIdx,1)
    this.setState({
      apartments:copyApartments
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
        // console.log('register works')
        this.setState({
          username:'',
          password: '',
          email:''
        })
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
        <Wishlist apartments={this.state.apartments} handleDeletedState={this.updateDeletedState}/>
        <Scheduled apartments={this.state.apartments} handleDeletedState={this.updateDeletedState}/>
        <Seen apartments={this.state.apartments} handleDeletedState={this.updateDeletedState}/>
        <Applied apartments={this.state.apartments} handleDeletedState={this.updateDeletedState}/>
      </div> 
      <NewApartment newApartment={this.newApartment} handleAddApartment={this.handleAddApartment}/>
      <Footer />
    </div>
    )
  }

}

export default App;
