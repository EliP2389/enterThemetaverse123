import { useMoralis } from "react-moralis";

function Message({message}) {
const { user } = useMoralis();
// determines if the message was sent by user(myself) or someone else
const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  return (
    <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`} >
        <div className={`flex space-x-4 p-3 rounded-lg 
        ${isUserMessage 
            ? "rounded-br-none bg-rose-300"
            : "rounded-bl-none bg-purple-500"
        }`}>
           <p>{message.get('message')}</p> 
        </div>
    </div>
  )
}

export default Message