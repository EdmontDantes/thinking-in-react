import React from 'react'
import './Sidebar.css'


const Sidebar = (props) => {
  return(
    <div>
    
    <div className="sidebar">
      <ul>
        <li>
        {props.foodOne}
        </li>
        <li>
        {props.foodTwo}
        </li>
        <li>
        {props.foodThree}
        </li>
        <li>
        {props.foodFour}
        </li>
      </ul>
    </div>
    
    </div>

  )
}

export default Sidebar;