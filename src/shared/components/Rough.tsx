import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'

export default function Rough() {
  const rooms = 5; 
  const numbers = Array.from({length: rooms+1}, (_, idx)=> idx ); 
  console.log(numbers)
  return (
    <div>

    {/* <Button bgColor={''} color={''} disabled={false} size={'lg'} ></Button> */}
    <Dropdown items = {numbers}></Dropdown>
    </div>
  )
}


