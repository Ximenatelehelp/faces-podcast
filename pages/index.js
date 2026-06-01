import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Episodes from '../components/Episodes'
import Host from '../components/Host'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

// Custom cursor only on desktop
const CustomCursor = dynamic(() => import('../components/CustomCursor'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Faces Podcast — Entrepreneurs Are People Too</title>
        <meta
          name="description"
          content="The Faces Podcast: Real stories from founders and entrepreneurs. Hosted by Cody Hall — inspiring and educating entrepreneurs by sharing the human side of building businesses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="The Faces Podcast — Entrepreneurs Are People Too" />
        <meta
          property="og:description"
          content="Real stories. Real lessons. The human side of entrepreneurship."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />

        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Episodes />
        <Host />
        <Booking />
      </main>

      <Footer />
    </>
  )
}
