import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import Form from '../Form'
import styles from './chat.module.css'
import { AUTORS } from '../../assets/consts/users'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewMessageThunk } from '../../store/actions/chatActions'
import { nanoid } from 'nanoid'

const botMSG = 'Привет! Я бот.'

function Chat() {
  const { id } = useParams()
  const chats = useSelector((state) => state.chat)
  const dispatch = useDispatch()
  const filteredChat = chats.filter((chat) => chat.id === id)
  const handlerMessageList = useCallback(
    (e) => {
      dispatch(addNewMessageThunk({ chatId: id, chatHistory: e }))
    },
    [dispatch, id]
  )

  useEffect(() => {
    if (filteredChat[0].chatName === 'bot') {
      const tOut = setTimeout(() => {
        handlerMessageList({
          id: nanoid(),
          text: botMSG,
          autor: AUTORS.bot,
        })
      }, 1500)
      if (
        filteredChat[0].chatHistory.length > 0 &&
        filteredChat[0].chatHistory[filteredChat[0].chatHistory.length - 1]
          .autor === 'bot'
      ) {
        clearTimeout(tOut)
      }
    }
  }, [filteredChat, handlerMessageList])

  return (
    <div className={styles.content}>
      <div className={styles.messages}>
        {filteredChat[0].chatHistory.map((message) => {
          return (
            message.text && (
              <div
                key={`${message.id}`}
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
          )
        })}
      </div>
      <Form handlerMessageList={handlerMessageList} />
    </div>
  )
}
Chat.propTypes = {
  messageList: PropTypes.array,
}

export default Chat
