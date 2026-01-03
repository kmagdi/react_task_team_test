import React from 'react'

export const AddTask = () => {
  return (
    <div>
      <h3>Új task hozzáadása</h3>
      <form >
        <input type="text" placeholder='új task...' />
        <input type="submit" value="mentés" />
      </form>
    </div>
  )
}
