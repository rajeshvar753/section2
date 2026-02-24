import React from 'react'

const Mybutton = ({children, dis }) => {
  return (
  <button disabled={dis} className='bg-violet-500 disabled:bg-gray-400 text-white px-5 py-2 rounded-md'>
  {children}
  </button>
  )
}

export default Mybutton