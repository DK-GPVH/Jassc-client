import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Servicios from './components/Servicios'
import Principal from './components/Principal'
import Estatuto from './components/Estatuto'
import Personal from './components/Personal'
import Contactos from './components/Contactos'
import Deudas from './components/Deudas'
import Respaldos from './components/Respaldos'
import logo from './assets/LogoHome.svg'

function App() {
  
  const contactos = useRef(null);
  const deudas = useRef(null);
  const estatuto = useRef(null);
  const personal = useRef(null);
  const principal = useRef(null);
  const respaldos = useRef(null);
  const servicios = useRef(null);

  const scrollTosection = (elementRef) => {
    window.scrollTo(
      {
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      }
    )
  }

  return (
    <>
    <header className='grid xl:grid-cols-2'>
      <div className='h-72'>
        <img src={logo} alt="" className='w-[100%] h-[100%]'/>
        <div className='absolute right-0 -top-12 -z-10 w-[60%] h-72 rounded-bl-full  bg-cyan-300'></div>
      </div>
      <nav className='flex flex-wrap flex-col md:flex-row justify-center pt-4'>
        <div className='flex justify-center p-2 m-2'>
          <a onClick={()=>scrollTosection(principal)} className='text-center text-cyan-900 mx-4 font-bold font-serif'>PRINCIPAL</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a onClick={()=>scrollTosection(servicios)} className='text-center text-cyan-900 mx-4 font-bold font-serif'>SERVICIOS</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a onClick={()=>scrollTosection(estatuto)} className='text-center text-cyan-900 mx-4 font-bold font-serif'>ESTATUTO</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a onClick={()=>scrollTosection(personal)} className='text-center text-cyan-900 mx-4 font-bold font-serif'>PERSONAL</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a onClick={()=>scrollTosection(contactos)} className='text-center text-cyan-900 mx-4 font-bold font-serif'>CONTACTENOS</a>
        </div>
        <div className='flex justify-center p-2 m-2'>
          <a onClick={()=>scrollTosection(deudas)} className='text-center text-cyan-900 mx-4 font-bold font-serif'>CONSULTE SU DEUDA</a>
        </div>
      </nav>
    </header>
  <div ref={servicios}>
    <Servicios></Servicios>
  </div>
  <div ref={principal}>
    <Principal></Principal>
  </div>
  <div ref={estatuto}>
    <Estatuto></Estatuto>
  </div>
  <div ref={personal}>
    <Personal></Personal>
  </div>
  <div ref={contactos}>
    <Contactos></Contactos>
  </div>
  <div ref={deudas}>
    <Deudas></Deudas>
  </div>
  <div ref={respaldos}>
    <Respaldos></Respaldos>
  </div>
    
  
  <Footer></Footer>
    </>
  )
}

export default App
