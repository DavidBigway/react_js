import React, { useCallback } from 'react'
import styles from './button.module.css'

export default function Button({
  children,
  formState,
  messageList,
  onMessageList,
}) {
  const handleOnClick = useCallback(
    (e) => {
      e.preventDefault()
      onMessageList((prev) => [
        ...prev,
        { ...formState, title: `Post ${messageList.length + 1}` },
      ])
    },
    [formState, messageList.length, onMessageList]
  )
  return (
    <>
      <button
        type="submit"
        className={styles['post-submit']}
        onClick={handleOnClick}
      >
        {children}
      </button>
    </>
  )
}
