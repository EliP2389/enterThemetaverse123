import { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage() {
  const { user, Moralis } = useMoralis()
  const [message, setMessage]= useState("");

  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl
     bg-black px-6 py-4 opacity-80 shadow-xl rounded-full border-4 border-purple-500">
      <input
        className="flex-grow bg-transparent pr-5 text-white 
        placeholder-gray-500 outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
        type="text"
      />
      <button className="font-bold text-rose-500">Send</button>
    </form>
  )
}

export default SendMessage
