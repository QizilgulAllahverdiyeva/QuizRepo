import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
import "@fontsource/raleway";

const Header = () => {
  return (
    <div className='header'>
        <div>EATWELL</div>
        <ul>
            <li><NavLink  to={"/"} >HOME</NavLink> </li>
            <li><NavLink  to={"/form"}>FORM</NavLink></li>
            <li><NavLink  to={"/"} >ABOUT</NavLink></li>
            <li><NavLink  to={"/"} >OFFER</NavLink></li>
            <li><NavLink  to={"/"} >MENU</NavLink></li>
            <li><NavLink  to={"/"} >NEWS</NavLink></li>
            <li><NavLink  to={"/"} >GALLERY</NavLink></li>

            
        </ul>
    </div>
  )
}

export default Header