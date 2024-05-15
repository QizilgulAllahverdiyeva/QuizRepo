import React from 'react'
import menu1 from '../../../assets/images/menu_1.jpg'
import menu2 from '../../../assets/images/menu_2.jpg'
import menu3 from '../../../assets/images/menu_3.jpg'
import '../style.css'

const Gallery = () => {
  return (
    <>
    <section className='gallery'>
    <h2 className='arrivalH2'>Gallery</h2>
    <p style={{padding:"10px 150px", textAlign:"center"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <div className='imagesMenu'>
        <img src={menu1} alt="" />
        <img src={menu2} alt="" />
        <img src={menu3} alt="" />
        <img src={menu3} alt="" />
        <img src={menu1} alt="" />
        <img src={menu2} alt="" />
      </div>
    
    
    </section>
    
    
    </>
  )
}

export default Gallery