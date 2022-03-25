import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'

function Header() {
  const { user } = useMoralis()

  return (
    <div className="text-rose-500">
      <div className="">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://wolf-wallpapers.pro/images/2048x1152-wolf-colorful-minimalism-2048x1152-resolution-hd-1-8-wolf-wallpapers.pro.jpg"
          />
        </div>

        <div>
          <div className="relative h-48 w-48 rounded-full border-8 border-rose-500 lg:mx-auto">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the METAVERSE</h1>

          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          {/* {change username component} */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
