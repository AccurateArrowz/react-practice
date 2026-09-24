import z from "zod";

const loginSchema = z.object({
email: z.email(), 
password: z.string(), 

})

// loginSchema.safeParse({email: true, password: 'sujay12'})
loginSchema.safeParse({email: 'sujay12@gmail.com', password: 'sujay12'})

import React from 'react'

export default function rough() {
  return (
    <div>
   
    </div>
  )
}
