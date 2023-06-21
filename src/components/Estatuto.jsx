import React from 'react'
import jassc2021 from '../assets/estatuto.pdf'
import { BsFiletypePdf, BsFillArrowDownCircleFill } from 'react-icons/bs'

export default function Estatuto() {
  return (
    <>
        <div className='flex flex-wrap m-4 gap-6 items-center justify-around rounded-lg p-4 border-cyan-100 border-2'>
            <h2 className='w-24 text-center font-extrabold text-3xl font-mono text-cyan-600 tracking-wider m-4'>ESTATUTO</h2>
            <div className='w-96 text-justify m-4'>
                <h3 className='text-center font-bold font-serif text-lg text-cyan-500 underline underline-offset-2 decoration-cyan-600'>NUESTROS FINES</h3>
                <p className='my-4 font-serif text-slate-900'>
                    Prestar servicios en los centros poblados del ámbito rural en las mejores condiciones de calidad, para cubrir las necesidades de salubridad de los asociados de la "JASSC", a través de la adecuada administración de uno o de varios de los siguientes sistemas:
                </p>
                <ul className='list-disc list-inside text-slate-900 font-serif text-sm tracking-widest'>
                    <li>SERVICIO DE AGUA POTABLE</li>
                    <li>SISTEMA DE DISTRIBUCION</li>
                    <li>SERVICIO DE ALCANTARILLADO</li>
                    <li>SERVICIO DE DISPOSICION DE EXCRETAS</li>
                </ul>
            </div>
            <div className='flex justify-center items-center flex-col m-2'>
                <BsFiletypePdf className='w-24 h-24 text-cyan-600 animate-bounce'></BsFiletypePdf>
                <a href={jassc2021} download="JASSC_ESTATUTO">
                    <button className='flex justify-center items-center my-4 rounded-full bg-cyan-100 border-2 border-cyan-500 active:bg-cyan-600 active:border-gray-600 active:animate-pulse active:duration-200'> 
                        <BsFillArrowDownCircleFill className='w-[80%] h-[100%] text-cyan-500 animate-pulse'></BsFillArrowDownCircleFill>
                        <span className='px-2 font-bold tracking-wider text-sm text-slate-600'>DESCARGAR ESTATUTO</span>
                    </button>
                </a>
            </div>
        </div>
    </>
  )
}
