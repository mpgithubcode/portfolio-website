import React from 'react'
import '../constants/card.css';

const Card3d = () => {
  return (
    <div className="card-container">
      <div className="card card-1" style={{"--i":"-1"}}></div>
      <div className="card card-2" style={{"--i":"0"}}></div>
      <div className="card card-3" style={{"--i":"1"}}></div>
    </div>
  )
}

export default  Card3d
