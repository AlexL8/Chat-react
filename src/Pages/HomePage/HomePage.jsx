import React from 'react'
import { Redirect } from 'react-router-dom';


const HomePage = (props) => {
  return (
	<div>
    <h1>Home</h1>
    <Redirect to="/login"/>
  </div>
  )
}

export default HomePage;