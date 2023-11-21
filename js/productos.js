


document.addEventListener("DOMContentLoaded", function() {
    

productos = JSON.parse(localStorage.getItem(("Productos")))
let clienteActual = {}
clienteActual = JSON.parse(localStorage.getItem(("cliente")))
 


const comicsList = productos.filter(producto => producto.categoria === "Comics")
const accesioriosList = productos.filter(producto => producto.categoria === "Accesorios")
const ropalist = productos.filter(producto => producto.categoria === "Ropa")

const contenedorProducto = document.querySelector(".container-comics")
const botonesCatalogo = document.querySelectorAll(".boton-catalogo")


function cargarProductos(productosElegidos) {

    contenedorProducto.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="cartabig">
                <img src="${producto.imagen}" alt="">
                <h3 class="size">${producto.nombre}</h3> <br>
                <p>${producto.precio} $ </p>
                <br>
                <button class="boton-agregar">
                    Agregar
                </button>
            </div>
        `
        contenedorProducto.append(div);
    })

}

cargarProductos(productos)

botonesCatalogo.forEach(boton => {
    boton.addEventListener("click", (e) => {
        switch (e.currentTarget.id) {
            case "comics-productos":
                cargarProductos(comicsList)
                document.getElementById("titulo-catalogo").innerHTML = "Comics"
                break
            case "ropa-productos":
                cargarProductos(ropalist)
                document.getElementById("titulo-catalogo").innerHTML = "Ropa"
                break
            case "accesorios-productos":
                cargarProductos(accesioriosList)
                document.getElementById("titulo-catalogo").innerHTML = "Accesorios"
                break
            case "todos-productos":
                cargarProductos(productos)
                document.getElementById("titulo-catalogo").innerHTML = "Todos los productos"
                break
        }
    })
})

//AGREGAR PRODUCTOS A CARRITO


let productosEnCarrito = []
function agregarCarrito(producto) {
    productosEnCarrito.push(producto)
    localStorage.setItem("ProductosEnCarrito", JSON.stringify(productosEnCarrito))
}

contenedorProducto.addEventListener("click", (e) => {
    if (e.target.classList.contains("boton-agregar")) {
        const productoDiv = e.target.closest(".producto")
        const nombreProducto = productoDiv.querySelector("h3").textContent

        const productoAgregar = productos.find((producto) => producto.nombre === nombreProducto)
        agregarCarrito(productoAgregar)

        console.log(productosEnCarrito);

    }

})    
if(clienteActual!=null){
    document.getElementById("act").innerHTML="Hola, "+clienteActual.nombre+ "!"
}  

function redirigir(direccion) {
    window.location.href =direccion;
}
})