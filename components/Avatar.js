import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Avatar(username, logoutOnPress) {
  const { user, logout } = useMoralis()

  return (
    <Image
      className="cursor-pointer rounded-full bg-black hover:opacity-75"
      // lougoutOnPress if true then logout
      onClick={() => logoutOnPress && logout()}
      layout="fill"
      src={`https://avatars.dicebear.com/api/adventurer/${
        username || user.get('username')}.svg`}
    />
  )
}

export default Avatar
