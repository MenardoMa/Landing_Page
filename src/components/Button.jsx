import React from 'react'

const Button = ({label, ariaLabel, className}) => {
  return (
    <button className={className}>
      {label}
    </button>
  )
}

export default Button
