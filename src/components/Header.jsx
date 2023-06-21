import React from 'react'
import logo from '../assets/LogoHome.svg'


export default function Header() {
  return (
    <>
    <header className='grid xl:grid-cols-2'>
      <div className='h-72'>
        <img src={logo} alt="" className='w-[100%] h-[100%]'/>
        <div className='absolute right-0 -top-12 -z-10 w-[60%] h-72 rounded-bl-full  bg-cyan-300'></div>
      </div>
      <nav className='flex flex-wrap flex-col md:flex-row justify-center pt-4'>
        <div className='flex justify-center p-2 m-2'>
          <a href="" className='text-center text-cyan-900 mx-4 font-bold font-serif'>PRINCIPAL</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a href="" className='text-center text-cyan-900 mx-4 font-bold font-serif'>SERVICIOS</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a href="" className='text-center text-cyan-900 mx-4 font-bold font-serif'>ESTATUTO</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a href="" className='text-center text-cyan-900 mx-4 font-bold font-serif'>PERSONAL</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a href="" className='text-center text-cyan-900 mx-4 font-bold font-serif'>CONECTATE CON LA COMUNIDAD</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a href="" className='text-center text-cyan-900 mx-4 font-bold font-serif'>CONSULTE SU DEUDA</a>
        </div>
      </nav>
    </header>
    </>
  )
}
