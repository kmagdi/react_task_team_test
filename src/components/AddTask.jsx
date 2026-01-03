import React from 'react'

export const AddTask = () => {
  return (
    <div>
      <h1>Új task hozzáadása</h1>
      <form >
        <input type="text" placeholder='új task...' />
        <input type="submit" value="mentés" />
      </form>
    </div>
  )
}
