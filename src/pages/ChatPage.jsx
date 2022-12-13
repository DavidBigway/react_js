import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Chat from '../components/Chat/Chat'
import SideBar from '../components/SideBar'

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
      <SideBar onChatSelect={onChatSelect} />
      {!empty && <Chat chatId={chatId} chatBot={chatBot} />}
    </>
  )
}

export default ChatPage
