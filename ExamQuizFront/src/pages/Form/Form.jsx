import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import './style.css'
import { ProductsSchema } from '../../schema/ProductsSchema'
import { ProductsContext } from '../../context/ProductsContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'


const Form = () => {

const {data, setData, sortData,setSortData,titleInp , 
    setTitleInp,priceInp,setPriceInp,category,setCategoryInp,imgInp,setImgInp}=useContext(ProductsContext)


  const getAllData=async()=>{
      const res = await axios("http://localhost:8080/eats");
      setData(res?.data)
      setSortData(res?.data)
  }

  useEffect(()=>{
      getAllData();
  },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductsSchema),
  });
  const createProduct = async (values)=>{
   await axios.post("http://localhost:8080/eats", {
      "title": titleInp,
      "price": priceInp,
      "img": imgInp
    })
    getAllData();
  }

return (
  <>
  <form   className='formPost my-5' action="" onSubmit={handleSubmit(createProduct)}>
<div>
<TextField name="title" placeholder="title" type="text" {...register('title')} onChange={(e)=>setTitleInp(e.target.value)} />
  {errors.title?.message && (
      <p style={{ color: "red" }}>{errors.title?.message}</p>
    )}
    <TextField name="price" placeholder="price" type="text" {...register('price')} onChange={(e)=>setPriceInp(e.target.value)} />
    {errors.price?.message && (
      <p style={{ color: "red" }}>{errors.price?.message}</p>
    )} 
</div>
<div> 
    <TextField placeholder="img" type="text" {...register('image')}   onChange={(e)=>setImgInp(e.target.value)}/>
</div>
    <br />
    <button >POST</button>
    <br />
  </form>
    <div className='Searching'>
    <input type="text" placeholder='Searching...' onChange={(e)=>{
  let searching = data.filter((elem)=>elem.title.toLowerCase().includes(e.target.value.toLowerCase()))
  setSortData(searching)
      }} />
      <br />
    <Button  onClick={()=>{
        let newArr= [...data].sort((a,b)=>a.title[0].localeCompare(b.title[0]))
        console.log(newArr);
        setSortData(newArr)
        
    }}>
       A-Z(Sort)
    </Button>
    <Button onClick={()=>{
        let newArr= [...data].sort((a,b)=>b.title[0].localeCompare(a.title[0]))
        console.log(newArr);
        setSortData(newArr)

    }}>
       Z-A(Sort)
    </Button>
    <br />
    <Button onClick={()=>{
        let newArr= [...data].sort((a,b)=>a.price-b.price)
        console.log(newArr);
        setSortData(newArr)

    }}>
       Price Sort (min-max)
    </Button>
    <Button onClick={()=>{
        let newArr= [...data].sort((a,b)=>b.price-a.price)
        console.log(newArr);
        setSortData(newArr)

    }}>
       Price Sort (max-min)
    </Button>
    <br />
    </div>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">IMAGE</TableCell>
            <TableCell align="center">TITLE</TableCell>
            <TableCell align="center">PRICE</TableCell>
            <TableCell align="center">Details</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {sortData.map((row) => (
            <TableRow 
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row._id}</TableCell>
              <TableCell  align="center"><img className='imageProduct'  src={row.img} alt="" /></TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center"><Button variant="contained" color="primary" onClick={()=>navigate(`/products/${row.id}`)}>Detail</Button></TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</>
)}

export default Form
