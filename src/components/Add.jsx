import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'



const Add = ({product}) => {
  const [form, setForm] = useState(
    {
    fname:'',
    description:'',
    price:'',
    category:''
  }
)

  function valueCap(e)
  {
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
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
          id="standard-required"
          label="Required-Name"
          name="fname"
          value={form.fname}
          onChange={valueCap}
        />
        <TextField
           required
           id="standard-required"
           label="Required-Description"
           name="description"
           value={form.description}
           onChange={valueCap}
        />
        <TextField
           required
           id="standard-required"
           label="Required-Price"
           name="price"
           value={form.price}
           onChange={valueCap}
        />
         <TextField
          required
          id="standard-required"
          label="Required-Category"
          name="category"
          value={form.category}
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