import Message from './components/Message'

const posts = [
  {
    title: 'Post 1',
    text: 'Ut enim ad minima veniam, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, sunt in culpa...',
  },
  {
    title: 'Post 2',
    text: 'Nemo enim ipsam voluptatem, consectetur adipiscing elit, sunt in culpa qui officia deserunt mollit anim id est laborum? Sed ut...',
  },
  {
    title: 'Post 3',
    text: 'Added for pull request',
  },
]

function App() {
  return (
    <div style={styles.flex}>
      {posts.map((post, i) => {
        return (
          <Message title={post.title} key={i + Math.random()}>
            {post.text}
          </Message>
        )
      })}
    </div>
  )
}

const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px',
  },
}

export default App
