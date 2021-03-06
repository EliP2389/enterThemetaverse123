import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
  const { user } = useMoralis()

  return (
    <div className="sticky top-0 z-50 border-b-2 border-rose-700 bg-black p-5 text-rose-500 shadow-sm">
      <div className="grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://wolf-wallpapers.pro/images/2048x1152-wolf-colorful-minimalism-2048x1152-resolution-hd-1-8-wolf-wallpapers.pro.jpg"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-8 border-rose-500 lg:mx-auto">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the METAVERSE</h1>

          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
