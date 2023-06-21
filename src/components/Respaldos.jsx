import React from 'react'
import ana from '../assets/ANA.jpg'
import otass from '../assets/otass.jpg'
import sunass from '../assets/sunass.jpg'
import sunat from '../assets/sunat.jpg'

export default function Respaldos() {
  return (
    <>
        <div className='flex flex-wrap justify-around items-center p-2 m-4 gap-6'>
            <div className='flex h-36 items-center justify-center m-4'>
                <a href="https://www.gob.pe/ana" target='_blank'><img src={ana} alt="" className='h-36'/></a>
            </div>
            <div className='flex h-36 items-center justify-center m-4'>
                <a href="https://www.gob.pe/otass" target='_blank'><img src={otass} alt="" className='h-36'/></a>
            </div>
            <div className='flex h-36 items-center justify-center m-4'>
                <a href="https://www.gob.pe/sunass" target='_blank'><img src={sunass} alt="" className='h-36'/></a>
            </div>
            <div className='flex h-36 items-center justify-center m-4'>
                <a href="https://www.sunat.gob.pe" target='_blank'><img src={sunat} alt="" className='h-36'/></a>
            </div>
        </div>
    </>
  )
}
