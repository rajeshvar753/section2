import React from 'react'
import Mybutton from '../Components/Mybutton'

const signup = () => {
  return (
    <div>
        <Mybutton dis={true}>Submit</Mybutton>
        <Mybutton>click me</Mybutton>
        <Mybutton dis={true}>Nice</Mybutton>
    </div>
  )
}

export default signup