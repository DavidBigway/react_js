import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../Form'
import styles from './chat.module.css'
import { AUTORS } from '../../assets/consts/users'

const botMSG = 'Привет! Я бот.'

function Chat() {
  const [messageList, setMessageList] = useState([{}])

  const handlerMessageList = useCallback(
    (e) => {
      setMessageList([...messageList, e])
    },
    [messageList]
  )

  useEffect(() => {
    if (messageList[messageList.length - 1].autor !== 'bot') {
      setTimeout(() => {
        handlerMessageList({ text: botMSG, autor: AUTORS.bot })
      }, 1500)
    }
  }, [handlerMessageList, messageList])
  return (
    <div className={styles.content}>
      <div className={styles.messages}>
        {messageList.map(
          (message, idx) =>
            message.text && (
              <div
                key={idx}
                className={styles.message}
                style={
                  message.autor !== 'bot'
                    ? { backgroundColor: '#a9d9ff', alignSelf: 'flex-end' }
                    : { alignSelf: 'flex-start' }
                }
              >
                <span>{message.autor}</span>
                <div>{message.text}</div>
              </div>
            )
        )}
      </div>
      <Form handlerMessageList={handlerMessageList} />
    </div>
  )
}
Chat.propTypes = {
  messageList: PropTypes.array,
}

export default Chat
