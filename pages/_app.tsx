import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto min-h-screen relative bg-gray-50">
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-1">
        <Nav />
        <div className="px-4">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  ) 
}
export default MyApp
