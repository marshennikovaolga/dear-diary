import React from 'react'
import Link from 'next/link'
import { tw } from 'twind'
import Theme from '../components/Theme'

const IndexPage = () => {
  return (
    <div style={{ userSelect: 'none' }} className={tw`text-center flex flex-col items-center justify-center`}>
      <div className='mt-10'>
        <Theme />
      </div>
      <h1 className={tw`mt-10 text-s text-center`}>&#x2665; diary &#x2665;</h1>
      <p className={tw`mt-5 max-w-md px-4`}>
        Over the past two years, I've been traveling extensively and have decided to share various content on this website.
        This blog will feature short notes, Spotify songs, and photos that I'll strive to post every month.
        The site is created for my personal use and for practicing Next.js and Tailwind technologies.
        If you're reading this, I'm delighted that my thoughts have captured your interest!
        code is <Link href="https://github.com/marshennikovaolga/dear-diary">
          <span className={tw`italic cursor-pointer`}>open source</span>
        </Link>
      </p>
      <p className={tw`mt-3 mb-2 italic`}>2024</p>
      <ul>
        <li>
          <Link href="/march">
            march — saint petersburg / tbilisi
          </Link>
        </li>
        <li>
          <Link href="/april">
            april — tbilisi
          </Link>
        </li>
        <li>
          <Link href="/may">
            may — tbilisi / istanbul
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
