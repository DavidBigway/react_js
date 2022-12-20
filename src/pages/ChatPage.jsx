import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Chat from '../components/Chat/Chat'
import SideBar from '../components/SideBar'

import styles from '../assets/css/app.module.css'

function ChatPage({ empty = false }) {
  const { id } = useParams()
  const [chatId, setChatId] = useState(id)
  const [chatBot, setChatBot] = useState()

  const onChatSelect = (e) => {
    setChatId(e.id)
    setChatBot(e.name)
  }
  return (
    <>
      <div className={styles['chat-app']}>
        <SideBar onChatSelect={onChatSelect} />
        {!empty && <Chat chatId={chatId} chatBot={chatBot} />}
      </div>
    </>
  )
}

export default ChatPage
