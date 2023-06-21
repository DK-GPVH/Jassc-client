import React from 'react'
import { BsClockHistory } from 'react-icons/bs'
import time from '../assets/time.svg'
import tarifa from '../assets/tarifa.svg'

export default function Principal() {
  return (
    <>
        <div className='flex flex-wrap justify-around m-4'>
            <div className='border-2 rounded-xl border-cyan-100 p-2 m-2'>
                <h2 className='text-center my-4 font-bold text-cyan-600'>HORARIO DE ATENCION</h2>
                    <div className='flex flex-wrap items-center justify-center gap-6'>
                        <img src={time} alt=""  className='w-72 h-72'/>
                        <table >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>DIA</th>
                                    <th>PRIMER TURNO</th>
                                    <th>SEGUNDO TURNO</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <BsClockHistory></BsClockHistory>
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        LUNES
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        9:00 a.m. - 1:00 p.m.
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        3:00 p.m. - 5:00 p.m.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BsClockHistory></BsClockHistory>
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        MARTES
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        9:00 a.m. - 1:00 p.m.
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        3:00 p.m. - 5:00 p.m.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BsClockHistory></BsClockHistory>
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        MIERCOLES
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        9:00 a.m. - 1:00 p.m.
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        3:00 p.m. - 5:00 p.m.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BsClockHistory></BsClockHistory>
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        JUEVES
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        9:00 a.m. - 1:00 p.m.
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        3:00 p.m. - 5:00 p.m.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BsClockHistory></BsClockHistory>
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        VIERNES
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        9:00 a.m. - 1:00 p.m.
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        3:00 p.m. - 5:00 p.m.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BsClockHistory></BsClockHistory>
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        SABADO
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        9:00 a.m. - 12:00 p.m.
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2 text-red-600'>
                                        CERRADO
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BsClockHistory></BsClockHistory>
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2'>
                                        DOMINGO
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2 text-red-600'>
                                        CERRADO
                                    </td>
                                    <td className='border-cyan-300 border-r-2 p-2 text-red-600'>
                                        CERRADO
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            <div className='border-2 border-cyan-100 rounded-xl p-2 m-2'>
                <h2 className='text-center m-2 font-bold font-mono text-lg text-cyan-600'>TARIFA</h2>
                <div className='flex flex-wrap gap-6 items-center justify-center'>
                <img src={tarifa} alt="" className='w-72 h-72' />
                    <div className='flex flex-col'>
                        <ul className='list-disc list-inside hover:list-outside m-2 border-cyan-300 border-2 rounded-3xl px-6 py-2 w-96'>
                            <h3>
                                SERVICIO :
                            </h3>
                            <li>COMERCIAL : s/.35.00 soles</li>
                            <li>DOMICILIO : s/.8.00 soles</li>
                        </ul>
                        <ul className='list-disc list-inside hover:list-outside m-2 border-cyan-300 border-2 rounded-3xl px-6 py-2 w-96'>
                            <h3>
                                RECONEXION :
                            </h3>
                            <li>MATRIZ : s/.150.00 soles</li>
                            <li>CAJA REGISTRO : s/.55.00 soles</li>
                        </ul>
                        <ul className='list-disc list-inside hover:list-outside m-2 border-cyan-300 border-2 rounded-3xl px-6 py-2 w-96'>
                            <h3>
                                DEBERES :
                            </h3>
                            <li>ASAMBLEA : s/.20.00 soles</li>
                            <li>FAENAS : s/.50.00 soles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-prismas p-4 rounded-tr-full rounded-br-full mr-4'>
            <p className='p-4 text-justify text-slate-900 text-lg font-semibold font-serif'><span className='text-red-900 underline underline-offset-1 italic font-extrabold text-xl font-sans'>NOTA:</span> Recuerden cancelar sus deudas antes de exceder los dos meses de morosidad debiado a que culminado este tiempo se procedera al corte respectivo del servicio</p>
        </div>
    </>
  )
}
