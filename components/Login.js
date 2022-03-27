import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()

  return (
    <div className="relative bg-black text-white">
      <h1>I am the login screen</h1>
      <div
        className="absolute z-50 flex h-4/6 w-full flex-col
         items-center justify-center space-y-4"
      >
        {/* {Logo} */}
        <Image
          className="rounded-full object-cover"
          src="https://wolf-wallpapers.pro/images/2048x1152-wolf-colorful-minimalism-2048x1152-resolution-hd-1-8-wolf-wallpapers.pro.jpg"
          height={200}
          width={200}
        />
        {/* {Login button} */}
        <button
          onClick={authenticate}
          className="rounder-lg animate-pulse rounded-full bg-rose-700 p-5 font-bold"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="h-screen w-full">
        <Image
          src="https://cdn.uhive.com/wp-content/uploads/2021/09/uhives-metavers-5th-section-5.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
