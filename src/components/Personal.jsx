import React from 'react'
import fredy from '../assets/personal/Fredy Machuca.jpg'
import camila from '../assets/personal/CamilaMontes.jpg'
import jesus from '../assets/personal/Jesus Barzola.jpg'
import elvis from '../assets/personal/Elvis Leon.jpg'
import marisol from '../assets/personal/Marisol Machacuay.jpg'
import julio from '../assets/personal/Julio Rojas.jpg'
import katherin from '../assets/personal/Katherin Ventura.jpeg'
import jose from '../assets/personal/Jose Valle.jpg'

export default function Personal() {
  return (
    <>
        <h2 className='m-4 text-center font-bold font-mono text-lg text-cyan-600 tracking-wider'>NUESTRO PERSONAL</h2>
        <div className='flex flex-wrap gap-6 m-4 justify-center items-center'>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={fredy} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>PRESIDENTE</h4>
                <p className='my-2 font-semibold font-mono text-sm'>MACHUCA SOTO Fredy Andres</p>
            </div>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={camila} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>TESORERA</h4>
                <p className='my-2 font-semibold font-mono text-sm'>MONTES ALVAREZ Camila Emilar</p>
            </div>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={jesus} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>SECRETARIO</h4>
                <p className='my-2 font-semibold font-mono text-sm'>BARZOLA URCO Jesus</p>
            </div>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={elvis} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>VOCAL</h4>
                <p className='my-2 font-semibold font-mono text-sm'>LEON MONTERO Elvis</p>
            </div>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={marisol} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>VOCAL</h4>
                <p className='my-2 font-semibold font-mono text-sm'>MACHACUAY CIRINEO Marisol</p>
            </div>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={julio} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>FISCAL</h4>
                <p className='my-2 font-semibold font-mono text-sm'>ROJAS GUEVARA Julio Robert</p>
            </div>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={katherin} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>ADMINISTRADORA</h4>
                <p className='my-2 font-semibold font-mono text-sm'>VENTURA HURTADO Katherin</p>
            </div>
            <div className='flex flex-col w-36 justify-center p-2 m-2'>
                <div className='flex justify-center items-center w-32 h-32 my-2 rounded-full border-cyan-600 border-2 shadow-lg shadow-slate-500 hover:shadow-cyan-600'>
                    <img className='rounded-full h-28 w-28 border-4 border-cyan-600' src={jose} alt="" />
                </div>
                <h4 className='my-2 text-center font-bold font-serif text-base'>TECNICO</h4>
                <p className='my-2 font-semibold font-mono text-sm'>VALLE BLANCAS Jose</p>
            </div>
        </div>
    </>
  )
}
