function Validation(values) {
    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const contraseña_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9](?=.*[0-9])(?=.*[!@#$%]).{8,}$/

    if(values.email === "") {
        error.email = "¡Te has saltado algo! No te olvides de añadir tu dirección de correo electrónico."
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "El email no coincide"
    }else {
        error.email = ""
    }

    if(values.contraseña === ""){
        error.contraseña = "¡Te has saltado algo! No te olvides de añadir tu contraseña"
    }
    else if(!contraseña_pattern.test(values.contraseña)) {
        error.contraseña = "La contraseña no coincide"
    }else {
        error.contraseña = ""
    }
    return error;
}

export default Validation;