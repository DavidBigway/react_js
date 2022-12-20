import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, contentToggle } from '../store/actions/profileActions'

import styles from '../assets/css/app.module.css'

function ProfilePage() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const visible = useSelector((store) => store.profile.visible)
  const titleName = useSelector((store) => store.profile.name)

  const handlerCheckbox = (e) => {
    dispatch(contentToggle(e.target.checked))
  }
  const onChangeName = () => {
    dispatch(changeName(name))
    setName('')
  }
  return (
    <>
      <div className={styles.profile}>
        <h1>Profile Page</h1>
        <fieldset style={{ width: 240, textAlign: 'center' }}>
          <legend>Visible content:</legend>

          <input
            type="checkbox"
            name="visible"
            onChange={handlerCheckbox}
            checked={visible}
          />
        </fieldset>
      </div>
      {visible && (
        <div>
          <h2>{titleName}</h2>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button onClick={onChangeName}>Change name</button>
        </div>
      )}
    </>
  )
}

export default ProfilePage
