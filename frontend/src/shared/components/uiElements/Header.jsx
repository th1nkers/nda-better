import React from 'react'
import './Header.css'

const Header = ({children, ...props}) => {
  return (
    <div id={props.id} className={`header-section ${props.dotted? 'header-dotted' : ''}`}>
        {children}
    </div>
  )
}

export default Header