import React, { useEffect, useState } from 'react'
import "./AllCars.css"
import CarCard from '../../components/CarCard/CarCard';
import TextField from '@mui/material/TextField'
const AllCars = () => {

  const [carsList, setCarsList] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    // Define the async function inside useEffect
    fetchCars(); // Call the async function
  },[searchText]);

  const fetchCars = async () => {
    try {
      let response;
      searchText === "" ?  response = await fetch("http://localhost:8080/cars"): response = await fetch(`http://localhost:8080/cars/${searchText}`);
      if (!response.ok) {
        throw new Error("Network Respose Error");
      }
      const result = await response.json();
      if (result != []) {
        setCarsList(result);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const searchCar = (e) => {
    if (e)
      setSearchText(e.target.value);
    }

  return (
    <div  >
      <div className="search-bar">
        <TextField className='search' id="outlined-basic" label="Search Cars" variant="outlined" onChange={searchCar} value={searchText}/>
      </div>
      <ul className='car-list'>
        {carsList.map((car) => (<li key={car.id}>
          <CarCard car={car} />
        </li>
        ))}
      </ul>
    </div>
  )
}

export default AllCars
