import React from 'react'

function Container({children}) { // we have to pass the object children in this container
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container
