import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './Signupvalidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const validationErrors = validation(values);
        setErrors(validationErrors);
        
        // No necesitas esperar 0 ms, simplemente continúa después de establecer los errores
       
            try {
                const res = await axios.post('http://localhost:8081/signup', values);
                console.log("Server response:", res.data); // Verifica la respuesta del servidor
                
                if (res.data.message === "Cuenta creada exitosamente") {
                    setSuccessMessage(res.data.message);
                    navigate('/');
                } else {
                    alert(res.data.message);
                }
            } catch (err) {
                console.error("Error en la solicitud:", err); // Maneja los errores de la solicitud
            }
        
    };
    

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className="bg-white p-3 rounded  w-25">
                <h2>Crear cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Nombre</strong></label>
                        <input
                            type="text"
                            placeholder="Ingrese su nombre"
                            name='name'
                            value={values.name}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder='Ingresa su email'
                            name='email'
                            value={values.email}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input
                            type="password"
                            placeholder='Ingresa su contraseña'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100'>Crear cuenta</button>
                    <p>Politicas y condiciones</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light'>Iniciar Sesion</Link>
                </form>
                {successMessage && <div className='text-success'>{successMessage}</div>}
            </div>
        </div>
    );
}

export default Signup;
