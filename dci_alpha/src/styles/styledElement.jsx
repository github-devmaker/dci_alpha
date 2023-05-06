import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const NavBar = styled.nav`
    background:#34a0ff;
    height:${props => props.show ? 'auto !important' : '85px'};
    display:flex;
    justify-content:space-between;
    padding:0.2rem calc((100vw - 1000px)/2);
    // @media screen and (max-width:768px){
       
    // }
`
export const NavLogo = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
    font-size:1.5rem;
    font-weight:bold;
    color:#fff;
    @media screen and (max-width:768px){
        display:none;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style-type:none;
    height:auto;
    @media screen and (max-width:768px){
        display:${props => props.show ? 'block' : 'none'};
    }
`
export const NavLogout = styled.span`
    color:#fff;
    cursor:pointer;
`

export const NavList = styled.li`
    @media screen and (max-width:768px){
        padding:2rem 0;
    }
`
export const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    cursor:pointer;
    &.active {
        color:#000;
    }
`

export const Bars = styled(FaBars)`
    color:#fff;
    display:none;
    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer;
        font-size:1.8rem;
        transform:translate(-100%,100%);
    }
`