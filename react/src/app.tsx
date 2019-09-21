import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles'
import Title from './title'

const Message = React.lazy(() => import('./message'))

interface Props {
  message: string
}

const Root = ({ message }: Props) => (
  <>
    <Title>Demo</Title>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Message style={styles}>{message}</Message>
    </React.Suspense>
  </>
)

ReactDOM.render(<Root message="Hello React" />, document.getElementById('app'))
