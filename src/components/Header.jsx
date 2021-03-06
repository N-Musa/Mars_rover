import React from 'react'

export const Header = () => {
    return (
       <div className="header">
           <div>
           <h4>๐<strong>NASA MARS</strong> Exploration Rovers</h4>
           </div>

           <div className="links">
               <a href="https://mars.nasa.gov/mer/mission/overview/" target="_blank">Mission ๐</a>
               <a href="https://mars.nasa.gov/mer/news/" target="_blank">What's new</a>
               <a href="https://mars.nasa.gov/mer/mission/rover-status/" target="_blank">Rover Report๐ค</a>
           </div>
       </div>
    )
}
