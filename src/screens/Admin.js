import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Container,Grid ,Typography } from '@mui/material'
export default function Admin() {
  return (
    <div>
      <Container sx={{textAlign:"center"}} maxWidth="lg">
        <Grid spacing={2} container >
        <Grid sx={{ marginY: "30px", padding: "10px", backgroundColor: "white", boxShadow: "5px 5px 30px lightgray", borderRadius: "10px" }} item xs={12} md={3} sm={6} lg={3} >
             <NavLink className="nested-links" to="Quiz" ><li>Quiz</li></NavLink>
             </Grid>
             <Grid sx={{ marginY: "30px", padding: "10px", backgroundColor: "white", boxShadow: "5px 5px 30px lightgray", borderRadius: "10px" }} item xs={12} md={3} sm={6} lg={3} >
             <NavLink  className="nested-links" to="Result" ><li>Result</li></NavLink>
             </Grid>
             <Grid sx={{ marginY: "30px", padding: "10px", backgroundColor: "white", boxShadow: "5px 5px 30px lightgray", borderRadius: "10px" }} item xs={12} md={3} sm={6} lg={3} >
             <NavLink  className="nested-links" to="Courses" ><li>Courses</li></NavLink>
             </Grid>
             <Grid sx={{ marginY: "30px", padding: "10px", backgroundColor: "white", boxShadow: "5px 5px 30px lightgray", borderRadius: "10px" }} item xs={12} md={3} sm={6} lg={3} >
             <NavLink  className="nested-links" to="Student" ><li>Students</li></NavLink>
             </Grid>
            
             
             <Outlet/>
         
            </Grid>
       </Container>

    </div>
  )
}
