import React, { useState } from 'react'
import { Container , Grid , Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '../components/Input'
import BButton from '../components/BButton'
import { getDatabase, ref, onValue} from "firebase/database";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const db = getDatabase();
  let[name , setName] = useState("")
  let[password , setPassword] = useState("")
  let[data , setData] = useState([])
  let[error , setError] =useState(false)

  let getData =()=>{
      const starCountRef = ref(db, "admin/" );
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
       setData(Object.values(data))
      })
        data.map((obj)=>{
        if(obj.adminName == name && obj.password == password){
         navigate("/Admin")
        }else{
            setError(true)
        } 
      })
    }
  return (
    <div> 
         <Container  maxWidth="sm" sx={{ textAlign: "center"}}>
                <Grid container spacing={3} sx={{ marginY: "30px", padding: "30px", backgroundColor: "white", boxShadow: "5px 5px 30px lightgray", borderRadius: "10px" }} >
                <Grid item xs={12} md={12} sm={12} lg={12} >
                <div>
               < AccountCircleIcon sx={{fontSize:"140px"}}></ AccountCircleIcon>
                </div>
                <Typography variant="h5">Login</Typography>
                {error? <p style={{color:"red"}}>Only Admin Can Login</p> : null}
               
                <Input  value={name} onChange={(e)=>setName(e.target.value)}  label="Admin Name"/>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)} label="Password"/>
                <BButton onClick={getData} label="Login"/>
                </Grid>
                </Grid>
            </Container> 
    </div>
  )
}
