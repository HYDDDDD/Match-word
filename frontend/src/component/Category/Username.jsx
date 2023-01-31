import React from 'react'
import "./Username.css"
import Photo from "../../Picture/no1.png"

function Username() {
  return (
    <>
     <div className="frame-Username">
        <div>
            <img width="63px" height="63px" src={Photo} alt=""/>
        </div>
        <div className="namepoint-username">
            <p>User name</p>
            <p>Point : 100</p>
        </div>
        <div className='icon1-username'></div>
        <div className='icon2-username'></div>
     </div>
    </>
  )
}

export default Username