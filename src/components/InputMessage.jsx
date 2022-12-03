import React, { useState } from 'react'
import Button from './Button'
import styles from './input-message.module.css'

export default function InputMessage({ messageList, onMessageList }) {
  const [formState, setFormState] = useState({})
  const handleOnChange = (e) => {
    if (e.target.id === 'autor') {
      setFormState({
        ...formState,
        autor: e.target.value,
      })
    }
    if (e.target.id === 'message') {
      setFormState({
        ...formState,
        message: e.target.value,
      })
    }
  }
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="autor">Автор</label>
        <input
          className={styles.input}
          type="text"
          name="autor"
          id="autor"
          onChange={handleOnChange}
        />
        <label htmlFor="message">Сообщение</label>
        <textarea
          className={styles.input}
          type="textarea"
          name="message"
          id="message"
          onChange={handleOnChange}
        />
        <Button
          formState={formState}
          messageList={messageList}
          onMessageList={onMessageList}
        >
          Отправить
        </Button>
      </form>
    </>
  )
}
