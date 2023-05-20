import React from 'react'
import NavMenu from './NavMenu'
import NavLeftSubMenu from './NavLeftSubMenu'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
function Body() {
  return (
    <div className='flex h-full'>
      <NavMenu />
      <div className='w-full flex'>
        <NavLeftSubMenu />
        <div className='px-4 py-3'>
          <div>
          <Breadcrumbs aria-label="breadcrumb" separator='›' >
            <Link underline="hover" color="inherit" href="/" separator="›">
              QC
            </Link>
            <Typography color="text.primary">เครื่องมือวัด</Typography>
          </Breadcrumbs>
          </div>
          <div>
            Content
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
