import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [count, setCount ] = useState(0);

    useEffect(()=> {
        const intervalId = setInterval(()=> { setCount(c=> c+1)}, 1000);
        return ()=> clearInterval(intervalId);
    }, [])

  return (
    <div>
        <p>count: {count} </p>
    </div>
  )
}
