import React from 'react'
import { BsDoorClosed, BsSearch } from 'react-icons/bs'
import { useState } from 'react';
import { consultaPropiedad } from '../helpers/consultaPropiedad';


export default function Deudas() {
    const [propiedad, setPropiedad] = useState({});

  const actualizarPropiedad=(e)=>{  
    e.preventDefault();
      consultaPropiedad(e.target[0].value,e.target[1].value,e.target[2].value).then(data=>setPropiedad(data))
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = ""
    }
 const desplegarDeudas=(e)=>{
    
 }
 const actualizarCategoria = (data)=>{
    e.preventDefault();
    console.log(data)
 }

  return (
    <>
        <div className='flex flex-wrap justify-center p-12 m-4'>
            <div className='flex flex-wrap justify-around'>
                <div className='flex w-72 h-72 justify-center items-center'>
                    <BsSearch className='w-36 h-36 text-cyan-900 animate-pulse'></BsSearch>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='text-center font-bold text-xl text-cyan-600 tracking-widest underline underline-offser-1'>CONSULTA TU DEUDA</h2>
                    <form action="" className='flex flex-col m-4 justify-center' onSubmit={actualizarPropiedad}>
                        <label htmlFor="" className='text-md font-semibold font-sans tracking-wider'>MANZANA</label>
                        <input type="text" className='border-2 rounded-lg my-2 border-cyan-600 w-36 shadow-md shadow-slate-400' required pattern='[0-9]{1,3}'/>
                        <label htmlFor="" className='text-md font-semibold font-sans tracking-wider'>LOTE</label>
                        <input type="text" className='border-2 rounded-lg my-2 border-cyan-600 w-36 shadow-md shadow-slate-400' required pattern='[0-9]{1,3}'/>
                        <label htmlFor="" className='text-md font-semibold font-sans tracking-wider'>SUMINISTRO</label>
                        <input type="text" className='border-2 rounded-lg my-2 border-cyan-600 w-36 shadow-md shadow-slate-400' required pattern='[0-9]{1,3}'/>
                        <input type="submit" value='CONSULTAR' className='m-4 rounded-lg border-4 border-cyan-400 p-2 text-mono font-bold text-sm shadow-md shadow-slate-500 bg-cyan-900 text-cyan-300 active:bg-cyan-400 active:text-cyan-900'/>
                    </form>
                    {
            propiedad.res == true ? 
            <>
            <div className='flex fixed top-0 left-0 right-0 bottom-0 bg-blend-saturation justify-center items-center'>
                <div className='flex flex-col bg-cyan-50 rounded-md p-4 border-8 border-cyan-600 m-4'>
                    <h3 className='text-center underline text-purple-800 tracking-wider font-extrabold text-xl'>DATOS DE LA PROPIEDAD</h3>
                    <div className='flex flex-wrap justify-center'>
                        <h4 className='m-4 font-bold text-slate-600 font-mono text-lg border-r-2 border-l-2 border-cyan-400 px-2 text-md'>ZONA : {propiedad.propiedad.zona}</h4>
                        <h4 className='m-4 font-bold text-slate-600 font-mono text-lg border-r-2 border-l-2 border-cyan-400 px-2 text-md'>MANZANA : {propiedad.propiedad.manzana}</h4>
                        <h4 className='m-4 font-bold text-slate-600 font-mono text-lg border-r-2 border-l-2 border-cyan-400 px-2 text-md'>LOTE : {propiedad.propiedad.lote}</h4>
                        <h4 className='m-4 font-bold text-slate-600 font-mono text-lg border-r-2 border-l-2 border-cyan-400 px-2 text-md'>SUMINISTRO : {propiedad.propiedad.suministro}</h4>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <h4 className='m-4 text-center text-slate-600 font-mono text-lg font-bold border-r-2 border-l-2 border-cyan-400 px-2 text-md'>ESTADO : {propiedad.propiedad.estado == 1 ? "ACTIVO": "INACTIVO"}</h4>
                        <h4 className='m-4 text-center text-slate-600 font-mono text-lg font-bold border-r-2 border-l-2 border-cyan-400 px-2 text-md'>CATEGORIA : {propiedad.propiedad.categoria != false ? propiedad.propiedad.categoria: "NO TIENE UNA CATEGORIA ASIGNADA"}</h4>
                        <h4 className='m-4 text-center text-slate-600 font-mono text-lg font-bold border-r-2 border-l-2 border-cyan-400 px-2 text-md'>CLIENTE : {propiedad.propiedad.cliente != false ? propiedad.propiedad.cliente : "NO TIENE CLIENTE ASIGNADO"}</h4>
                    </div>
                    <div className='border-2 my-2 border-cyan-400'></div>
                    <h2 className='mb-2 font-extrabold font-mono text-xl text-slate-700 tracking-widest'>DEUDAS:</h2>
                    <div className='flex flex-col h-64 w-auto items-center bg-cyan-400 overflow-auto rounded-md border-b-4 border-gray-400'>
                        { 
                            propiedad.propiedad.deudas.length > 0  ? 
                            propiedad.propiedad.estado != 0 ?
                            <div className='flex flex-col'>
                                { propiedad.propiedad.deudas.map((date)=>
                                    <div className='flex flex-col p-2 m-2 bg-cyan-800 rounded-2xl'>
                                        <span className='text-slate-100 font-sans font-bold'>Su deuda esta activa a partir de : {date}</span>
                                        <span className='m-2 text-center text-slate-100 font-mono font-extrabold'> S/. {propiedad.propiedad.categoria_monto}</span>
                                    </div>
                                    ) }
                            </div> 
                            :
                            <h2>Su propiedad esta inactiva , le sugerimos activar su propiedad</h2>
                            :
                            <h2>No tiene deudas</h2>
                        }
                    </div>
                </div>
                
            </div>
            <div className='flex items-center justify-center fixed top-4 right-4 rounded-full w-16 h-16 bg-red-400 border-4 border-gray-500' onClick={()=> (setPropiedad({}))}>
                <BsDoorClosed className='text-lg text-slate-900 animate-bounce'></BsDoorClosed>
            </div>
            </>
            : 
            propiedad.res == false &&
            <p className='font-bold text-mono text-center text-red-500 tracking-wider'>La propiedad no existe</p>
        }
                </div>
            </div>
        </div>
        
    </>
  )
}
