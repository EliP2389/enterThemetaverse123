import { useMoralis } from 'react-moralis'
import Avatar from '../components/Avatar'

function Message({ message }) {
  const { user } = useMoralis()
  // determines if the message was sent by user(myself) or someone else
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress')

  return (
    <div
      className={`relative flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar username={message.get('username')} />
      </div>

      <div
        className={`flex space-x-4 rounded-lg p-3 
        ${
          isUserMessage
            ? 'rounded-br-none bg-rose-300'
            : 'rounded-bl-none bg-purple-500'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>

      {/* {timestamp} */}

      <p
        className={`absolute -bottom-5 text-xs
        ${isUserMessage ? 'text-rose-300' : 'text-purple-500'}`}
      >
        {message.get('username')}
      </p>
    </div>
  )
}

export default Message
