import React from 'react'
import {BsTwitter,BsTiktok,BsInstagram,BsFacebook} from "react-icons/bs"

export default function Footer() {
  return (
    <> 
    <div className='flex flex-col p-4 justify-center bg-cyan-300 rounded-t-full bottom-0 '>
            <h2 className='text-3xl text-slate-800 m-6 text-center'>REDES SOCIALES</h2>
            <div className='flex flex-row flex-wrap justify-center lg:justify-around items-center p-4 m-4 gap-12'>
                <a href="https://twitter.com/JASSC01891851" target='_blank'><BsTwitter className='text-6xl text-slate-700'/></a>
                <a href="https://www.tiktok.com/@jasscuripata_laoroya" target='_blank'><BsTiktok className='text-6xl text-slate-700'/></a>
                <a href="https://www.facebook.com/jassc.curipata" target='_blank'><BsFacebook className='text-6xl text-slate-700'/></a>
                <a href="https://www.instagram.com/jassccuripata" target='_blank'><BsInstagram className='text-6xl text-slate-700'/></a>
            </div>
    </div>
    </>
  )
}

