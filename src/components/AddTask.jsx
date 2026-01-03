import React from 'react'

export const AddTask = () => {
  return (
    <div>
      Új task hozzáadása
      <form action="">
        <input type="text" placeholder='új task...' />
         <input type="text" placeholder='hozzárendelve...' />
        <input type="submit" value="mentés" />
      </form>
    </div>
  )
}
