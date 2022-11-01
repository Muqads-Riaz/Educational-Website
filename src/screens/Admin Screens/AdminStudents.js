import React, { useState  , useEffect} from 'react'
import { getDatabase, ref, onValue} from "firebase/database";
import {Table, TableBody, TableCell, TableHead } from '@mui/material';

export default function AdminStudents() {
    let[data , setData] = useState([])
    const db = getDatabase();
    let getData = ()=>{
        const starCountRef = ref(db, "students/" );
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
         setData(Object.values(data))
        })
      }
      useEffect(()=>{
        getData()
      },[])
      console.log(data)
     
  return (
    <div>
        <Table>
            <TableHead>
               <TableCell>First Name</TableCell>
               <TableCell>Last Name</TableCell>
               <TableCell>Course Name</TableCell>
               <TableCell>Section Name</TableCell>
               <TableCell>Contact Number</TableCell>
               <TableCell>CNIC</TableCell>
               <TableCell>Father Name</TableCell>
               <TableCell>Father Contact Number</TableCell>
               <TableCell>Date Of BIrth</TableCell>
      
            </TableHead>
            
                {data && data.length > 0 ?
                 data.map((obj)=>{
                return <TableBody>
                 <TableCell>{obj.firstName}</TableCell>
               <TableCell>{obj.lastName}</TableCell>
               <TableCell>{obj.courseName}</TableCell>
               <TableCell>{obj.section}</TableCell>
               <TableCell>{obj.contactNumber}</TableCell>
               <TableCell>{obj.CNIC}</TableCell>
               <TableCell>{obj.fatherName}</TableCell>
               <TableCell>{obj.fatherContact}</TableCell>
               <TableCell>{obj.dateOfBirth}</TableCell>
            
               </TableBody>   
                }): null}

           
        </Table>
      
    </div>
  )
}
