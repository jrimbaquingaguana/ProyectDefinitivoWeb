function validation(values) {

        let error = {}
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
        if(values.email === ""){
            error.email = "El correo no debe estar vacio"
        }
        else if (!email_pattern.test(values.email)){
            error.email = "Email no encontrado"
        }else {
            error.email = ""
        }
        if(values.password === ""){
            error.password = "La contraseña no puede estar vacio"
        }else {
            error.password = ""
        }
        return error;


}
export default validation;