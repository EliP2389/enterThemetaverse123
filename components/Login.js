import Image from 'next/image';

function Login() {
  return (
    <div className="bg-black relative text-white">
        <h1>I am the login screen</h1>
        <div className="flex flex-col absolute z-50 h-4/6 w-full
         items-center justify-center space-y-4"> 
            {/* {Logo} */}
            <Image 
            className="object-cover rounded-full" 
            src='https://wolf-wallpapers.pro/images/2048x1152-wolf-colorful-minimalism-2048x1152-resolution-hd-1-8-wolf-wallpapers.pro.jpg' 
            height={200} width={200}
            />

            {/* {Login button} */}
            <button className='bg-red-500 rounder-lg p-5 font-bold animate-pulse'>
                Login to the METAVERSE
                </button>
        </div>

        <div className="w-full h-screen">
            <Image 
            src='https://web-app-wpp-uks-prod-wppcom-cd-1.azurewebsites.net/-/media/project/wpp/images/wpp-iq/2021/gaming-and-the-metaverse.jpg' 
            layout='fill'
            objectFit='cover'
            />
        </div>
    </div>
  )
}

export default Login