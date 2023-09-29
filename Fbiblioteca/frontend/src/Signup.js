import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Registrase</h2>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="nombre"><strong>Nombre</strong></label>
                    <input type="text" placeholder='Ingresar tu nombre' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Ingresar email' className='form-control rounded-0'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor="contraseña"><strong>Contraseña</strong></label>
                    <input type="contraseña" placeholder='Ingresar contraseña' className='form-control rounded-0'></input>
                </div>
                <button className='btn btn-success w-100 rounded-0'>Registrase</button>
                <p>Estas de acuerdo con los teminos y condiciones</p>
                <Link to="/" className='btn btn-success w-100 rouended-0 text-decoration-none'>Iniciar sesión</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup