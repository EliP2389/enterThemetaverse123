import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
    appId="nmBNCXPXtnBXcNzvkYGHv73sJ7WeqoGLLAdz8i2l"
    serverUrl="https://k7v5moejvt5t.usemoralis.com:2053/server"
    >
     <Component {...pageProps} />
     </MoralisProvider>

  )
}

export default MyApp
