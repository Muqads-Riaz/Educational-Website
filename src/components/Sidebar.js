import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material';
import { Typography } from '@mui/material';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
  return (
    
    <div className='sidebar'>
      <div className='sidebar-main'>
      <HomeIcon className='sidebar-icon'/>
      <Typography  variant='h6' className='sidebar-heading'>Home</Typography>
      </div>
      <div className='sidebar-main'>
      <DashboardIcon  className='sidebar-icon'/>
      <Typography  variant='h6' className='sidebar-heading'>Dashboard</Typography>
            {/* <NavLink  to="/dashboard">HomePage</NavLink> */}
      </div>
      <div className='sidebar-main'>
      <PersonIcon  className='sidebar-icon'/>
      <Typography className='sidebar-heading' variant='h6'>Profile</Typography>
      </div>
      <div className='sidebar-main'>
      <LoginIcon  className='sidebar-icon'/>
      <Typography className='sidebar-heading' variant='h6'>Sign In</Typography>
      </div>
      <div className='sidebar-main'>
      <LogoutIcon  className='sidebar-icon'/>
      <Typography className='sidebar-heading' variant='h6'>Sign Out</Typography>
      </div>
      <div className='sidebar-main'>
      <InboxIcon  className='sidebar-icon'/>
      <Typography className='sidebar-heading' variant='h6'>Inbox</Typography>
      </div>
      <div className='sidebar-main'>
      <MailIcon  className='sidebar-icon'/>
      <Typography className='sidebar-heading' variant='h6'>Mail</Typography>
      </div>
      <div className='sidebar-main'>
      <InboxIcon  className='sidebar-icon'/>
      <Typography className='sidebar-heading' variant='h6'>Draft</Typography>
      </div>
  
    </div>
  )
}

