import React from 'react'
import { Box, Link,Divider } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { NavIcon,NavLinkHome } from '../styles/NavBarStyled';
function NavBarPostMan() {
  return (
    <>
      <div className='flex justify-between j px-3 py-2'>
        <NavIcon/>
        <Box>
          <ul>
            <NavLinkHome>Home</NavLinkHome>
          </ul>
        </Box>
        <Box>
          <input type='text' placeholder='Search DCI System' />
        </Box>
        <Box>
          <img src="" alt="" />
          <SettingsIcon className='pointer' />
        </Box>
      </div>
      <Divider />
    </>
  )
}

export default NavBarPostMan
