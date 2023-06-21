import React from 'react'
import conservacion from '../assets/conservacion.jpeg'
import reparacion from '../assets/reparacion.jpeg'
import mantenimiento from '../assets/mantenimiento.jpeg'

export default function Servicios() {
  return (
    <>
            <h1 className='text-center font-bold font-mono text-xl my-4 text-cyan-600'>OFRECEMOS</h1>
            <div className='flex items-center flex-wrap justify-around'>
                <div className='w-64 p-2 m-4 shadow-md rounded-md shadow-cyan-200 hover:shadow-cyan-500 hover:-translate-y-3 hover:text-cyan-600'>
                    <img className='h-48 w-[100%] object-center rounded-t-3xl' src={reparacion} alt="" />
                    <h2>REPARACIONES</h2>
                    <div className='h-1 bg-cyan-400 m-2'/>
                    <p className='text-justify p-2'>Reparacion de tuberias en el sector Curipata</p>
                </div>
                <div className='w-64 p-2 m-4 shadow-md rounded-md shadow-cyan-200 hover:shadow-cyan-500 hover:-translate-y-3 hover:text-cyan-600'>
                    <img className='h-48 w-[100%] object-center rounded-t-3xl' src={conservacion} alt="" />
                    <h2>CONSERVACION</h2>
                    <div className='h-1 bg-cyan-400 m-2'/>
                    <p className='text-justify p-2'>Conservacion de las captaciones en Rihuispuquio</p>
                </div>
                <div className='w-64 p-2 m-4 shadow-md rounded-md shadow-cyan-200 hover:shadow-cyan-500 hover:-translate-y-3 hover:text-cyan-600'>
                    <img className='h-48 w-[100%] object-center rounded-t-3xl' src={mantenimiento} alt="" />
                    <h2>MANTENIMIENTO</h2>
                    <div className='h-1 bg-cyan-400 m-2'/>
                    <p className='text-justify p-2 bg-wave'>Mantenimiento del reservorio curipata 1-2</p>
                </div>
                
            </div>
    </>
  )
}

