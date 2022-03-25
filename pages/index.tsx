import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header'
import Image from 'next/image'

const Home: NextPage = () => {
  // handles authentication
const { isAuthenticated, logout } = useMoralis();

if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-rose-700 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="max-w-screen-2xl mx-auto">
      <Header />
      {/* {Messages} */}
      </div>
  
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
