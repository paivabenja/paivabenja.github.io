import React from 'react'
import escudo from './assets/escudo.jpeg';

export default function Home() {
  return (
    <div className='grid grid-rows-2 items-center justify-center w-full h-full bg-black'>
        <img src={escudo} alt="" className='h-16 self-center' />
      <h1 className='bg-white text-black top-0 p-4 border-2 border-black rounded-md'>Pórtico FC</h1>
    </div>
  )
}
