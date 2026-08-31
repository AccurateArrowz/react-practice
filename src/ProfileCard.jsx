import React from 'react'
import Image from './Image'


export default function ProfileCard({name, handle, workLocation, role, img }) {
  return (
    <div>
        <div className='gray-background bg-gray-200 relative'></div>
            <div className='image-wrapper absolute top-'>
              <Image src={img}></Image>
            </div>
                <p>{name}</p>
                <p>{handle}</p>
                <div>
                    <p>{workLocation}</p>
                    <p>{role}</p>
                </div>
                
                <button >Message</button>
                <button className='bg-blue-300'>Follow</button>

    </div>
  )
}
