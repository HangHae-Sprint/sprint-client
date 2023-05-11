import React from 'react'
import * as CSS from '../component/style'

const Button = (props) => {
  return (

    <CSS.Button
      type={props.type}
      size={props.size}
      onClick={props.onClick}
    >{props.children}</CSS.Button>


  )
}

export default Button