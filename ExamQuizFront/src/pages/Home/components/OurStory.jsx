import React from 'react'
import '../style.css'
import "@fontsource/raleway";
import "@fontsource/playfair-display"; 
import Image2 from '../../../assets/images/about_img_1.jpg'
const OurStory = () => {
  return (
 <>
 <section className='ourStory'>
<div>
<h2>OUR STORY</h2>
<h1>Welcome</h1>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
<button>Learn More About Us</button>
</div>
<div>
  <img src={Image2} alt="" />
</div>



 </section>
 
 
 
 </>
  )
}

export default OurStory