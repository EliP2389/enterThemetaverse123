import { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage() {
  const { user, Moralis } = useMoralis()
  const [message, setMessage]= useState("");

  const sendMessage = (e) => {
      e.preventDefault();

      if (!message) return;

      const Messages = Moralis.Object.extend('Messages')
      const messages = new Messages();
    //  save, saves messages in the table 
      messages.save({
          message: message,
          username: user.getUsername(),
          ethAddress: user.get('ethAddress'),
      }).then((message) => {
          message.json('message was successful')
      },
      (error) => {
        //  the save failed because
        // error is a Moralis.Error with an error code and Message
        console.log(error.message);
      }
      );
  };



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
      <button 
      type="submit" 
      onClick={setMessage}
      className="font-bold text-rose-500">Send</button>
    </form>
  )
}

export default SendMessage
