import React from 'react'
import './Header.css'


const Header = (props) => {
  return(
    <div>
    
    <div className="header"><span>{props.headerTitle}</span></div>
    
    </div>

  )
}

export default Header;