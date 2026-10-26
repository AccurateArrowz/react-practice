import React, { useState } from 'react'

type DropdownProps<T extends string | number> = {
    items: Array<T>,
}

export default function Dropdown({items}: DropdownProps<T>) {
    const [selectedItem, setSelectedItem] = useState(items[0])  ;
  return (
    <select value= {selectedItem} 
    onChange={ (e)=> {setSelectedItem(e.target.value) }}>
        {items.map(item => 
            <option key={item} value={item}>{item}</option>
        )}
    </select>
  )
}
