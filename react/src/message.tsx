import React from 'react'

type Props = {
  style?: React.CSSProperties
}

const Message: React.FC<Props> = props => <p {...props} />

export default Message
