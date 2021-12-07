import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Web Hosting in NZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Web Hosting in NZ" />
        <p className="description">
        Webpage under construction. Check back soon though!
        </p>
        <p className="description">
        <a href="https://webhostingreviews.nz/">Web Hosting</a> in NZ | <a href="https://www.ispreviews.co.nz/">ISP Reviews</a> in NZ
        </p>
      </main>

      <Footer />
    </div>
  )
}
