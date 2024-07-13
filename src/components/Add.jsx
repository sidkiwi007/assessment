import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'



const Add = () => {
  const [form, setForm] = useState(
    {
    productName:'',
    description:'',
    price:'',
    category:''
  }
  
)

  function valueCap (e)
  {
    
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd = ()=>{
  console.log(form)
  }
  

  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
      <TextField
          required
          id="Required-ProductName"
          label="ProductName"
          name="fname"
          onChange={valueCap}
        />
        <TextField
           required
           id="Required-Description"
           label="Description"
           name="description"
           onChange={valueCap}
        />
        <TextField
           required
           id="Required-Price"
           label="Price"
           name="price"
           onChange={valueCap}
        />
         <TextField
          required
          id="Required-Category"
          label="Category"
          name="category"
          onChange={valueCap}
        />
        <Button variant="contained" color="success" onClick={valueAdd}>Submit</Button>
        <br/>
      </div>
    </Box>
    </div>
    
  )
}
export default Add