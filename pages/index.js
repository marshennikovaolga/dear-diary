import React from 'react'
import Link from 'next/link'
import { tw } from 'twind'
import Theme from '../components/Theme'

const IndexPage = () => {
  return (
    <div  style={{ userSelect: 'none' }} className={tw`text-center flex flex-col items-center justify-center`}>
      <div className='mt-10'>
      <Theme />
      </div>
      <h1 className={tw`mt-10 text-s text-center`}>diary</h1>
      <p className={tw`mt-5 max-w-md px-4`}>
        During the last two years, I've traveled extensively and decided to create this website.
        This blog will contain short notes and photos that I'll try to post every month.
        This site is created for myself and for practice in Next.js and Tailwind technologies.
        If you're reading this, I'm delighted that my travels have captured your interest!
      </p>
      <ul className={tw`mt-5`}>
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
