import React from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage() {
  const { user, Moralis } = useMoralis()

  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl bg-black px-6 py-4 opacity-80">
      <input
        className="flex-grow bg-transparent pr-5 text-white 
        placeholder-gray-500 outline-none"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        type="text"
      />
      <button className="font-bold text-rose-500">Send</button>
    </form>
  )
}

export default SendMessage
