
import React from 'react'
import "./Header.scss";
import {Person,Mail} from "@material-ui/icons";


const Header = (props) => {
  const {menuOpen,setMenuOpen} = props;

  return (
    <div className={'header  ' + (menuOpen && "active")} id='header'>
      <div className='wrapper'>
  
<div className="left">
    <a href="#intro" className='logo'>AbhiCody</a>
    <div className="itemContainer">
      <Person className='icon'/>
      <span>+91 9967572247</span>
    </div>
    <div className="itemContainer">
      <Mail className='icon'/>
      <span>palabhishek411@gmail.com</span>
    </div>
</div>

<div className="right">
 <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
 <span className="line1"></span>
 <span className="line2"></span>
   <span className="line3"></span>
 </div>
</div>
      </div>
    </div>
    
  )
}

export default Header