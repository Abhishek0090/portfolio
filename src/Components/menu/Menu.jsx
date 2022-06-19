import React from 'react'
import './Menu.scss'

const Menu = (props) => {
    const {menuOpen,setMenuOpen} = props;
  return (
    <div className={'menu ' + (menuOpen && "active") }>
        <ul>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
                <a href="#works">Works</a>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
                <a href="#testimonials">TestiMonials</a>
            </li>
            <li onClick={()=>{setMenuOpen(!menuOpen)}}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu;