import React from 'react'
import NavMenu from './NavMenu'
import NavLeftSubMenu from './NavLeftSubMenu'
import { Link } from 'react-router-dom'
import { Typography,Button, Box } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Buttons } from '../styles/QcStyled'
function Body() {
  return (
    <div className='flex h-full'>
      <NavMenu />
      <div className='w-full flex'>
        <NavLeftSubMenu />
        <Box className='px-4 py-3 w-full'>
          <div>
          <Breadcrumbs aria-label="breadcrumb" separator='›' >
            <Link underline="hover" color="inherit" href="/" separator="›">
              QC
            </Link>
            <Typography color="text.primary">เครื่องมือวัด</Typography>
          </Breadcrumbs>
          </div>
          <Buttons className='text-right'>
          <Button variant="contained">เพิ่มรายการ</Button>
          </Buttons>
          <div className='mt-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sit officia, eaque quis repudiandae quas aspernatur quae, consequuntur nulla totam delectus illo blanditiis ad et est at autem, aperiam adipisci.
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Body
