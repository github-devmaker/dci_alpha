import React, { useState } from 'react'
import { NavBar, NavLogo, NavList, NavMenu, NavLink, Bars } from '../styles/styledElement'
import NavLogout from './NavLogout'
function Nav() {
    const [show,setShow] = useState(false)
    function handleLogout(){
        if(confirm('คุณต้องการออกจากระบบ ใช่หรือไม่ ?')){
            localStorage.clear();
            location.reload();
        }
    }
    return (
        <>
            <NavBar show = {show}>
                <Bars onClick={()=>setShow(!show)}/>
                <NavLogo to='/home'>
                    DCI ALPHA
                </NavLogo>
                <NavMenu show = {show}> 
                    <NavList>
                        <NavLink to='/home'>หน้าแรก</NavLink>
                    </NavList>
                    <NavList>
                        <NavLink to='/about'>เกี่ยวกับ</NavLink>
                    </NavList>
                    <NavList>
                        <NavLink to='/contact'>ติดต่อเรา</NavLink>
                    </NavList>
                    <NavList>
                        {/* <NavLogout onClick={handleLogout}>ออกจากระบบ</NavLogout> */}
                        <NavLogout/>
                    </NavList>
                </NavMenu>
            </NavBar >
        </>
    )
}

export default Nav
