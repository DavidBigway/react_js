import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './input-message.module.css'

export default function InputMessage({
  type,
  placeholder = 'Введите сообщение...',
  handlerInputValue,
  inputValue,
}) {
  const [newValue, setNewValue] = useState('')

  const handlerOnChange = (e) => {
    if (e.target.value.length < 120) {
      setNewValue(e.target.value)
    } else {
      alert('Слишком длинное сообщение')
    }
  }
  useEffect(() => {
    handlerInputValue(newValue)
  }, [handlerInputValue, newValue])
  useEffect(() => {
    if (inputValue === '') {
      setNewValue('')
    }
  }, [inputValue])

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={newValue}
        className={styles.input}
        onChange={handlerOnChange}
      />
    </>
  )
}

InputMessage.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handlerInputValue: PropTypes.func,
  inputValue: PropTypes.string,
}
