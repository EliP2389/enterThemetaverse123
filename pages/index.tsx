import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'
import Image from 'next/image'

const Home: NextPage = () => {
  const isAuthenticated = false;

if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the Metaverse</h1>
    </div>
  )
}

export default Home
