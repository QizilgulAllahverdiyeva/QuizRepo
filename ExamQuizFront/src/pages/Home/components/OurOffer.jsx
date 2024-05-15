import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css'
import axios from 'axios'
import { ProductsContext } from '../../../context/ProductsContext'


const OurOffer = () => {

const { data, setData, filter, setFilterData }= useContext(ProductsContext)

  const getAllData = async (category)=>{
    const res = await axios("http://localhost:8080/eats")
    setData(res?.data)
    setFilterData(res?.data)
  }

  useEffect(()=>{
    getAllData();
  },[])
  
  const deleteData = async (id)=>{
    await axios.delete(`http://localhost:8080/eats/${id}`)
    getAllData();
  }
 
  return (
    <>
    <section className='ourOffers'>
    <h3  className='ourOffersH1'>OUR OFFERS</h3>
    <h2 className='arrivalH2'>Our Offer This Summer</h2>
    <p style={{padding:"10px 150px", textAlign:"center"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <div className='datas'>
        {filter.map((elem)=>{
        return (
            <div key={elem._id} className='product'>
      <img className='dataImg' src={elem.img} alt="" />
      <div className='dataPrice'>${elem.price}</div>
      <div style={{textAlign:"center", margin:"0 auto"}} className='datatitle'>{elem.title}</div>
      <div style={{width:"200px", textAlign:"center", margin:"20px auto", color:"gray", fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur</div>
      <div>
      <button onClick={()=>deleteData(elem._id)} className='deleteBtn'>DELETE</button>
      </div>
      </div>
        )
    
     }) 
    
    }
     </div>
    
    
    </section>
    </>
  )
}

export default OurOffer