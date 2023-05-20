import { ArrowForwardIos } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { FaAd, FaSearch } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { grey, red } from '@mui/material/colors';
function NavLeftSubMenu() {
    const [SubMenu, setSubMenu] = useState([
        { key: '', text: 'เครื่องมือวัด' },
        { key: '', text: 'โปรแกรม 2' },
        { key: '', text: 'โปรแกรม 3' }
    ])
    return (
        <div className='w-[15%] bg-gray-100 border-r text-sm'>
            <div className='px-2 py-2 flex items-center'>
                <FaSearch />
                <div className='rounded-md border bg-white cursor-pointer w-full ml-2'>
                    &nbsp;
                </div>
            </div>
            <ul>
                {
                    SubMenu.map((subMenu) => (
                        <NavLink className='mb-1' key={subMenu.key}>
                            <Link className='flex items-center hover:bg-gray-200 hover:border-l-2 border-blue-500 pl-2 py-1 text-xs hover:text-gray-500'><ArrowForwardIos sx={{ fontSize: 12 }} className='mr-2' />{subMenu.text}</Link>
                        </NavLink>
                    ))
                }
            </ul>
        </div>
    )
}

export default NavLeftSubMenu
