import React, { useState } from 'react'
import { ImgUser } from '../styles/styledElement'
import { Button, Menu, MenuItem } from '@mui/material'
import Fade from '@mui/material/Fade';
function NavLogout() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const rMenu = ['โปรไฟล์', 'บัญชี', 'ออกจากระบบ']

    return (
        <div>
            <ImgUser
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                src='https://i.imgur.com/yXOvdOSs.jpg'
            />
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {
                    rMenu.map((item) => (
                        <MenuItem onClick={handleClose} key={item.toString()}>{item}</MenuItem>
                    ))
                }

            </Menu>
        </div>
    );
}

export default NavLogout