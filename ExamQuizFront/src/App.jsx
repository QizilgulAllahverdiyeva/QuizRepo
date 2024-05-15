import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
