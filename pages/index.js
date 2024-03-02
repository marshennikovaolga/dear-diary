import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>hello world</title>
        <meta name="description" content="diary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello</h1>
        <p>world</p>
      </main>
      <footer>
        <p>2024</p>
      </footer>
    </div>
  )
}