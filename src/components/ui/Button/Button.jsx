import React from 'react'
import styles from './button.module.css'
import SendIcon from '@mui/icons-material/Send'

export default function Button({ children, icon = false, inputValue }) {
  return (
    <>
      {icon ? (
        <button type="submit" className={styles.button} disabled={!inputValue}>
          {children}
        </button>
      ) : (
        <button style={{ border: 'none' }} disabled={!inputValue}>
          <SendIcon
            style={inputValue ? { fill: '#999' } : { fill: '#ababab' }}
          />
        </button>
      )}
    </>
  )
}
