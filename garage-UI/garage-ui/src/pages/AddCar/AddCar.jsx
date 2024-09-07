import { TextField } from '@mui/material';
import React from 'react'
import { useForm } from "react-hook-form"

const AddCar = () => {
  const { register, handleSubmit } = useForm();

  const addcar = (data) => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit(addcar)}>
        <TextField
          required
          id="outlined-required"
          label="Car Name"
          placeholder='Civic'
        />
        <TextField
          required
          id="outlined-required"
          label="Brand Name"
          placeholder='Honda'
        />
      </form>
    </div>
  )
}

export default AddCar
