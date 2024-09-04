import React from 'react'
import ImgHome from "./../../assests/home-button.png"
import { Link } from 'react-router-dom';
import "./HomeButton.css"

function HomeButton() {
  return (
    <Link to="/">
    <img src={ImgHome} alt='home' className='home-img'/></Link>
  )
}

export default HomeButton