import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';


function Login() {
    const [values, setValues] = useState({
        email: '',
        contraseña: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

  return (
    <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Iniciar sesión</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Ingresar email' name='email'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.email && <span className=''>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="contraseña"><strong>Contraseña</strong></label>
                    <input type="contraseña" placeholder='Ingresar contraseña' name='contraseña'
                    onChange={handleInput} className='form-control rounded-0'></input>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Iniciar sesión</button>
                <p>Estas de acuerdo con los teminos y condiciones</p>
                <Link to="/signup" className='btn btn-success w-100 rouended-0 text-decoration-none'>Crear cuenta</Link>
            </form>
        </div>
    </div>
  )
}

export default Login