import React, {useRef} from 'react'
import { Bs0SquareFill, BsHouseDoor, BsMailbox, BsMessenger, BsTelegram, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

export default function Contactos() {
    const form = useRef();
    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qcig7or','template_woioow3',form.current,'IhuK72CVj62Zx3l_R')
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        })

        document.querySelector("input[name='user_name']").value=' ';
        document.querySelector("input[name='user_email']").value=' ';
        document.querySelector("textarea[name='message']").value=' ';
    }

  return (
    <>
        <h2 className='text-center m-4 font-bold font-mono tracking-wider text-lg text-cyan-600'>CONTACTENOS</h2>
        <div className='flex flex-wrap justify-around mt-12 mb-4 items-center'>
            <div>
                <ul>
                    <li className='flex justify-start items-center font-semibold tracking-wide font-mono text-slate-600'><BsHouseDoor className='m-2 text-cyan-600 text-2xl'></BsHouseDoor> Curipata MZ.26 LT.6 zona B</li>
                    <li className='flex justify-start items-center font-semibold tracking-wide font-mono text-slate-600'><BsTelephoneFill className='m-2 text-cyan-600 text-2xl'></BsTelephoneFill>+51 946-784-841</li>
                    <li className='flex justify-start items-center font-semibold tracking-wide font-mono text-slate-600'><a className='flex justify-center items-center font-semibold tracking-wide font-mono text-slate-600' href="https://www.messenger.com/t/105943201979861" target="_blank"><BsMessenger className='m-2 text-cyan-600 text-2xl'></BsMessenger> JASSC</a></li>
                    <li className='flex justify-start items-center font-semibold tracking-wide font-mono text-slate-600'><a className='flex justify-center items-center font-semibold tracking-wide font-mono text-slate-600' href="https://wa.me/51946784841" target="_blank"><BsWhatsapp className='m-2 text-cyan-600 text-2xl'></BsWhatsapp> +51 946-784-841</a></li>
                    <li className='flex justify-start items-center font-semibold tracking-wide font-mono text-slate-600'><a className='flex justify-center items-center font-semibold tracking-wide font-mono text-slate-600' href="http://t.me/jassc2021" target="_blank"><BsTelegram className='m-2 text-cyan-600 text-2xl'></BsTelegram> +51 946-784-841</a></li>
                </ul>
            </div>
            <div className='flex flex-wrap justify-around items-center rounded-md border-2 p-2 border-cyan-100'>
                <div>
                    <BsMailbox className='w-36 h-36 m-4 text-cyan-400 animate-bounce'></BsMailbox>
                </div>
                <div className='flex flex-col w-72'>
                    <h4 className='text-center font-bold m-2 font-sans underline underline-offset-4 text-cyan-600 tracking-wider'>ENVIE SU RECOMENDACION</h4>
                    <form ref={form} onSubmit={enviarEmail} className='flex flex-col p-4'>
                        <label htmlFor="">NOMBRE :</label>
                        <input name='user_name' type="text"  className='bg-slate-200 border-2 border-cyan-400 rounded-md shadow-md shadow-slate-500 my-2 text-slate-900' required pattern='[A-Za-z]{3,75}'/>
                        <label htmlFor="">CORREO :</label>
                        <input name='user_email' type="email"  className='bg-slate-200 border-2 border-cyan-400 rounded-md shadow-md shadow-slate-500 my-2 text-slate-900' required pattern='{3,75}'/>
                        <label htmlFor="">RECOMENDACION :</label>
                        <textarea name='message' type="text"  className='bg-slate-200 border-2 border-cyan-400 rounded-md shadow-md shadow-slate-500 my-2 text-slate-900 h-24 max-h-32' required/>
                        <input type="submit" value='Enviar Comentario' className='my-2 bg-cyan-300 cursor-pointer text-lg font-bold font-sans p-2 text-slate-900 active:text-slate-100 rounded-lg border-2 border-cyan-600'/>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
