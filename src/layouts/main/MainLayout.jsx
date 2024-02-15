import React from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import AppHeader from '../../components/appHeader/AppHeader'
import { Box, Container } from '@mui/material'
import SideBar from '../../components/sideBar/SideBar'

const MainLayout = () => {

  const location = useLocation();

  

  return (
    <>
    <AppHeader />
  
      <Container maxWidth="xl" sx={{
        mt: '12px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        marginTop: '100px',
      }}>
      {
        location.pathname.split('/')[1] !== 'questions' && <SideBar />
      }


        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            marginLeft: location.pathname.split('/')[1] === 'questions' ? 0 : '365px',
           
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </>
  )
}

export default MainLayout