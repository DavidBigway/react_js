import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Button from '../ui/Button/Button'
import styles from './chat.module.css'

function AddChat({ handlerAddChat }) {
  const [chatName, setChatName] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    handlerAddChat({ id: nanoid(), name: chatName })
    reset()
  }
  const handlerOnChange = (e) => {
    setChatName(e.target.value)
  }
  const reset = () => {
    setChatName('')
  }
  return (
    <form onSubmit={onSubmit} className={styles['add-chat']}>
      <input type="text" value={chatName} onChange={handlerOnChange} />
      <Button type="submit" inputValue={chatName}>
        Add new chat
      </Button>
    </form>
  )
}

export default AddChat
