import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/css/app.module.css'
import InputMessage from './ui/Input/InputMessage'
import Button from './ui/Button/Button'
import { AUTORS } from '../assets/consts/users'

function Form({ handlerMessageList, chatId }) {
  const [inputValue, setInputValue] = useState('')
  const handlerSubmit = (e) => {
    e.preventDefault()
    handlerMessageList({ text: inputValue, autor: AUTORS.user })
    reset()
  }
  const handlerInputValue = (e) => {
    setInputValue(e)
  }
  const reset = () => {
    setInputValue('')
  }

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <InputMessage
        type="textarea"
        handlerInputValue={handlerInputValue}
        inputValue={inputValue}
      />
      <Button inputValue={inputValue} icon />
    </form>
  )
}

Form.propTypes = {
  handlerMessageList: PropTypes.func,
  inputValue: PropTypes.string,
}

export default Form
