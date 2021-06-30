import React from 'react'
import './Button.css'

const Button = props => {
    return (
     <div className="calculator">  <button>{props.label}</button></div>
    )
}


export default Button
