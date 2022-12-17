import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from '../assets/css/app.module.css'
import ChatPage from '../pages/ChatPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/" element={<ChatPage empty />} />
        <Route path="/chat/:id" element={<ChatPage />} />
      </Routes>
    </main>
  )
}

export default Main
