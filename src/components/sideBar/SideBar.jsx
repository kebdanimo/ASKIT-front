import { Box } from '@mui/material'
import React from 'react'
import ProfileCard from '../profileCard/ProfileCard'

const SideBar = () => {
  return (
    <Box
        sx={{
            width: 320,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            position:'fixed',
        }}
    >
        <ProfileCard />


    </Box>
  )
}

export default SideBar