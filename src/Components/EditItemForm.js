import React, { useState } from 'react'

const EditItemForm = props => {

  const { item, setEdit, getItems } = props

  const [newContent, setNewContent] = useState(item.content)

  const editItem = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        content: newContent
      })
    })
    .then(() => setNewContent(""))
    .then(() => setEdit(false))
    .then(() => getItems())
  }  

  return (
    <div>
      <form onSubmit={e => editItem(e, item.id)}>
        <input type="text" placeholder={item.content} onChange={e => setNewContent(e.target.value)} />
        <input type="submit" />
      </form> 
    </div>
  )
}

export default EditItemForm