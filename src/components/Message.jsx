import React from 'react'
import styles from './Message.module.css'

export default function Message({ title, children }) {
  return (
    <>
      <div className={styles.message}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{children}</p>
      </div>
    </>
  )
}
