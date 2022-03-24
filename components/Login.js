import Image from 'next/image';

function Login() {
  return (
    <div className="bg-black relative text-white">
        <h1>I am the login screen</h1>
        <div> 
            {/* {Logo} */}

            {/* {Login button} */}
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