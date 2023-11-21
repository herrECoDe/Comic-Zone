let clienteActual={}
clienteActual = JSON.parse(localStorage.getItem(("cliente")))

if(clienteActual!=null){
    document.getElementById("act").innerHTML="Hola, "+clienteActual.nombre+ "!"
}