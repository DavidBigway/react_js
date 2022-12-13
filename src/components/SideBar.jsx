import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import AddChat from './Chat/AddChat'
import { NavLink } from 'react-router-dom'

function SideBar({ onChatSelect }) {
  const [chats, setChats] = useState([{ id: nanoid(), name: 'bot' }])
  const handlerAddChat = (e) => {
    setChats([...chats, e])
  }

  return (
    <div style={styles.sidebar}>
      <AddChat handlerAddChat={handlerAddChat} />
      <ul>
        {chats.map((el) => {
          return (
            <li
              key={el.id}
              style={{
                display: 'flex',

                height: '58px',
                borderBottom: '1px solid rgba(0,0,0, 0.25)',
              }}
            >
              <NavLink
                to={`/chat/${el.id}`}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                  flexGrow: 1,
                  padding: '6px 12px',
                })}
                onClick={() => onChatSelect(el)}
              >
                {el.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const styles = {
  sidebar: {
    borderRight: '1px solid rgba(0,0,0, 0.33)',
  },
}

export default SideBar
