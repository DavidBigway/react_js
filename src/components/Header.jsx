import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../assets/css/app.module.css'
import { nanoid } from 'nanoid'

const navigation = [
  {
    to: '/',
    name: 'home',
    id: nanoid(),
  },
  {
    to: '/profile',
    name: 'profile',
    id: nanoid(),
  },
  {
    to: '/chat',
    name: 'chat',
    id: nanoid(),
  },
]

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navigation.map((el) => {
            return (
              <li key={el.id}>
                <NavLink
                  to={el.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'green' : 'blue',
                  })}
                >
                  {el.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
