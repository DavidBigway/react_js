import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Button from '../ui/Button/Button'
import styles from './chat.module.css'
import { useDispatch } from 'react-redux'
import { addNewChat } from '../../store/actions/chatActions'

function AddChat() {
  const [chatName, setChatName] = useState('')
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewChat({ id: nanoid(), chatName, chatHistory: [] }))
    setChatName('')
  }
  const handlerOnChange = (e) => {
    setChatName(e.target.value)
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

/* 
dispatch(addNewChat({id: nanoid(), chatName, chatHistory: []}))

*/

export default AddChat
