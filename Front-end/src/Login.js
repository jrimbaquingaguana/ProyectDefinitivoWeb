
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './LoginValidation';
import axios from 'axios';


function Login(){

    const [values, setValues] = useState({
            email: '',
            password: ''
        })
     const navigat = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if( errors.email === ""  && errors.password === "" ){
            axios.post('http://localhost:8081/login',values)
            .then(res => {
                if(res.data === "Succes"){
                    navigat('/home')
                }else {
                    alert("No encontrado el usuario")
                }
            })
            .catch(err => console.log(err));
         }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className="bg-white p-3 rounded  w-25">    
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