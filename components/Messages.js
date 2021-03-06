import { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from '../components/SendMessage'
import Message from '../components/Message'

// only show messages from the last hour
const MINS_DURATION = 30

function Messages() {
  const { user } = useMoralis()
  const endOfMessagesRef = useRef(null)
  // targeting Messages field (case sensitive)
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    // querys messages at its createdAt date in an ascending order
    (query) =>
      query.ascending('createdAt').greaterThan(
        'createdAt',
        // method for keeping messages that have created less than an hour
        new Date(Date.now() - 1000 * 60 * MINS_DURATION)
      ),
    [],
    {
      //   creates live update of messages
      live: true,
    }
  )

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>

      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="mt-5 text-center text-gray-200">
        <p>You're up to date {user.getUsername()}!🔥</p>
      </div>
    </div>
  )
}

export default Messages
