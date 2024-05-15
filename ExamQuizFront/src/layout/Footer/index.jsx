import React from 'react'
import './style.css'
import "@fontsource/raleway";
import "@fontsource/playfair-display"; 
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className='footerBottom'>
        <div >
          <h3>ABOUT US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?</p>
        </div>
        <div>
          <ul>
            <li>THE RESTAURANT</li>
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>USEFUL LINKS</li>
            <li>Foods</li>
            <li>Drinks</li>
            <li>Brunch</li>
            <li>Dinner</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>USEFUL LINKS</li>
            <li>Foods</li>
            <li>Drinks</li>
            <li>Brunch</li>
            <li>Dinner</li>
          </ul>
        </div>
      </div>
    <div className='icons'>
    <FaTwitter />
    <FaFacebook />
    <RiInstagramLine />
    </div>
    <p>© Copyright ©2024 All rights reserved | This template is made with <FaHeart /> by Colorlib</p>
    </footer>
    </>
  )
}

export default Footer