import React from 'react'
import Welcome from './components/Welcome'
import OurStory from './components/OurStory'
import OurOffer from './components/OurOffer'
import News from './components/News'
import Gallery from './components/Gallery'
import "@fontsource/playfair-display"; 
import './style.css'
const Home = () => {
  return (
    <div>
        <Welcome/>
        <OurStory/>
        <OurOffer/>
        <News/>
        <Gallery/>
    </div>
  )
}

export default Home