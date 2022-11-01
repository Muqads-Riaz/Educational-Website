import { BrowserRouter , Routes , Route  } from "react-router-dom";
import React from 'react'
import RegistrationForm from "../screens/RegistrationForm";
import Login from "../screens/Login";
import Admin from "../screens/Admin";
import PageNotFound from "../screens/PageNotFound";
import Navbar from "../components/Navbar";
import AdminQuiz from "../screens/Admin Screens/AdminQuiz";
import AdminCourses from "../screens/Admin Screens/AdminCourses";
import AdminResult from "../screens/Admin Screens/AdminResult";
import AdminStudents from "../screens/Admin Screens/AdminStudents";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route  path="/" element={<RegistrationForm/>} />
       <Route  path="/Login" element={<Login/>} />
       <Route  path="/Admin" element={<Admin/>}>
           <Route  path="Quiz" element={<AdminQuiz/>} />
           <Route  path="Courses" element={<AdminCourses/>} />
           <Route  path="Result" element={<AdminResult/>} />
           <Route  path="Student" element={<AdminStudents/>} />
       </Route>
       <Route  path="/*" element={<PageNotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
