import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios'

   
  const Home= () => {
    const [rows,setRows]=useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setRows(res.data)
        }
    )
    .catch((error) => {
        console.error('Error fetching data:', error);
      });
    },[])

  return (
    <TableContainer component={Paper}sx={{ backgroundColor: 'lightblue', mt: 3 }}>
    <Table sx={{ minWidth: 300 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Image</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{<img src={row.image} alt="" width="100" height="100"></img>}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  
  )
}


export default Home
