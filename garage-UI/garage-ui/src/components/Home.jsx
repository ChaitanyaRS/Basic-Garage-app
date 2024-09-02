import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Home = () => {
const [carList, setCarList] = useState([])

const handleSearch = async () =>{
    const result = await fetch("http://localhost:8080/cars/1");
    const data = await result.json();
    setCarList(data)
}

  return (
    <>
        <TextField onChange={handleSearch}/>  
        <>
        {
            carList.map((car)=>{
                <div>{car}</div>
            })
        }
        </>  
    </>
  )
}

export default Home