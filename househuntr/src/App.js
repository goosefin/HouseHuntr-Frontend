import React, {useState} from 'react'
import NavBar from './components/NavBar';
import Wishlist from './components/Wishlist';

const App = () => {
  return (
    <div className="dashboard">
      <NavBar />
      <div className='list'>
        <Wishlist />
      </div> 
    </div>
  )
}

export default App;
