function validation(values) {
    let errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) {
        errors.name = "El nombre no debe estar vacío";
    }

    if (!values.email.trim()) {
        errors.email = "El email no debe estar vacío";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "El formato del email es inválido";
    }

    if (!values.password.trim()) {
        errors.password = "La contraseña no puede estar vacía";
    }

    return errors;
}

export default validation;
