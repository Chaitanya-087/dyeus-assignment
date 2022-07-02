import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css'
const Navbar = () => {
    return (
        <header className='navbar'>
            <MenuIcon className='icon' />
            <NotificationsNoneIcon className='icon' />
            <ShoppingCartIcon className='icon' />
        </header>
    )
}

export default Navbar
