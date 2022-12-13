import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../Form'
import styles from './chat.module.css'
import { AUTORS } from '../../assets/consts/users'

const botMSG = 'Привет! Я бот.'

function Chat({ chatId, chatBot }) {
  const [messageList, setMessageList] = useState([
    { [chatId]: [{ text: '', autor: '' }] },
  ])
  const filtredChat = messageList.filter(
    (message) => Object.keys(message)[0] === chatId
  )

  const handlerMessageList = useCallback(
    (e) => {
      setMessageList([...messageList, { [chatId]: e }])
    },
    [chatId, messageList]
  )

  useEffect(() => {
    if (chatBot === 'bot') {
      const tOut = setTimeout(() => {
        handlerMessageList({ text: botMSG, autor: AUTORS.bot })
      }, 1500)
      if (
        filtredChat.length > 0 &&
        filtredChat[filtredChat.length - 1][chatId].autor === 'bot'
      ) {
        clearTimeout(tOut)
      }
    }
  }, [chatBot, chatId, filtredChat, handlerMessageList])
  return (
    <div className={styles.content}>
      <div className={styles.messages}>
        {filtredChat.map((message, idx) => {
          return (
            message[chatId].text && (
              <div
                key={`${chatId}_${idx}`}
                className={styles.message}
                style={
                  message[chatId].autor !== 'bot'
                    ? { backgroundColor: '#a9d9ff', alignSelf: 'flex-end' }
                    : { alignSelf: 'flex-start' }
                }
              >
                <span>{message[chatId].autor}</span>
                <div>{message[chatId].text}</div>
              </div>
            )
          )
        })}
      </div>
      <Form handlerMessageList={handlerMessageList} chatId={chatId} />
    </div>
  )
}
Chat.propTypes = {
  messageList: PropTypes.array,
}

export default Chat
