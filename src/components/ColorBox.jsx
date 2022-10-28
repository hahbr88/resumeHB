import React from 'react'
import ColorContext from '../contexts/darkMode'

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {
        c => (
          <div style={{
            width: "100px",
            height: "100px",
            background: c.color
          }}>
        </div>
        )
      }
    </ColorContext.Consumer>
  )
}

export default ColorBox