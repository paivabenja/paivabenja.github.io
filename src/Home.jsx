import React from 'react'
import escudo from './assets/escudoPfc.png';

export default function Home() {
  return (
    <>
      <div className='h-full w-full bg-gradient-to-b from-myred to-black to-80%'>
        <div className='flex flex-col items-center justify-center text-white'>
          <img src={escudo} alt="" className='h-64 mt-28 duration-150 hover:scale-105' />
          <div className='flex flex-col items-center duration-150 hover:scale-105 hover:text-myred'>
            <h1 className='text-5xl font-semibold mt-10'>Pórtico Fútbol Club</h1>
            <h2>El más grande del Challao</h2>
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-white'>
         
      </div>
    </>
  )
}
