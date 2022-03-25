import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Header() {
  const { user } = useMoralis()

  return (
    <div>
      <div className=''>
        <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
          <Image 
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          src="https://wolf-wallpapers.pro/images/2048x1152-wolf-colorful-minimalism-2048x1152-resolution-hd-1-8-wolf-wallpapers.pro.jpg"
           />
        </div>
          
          <div>
       <div>{/* {Avatar} */}</div> 

        {/* {Welcome message} */}
        {/* {username} */}

        {/* {change username component} */}
        </div>
      </div>
    </div>
  )
}

export default Header
