
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './LoginValidation';
import axios from 'axios';
import Home from './Home';
import Signup from './Signup';
import './css/login.css';

function Login(){

    const [values, setValues] = useState({
            email: '',
            password: '',
            rol:''

        })
     const navigat = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data.message === "Success") {
                        // Verificar el rol del usuario
                        const userRole = res.data.user.rol;
                        if (userRole === "estudiante") {
                            navigat('/home');
                        }else if(userRole==="profesor"){
                            navigat('/signup');
                        } 
                        else {
                            // Usuario no tiene el rol de estudiante, mostrar alerta
                            alert("No tienes permiso para acceder. Solo los estudiantes pueden iniciar sesión.");
                        }
                    } else {
                        // Usuario no encontrado, mostrar alerta
                        alert("No se encontró el usuario. Por favor, revisa tus credenciales.");
                    }
                })
                .catch(err => {
                    // Manejar errores de conexión u otros errores
                    console.error('Error al iniciar sesión:', err);
                    alert("Error al iniciar sesión. Inténtalo de nuevo más tarde.");
                });
        }
    };
    

    return (
        <div className='d-flex justify-content-center align-items-center bg-custom-image vh-100'>
            <div className="bg-wh p-3 rounded  w-25">    
            <h2>Iniciar sesion</h2>
    
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Ingresar Email" name='email'
                        onChange={handleInput}className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input type="password" placeholder='Ingresa la contraseña' name='password'
                        onChange={handleInput}className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Inciar sesion</button>
                    <p>Politicas y condiciones</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light'>Crear cuenta</Link>
                </form>
            </div>
        </div>
    )
}

export default Login