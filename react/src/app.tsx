import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  message: string
}

function Root({ message }: Props) {
  return <div style={{ color: 'red' }}>{message}</div>
}

ReactDOM.render(<Root message="Hello React" />, document.getElementById('app'))
