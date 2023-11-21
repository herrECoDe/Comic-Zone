
const listaClientes = [
    {
        nombre:"Juan",
        apellido:"Herrera",
        correo:"juan@gmail.com",
        contraseña:"1234"
    }, 
    {
        nombre:"Jose",
        apellido:"Polo",
        correo:"josedanielpolo04@hotmail.com",
        contraseña:"josepolo1234"
    }

]

function cliente(nombre, apellido, correo, contraseña) {

    this.nombre = nombre
    this.apellido = apellido
    this.correo = correo
    this.contraseña = contraseña

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////REGISTRO CLIENTE////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const botonRegistrar = document.querySelectorAll(".boton-registrarse")

function registrarCliente(listaClientes) {

    const nombreCliente = document.getElementById("nombre-cliente").value
    const apellidoCliente = document.getElementById("apellido-cliente").value
    const correoCliente = document.getElementById("correo-cliente").value
    const contraseñaCliente = document.getElementById("contraseña-cliente").value

    const nuevoCliente = new cliente(nombreCliente, apellidoCliente, correoCliente, contraseñaCliente)

    let correoEncontrado=false

    for (let i=0;i<listaClientes.length;i++){
        if(listaClientes[i].correo===correoCliente){
            correoEncontrado=true
            break
        }
    }
    if(correoEncontrado===false){
        listaClientes.push(nuevoCliente)
        console.log("Cliente registrado");
        document.getElementById("salida-registro").innerHTML=""
    }else{
        console.log("Ya hay una cuenta con este correo");
        document.getElementById("salida-registro").innerHTML="Ya hay una cuenta registrada con este Email"
    }

}

botonRegistrar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id === "registrarse") {
            e.preventDefault();
            registrarCliente(listaClientes)
        }
    })
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////INICIO DE SESION////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const botonInicioSesion = document.querySelectorAll(".boton-inicio-sesion")


function capturarDatos(listaClientes) {

    const correoCliente = document.getElementById("correo-cliente").value
    const contraseñaCliente = document.getElementById("contraseña-cliente").value

    const clienteTemp = new cliente("", "", correoCliente, contraseñaCliente)

    return clienteTemp

}
function verificarCliente(listaClientes) {

    let clienteTemp = capturarDatos(listaClientes)
    let clienteEncontrado = false
    let clienteActual={}

    for(let i=0;i<listaClientes.length;i++){
        if (listaClientes[i].correo === clienteTemp.correo && listaClientes[i].contraseña === clienteTemp.contraseña) {
            clienteActual=listaClientes[i]
            clienteEncontrado = true
            break;
            }
}
    if(clienteEncontrado==false){
        console.log("Cliente no encontrado");
        document.getElementById("salida-inicio-sesion").innerHTML="Email o contraseña incorrectos"
        
    }else{
        console.log("Cliente encontrado");
        document.getElementById("salida-inicio-sesion").innerHTML=""
        redirigir("../index.html")
        return clienteActual
    }
}

botonInicioSesion.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id === "boton-inicio") {
            e.preventDefault();
            
            let clienteActual=verificarCliente(listaClientes)
            localStorage.setItem("cliente",JSON.stringify(clienteActual))
        }
    })
})

function redirigir(direccion) {
    window.location.href =direccion;
}
