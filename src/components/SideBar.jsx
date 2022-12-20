import React from 'react'
import AddChat from './Chat/AddChat'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SideBar() {
  const chats = useSelector((store) => store.chat)

  return (
    <div style={styles.sidebar}>
      <AddChat />
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
              >
                {el.chatName}
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
