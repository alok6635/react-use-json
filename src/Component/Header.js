import React from 'react'
import "./Header.css"


const Header = () => {
  return (
   <>
<header className='header flex space-between align-item'>
<a href='#' className='logo'>
<img src='img/logo.png' width="150px" height="100px"></img>
</a>
<ul className='flex'>
    <li><a href='#' className='active'>Home</a> </li>
    <li><a href='#'>About</a> </li>
    <li><a href='#'>Services</a> </li>
    <li><a href='#'>Gallery</a> </li>
    <li><a href='#'>Contact</a> </li>
    
</ul>


</header>

   </>
  )
}

export default Header
