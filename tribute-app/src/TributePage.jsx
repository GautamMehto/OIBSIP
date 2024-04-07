import React from 'react'
import Tribute from "./Components/Tribute"
import Photo from "./Components/Photo"

const TributePage = () => {
  return (
    <div className='relative flex'>
      <Tribute/>
      <Photo/>
    </div>
  )
}

export default TributePage