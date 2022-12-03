import { useEffect, useState } from 'react'
import Message from './components/Message'
import posts from './assets/posts.json'
import InputMessage from './components/InputMessage'

function App() {
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    setMessageList(posts)
  }, [])

  useEffect(() => {
    messageList.length > 1 &&
      setTimeout(() => {
        console.log(
          'Привет, я робот. Оставлен пост от:' +
            messageList[messageList.length - 1].autor
        )
      }, 1500)
  }, [messageList])

  return (
    <div style={{ ...styles.flex, ...styles.column }}>
      <div style={{ ...styles.posts, ...styles.flex }}>
        {messageList.map((post, i) => {
          return (
            <Message {...post} key={i + Math.random()}>
              {post.message}
            </Message>
          )
        })}
      </div>
      <InputMessage messageList={messageList} onMessageList={setMessageList} />
    </div>
  )
}

const styles = {
  posts: {
    marginBottom: '80px',
    flexWrap: 'wrap',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px',
  },
  column: {
    flexDirection: 'column',
  },
}

export default App
