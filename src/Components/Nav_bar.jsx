import React from 'react'

const Nav_bar = () => {
  return (
    <div className='Nav'>
         <div className='nav_img'>
            {/* <img src='https://up.yimg.com/ib/th?id=OIP.rHnTXUOFDRUQHEJ0hovG-gHaFs&pid=Api&rs=1&c=1&qlt=95&w=146&h=112'></img> */}
         </div>
            <a href='#' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
         <div className='Nav_items'>
            <ul >
                <li> <a href='#'>Home</a> </li>
                <li> <a href='#'>Recepies</a> </li>
                <li> <a href='#'>About</a> </li>
                
            </ul>
         </div>
    </div>
  )
}

export default Nav_bar
