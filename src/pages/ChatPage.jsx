import React from 'react'
import Chat from '../components/Chat/Chat'
import SideBar from '../components/SideBar'

import styles from '../assets/css/app.module.css'

function ChatPage({ empty = false }) {
  return (
    <>
      <div className={styles['chat-app']}>
        <SideBar />
        {!empty && <Chat />}
      </div>
    </>
  )
}

export default ChatPage
