import React from 'react'
import Chat from './Chat/Chat'
import SideBar from './SideBar'
import styles from '../assets/css/app.module.css'

function Main() {
  return (
    <main className={styles.main}>
      <SideBar />
      <Chat />
    </main>
  )
}

export default Main
