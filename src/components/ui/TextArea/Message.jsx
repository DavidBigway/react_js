import React from 'react'
import styles from './message.module.css'

export default function Message({ title, children, autor }) {
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>{children}</p>
        <span className={styles.autor}>{autor}</span>
      </div>
    </>
  )
}
