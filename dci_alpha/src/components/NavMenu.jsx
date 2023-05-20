import { Face } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react'
import { FaAd, FaQrcode } from 'react-icons/fa';
import { NavLink,NavMenus } from '../styles/NavBarStyled';

function NavMenu() {
    const [menus, setMenus] = useState([
        { key: 'qc', text: 'qc', icon: <FaQrcode /> ,to:'/qc/' },
        { key: 'hr', text: 'hr', icon: <Face />,to:'/hr/' },
    ]);
    return (
        <NavMenus className='bg-gray-100 p-2 w-[10%] border-r'>
            {
                menus.map((item) => (
                     <li key={item.key.toString()}>
                     <NavLink to={item.to} className='rounded-lg p-2 mb-1'>
                        {item.icon}
                        {item.text.toUpperCase()}
                    </NavLink>
                     </li>
                ))
            }
        </NavMenus>
    )
}

export default NavMenu
