let productosEnCarrito = JSON.parse(localStorage.getItem(("ProductosEnCarrito")))
let clienteActual={}
clienteActual = JSON.parse(localStorage.getItem(("cliente")))

if(clienteActual!=null){
    document.getElementById("act").innerHTML="Hola, "+clienteActual.nombre+ "!"
}

const contenedorProducto = document.querySelector(".producto-en-carrito")
let preciototal = 0

function cargarProductosCarrito(productosEnCarrito) {
    preciototal=0
    contenedorProducto.innerHTML = ""
    productosEnCarrito.forEach(producto => {

        preciototal += producto.precio

        const div = document.createElement("div")
        div.classList.add("producto-carrito")

        div.innerHTML = `
        <img src="${producto.imagen}" alt="">
                <div class="texto-carrito">
                    <h3 class="nombre-producto-carrito">${producto.nombre}</h3> <br>
                    <h3>Cantidad: 1</h3> <br>
                    <h3>Precio: ${producto.precio}</h3> <br>
                    <h3>Subtotal: ${producto.precio}</h3> <br>
                    <a class="boton-eliminar" >Eliminar</a>
                </div>  

        `
        contenedorProducto.append(div)
    });
}

function eliminarCarrito(productoEliminar) {
    const index = productosEnCarrito.findIndex(producto => producto.nombre === productoEliminar.nombre);
    if (index !== -1) {
        productosEnCarrito.splice(index, 1);
        localStorage.setItem("ProductosEnCarrito", JSON.stringify(productosEnCarrito))

        cargarProductosCarrito(productosEnCarrito);
    }
}

cargarProductosCarrito(productosEnCarrito)
document.getElementById("precio-total").innerHTML = "Total: " + preciototal.toFixed(2) + "$"

contenedorProducto.addEventListener("click", (e) => {
    if (e.target.classList.contains("boton-eliminar")) {
        const productoDiv = e.target.closest(".producto-carrito")
        const nombreProducto = productoDiv.querySelector(".nombre-producto-carrito").textContent

        const productoEliminar = productosEnCarrito.find((producto) => producto.nombre === nombreProducto)
        eliminarCarrito(productoEliminar)
        document.getElementById("precio-total").innerHTML = "Total: " + preciototal.toFixed(2) + "$"
    }

})    

