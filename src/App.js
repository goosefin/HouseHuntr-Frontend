import React, {Component} from 'react'
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: [],
      apartments: [],
      loggedIn:false,
      newApartmentForm:false
    }
  }

  // ----------------- ROUTES --------------- //
  getApartments = () =>{
    fetch('https://househuntr-backend.herokuapp.com/api/v1/apartments/',{
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

  register = async (e) =>{
    e.preventDefault()
    try{
      const res = await fetch('https://househuntr-backend.herokuapp.com/api/v1/user/register', {
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
        //this should actually log in and switch to a dashboard view
        //loggedIn:true,
        //user:response.data
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
    try{
      const res = await fetch('https://househuntr-backend.herokuapp.com/api/v1/user/login',{
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
      console.log(res)
      const response = await res.json()
      console.log(response.data)
      console.log('Body =>', res.body)
      if(res.status === 200){
        this.getApartments()
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

  editApartment= (apartment) =>{
    fetch('https://househuntr-backend.herokuapp.com/api/v1/apartments/'+ apartment.id , {
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
        console.log('incoming data', data.data)
        const copyApt = [...this.state.apartments]
        const idx = this.state.apartments.findIndex(apt => apt.id === data.data.id)
        console.log('before assignment', copyApt[idx])
        copyApt[idx] = data.data
        console.log('after assignment', copyApt[idx])
        this.setState({
          apartments:copyApt
        })
    })
  }

  deleteOne = (id) =>{
    fetch('https://househuntr-backend.herokuapp.com/api/v1/apartments/' + id , {
        method:'DELETE',
        credentials: 'include'
    })
    .then(res =>{
        console.log(res)
        const copyApt = [...this.state.apartments]
        const idx = this.state.apartments.findIndex((apt) => apt.id === id)
        copyApt.splice(idx,1)
        this.setState({
            apartments: copyApt
        })
    })
}

  // ----------------- HELPER FUNCTIONS --------------- //
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

  render(){
    let content
    if(!this.state.loggedIn){
      content = <Landing handleChange={this.handleChange} register={this.register} login={this.login} users={this.state.user} loggedIn={this.state.loggedIn}/>
    }else{
      content = <Dashboard handleChange={this.handleChange} users={this.state.user} loggedIn={this.state.loggedIn} apartments={this.state.apartments} handleAddApartment={this.handleAddApartment} editApartment={this.editApartment} deleteOne={this.deleteOne}/>
    }
    return(
      <div className="dashboard">
        {content}
      </div>
    )
  }

}

export default App;
