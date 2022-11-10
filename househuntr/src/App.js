import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import Wishlist from './components/Wishlist';
import Login from './components/Login'
import Register from './components/Register';

const App = () => {
  const [user,setUser] = useState([])
  const [apartments, setApartments] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  const getApartments = () =>{
    fetch('http://localhost:8000/api/v1/apartment',{
      credentials: 'include'
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
      setApartments(data.data)
    })
  }

  const register = async (e) =>{
    e.preventDefault()
    const url = 'http://localhost:8000/api/v1/user/register'
    try{
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
          email: e.target.email.value
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

  const login = async (e) => {
    console.log('login function')
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    e.preventDefault()
    const url = 'http://localhost:8000/api/v1/user/login'
    try{
      const res = await fetch(url,{
        method:'POST',
        body: JSON.stringify({
          password:e.target.password.value,
          email: e.target.email.value
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
        // getApartments()
        setUser(response.data)
        setLoggedIn(true)
      }
    }
    catch(err){
      console.log('Error =>', err)
    }
  }


  // useEffect(() =>{
  //   getApartment()
  // },[])

  return (
    <div className="dashboard">
      <NavBar />
      <Login login={login}/>
      <Register register={register}/>
      <div className='list'>
        {/* <Wishlist /> */}
      </div> 
    </div>
  )
}

export default App;
