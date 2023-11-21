////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////PROVEEDORES/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function proveedor(nombreProveedor,idProveedor,telefonoProveedor){
    this.nombreProveedor=nombreProveedor
    this.idProveedor=idProveedor
    this.telefonoProveedor=telefonoProveedor
}

listaProveedores=[]

const botonRegistrar = document.querySelectorAll(".registrar")

function registrarProveedor(listaProveedores){

    const nombreProveedor=document.getElementById("nombre-proveedor").value
    const idProveedor=document.getElementById("id-proveedor").value
    const telefonoProveedor=document.getElementById("telefono-proveedor").value


    const nuevoProveedor=new proveedor(nombreProveedor,idProveedor,telefonoProveedor)
    console.log(nuevoProveedor);

    let proveedorEncontrado=false

    for(let i=0;i<listaProveedores.length;i++){
        if(listaProveedores[i].idProveedor===idProveedor){
            proveedorEncontrado=true
            break
        }

    }

    if(proveedorEncontrado===false){
        listaProveedores.push(nuevoProveedor)
        console.log(listaProveedores);
    }

}

botonRegistrar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id === "registrar-proveedor") {
            e.preventDefault();
            registrarProveedor(listaProveedores)
        }
    })
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////AGREGAR PRODUCTO////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let listaProductos = [
    {
        categoria: "Accesorios",
        nombre: "Morral Capitán América",
        imagen: "./images/Accesorios/backpack.webp",
        precio: 150.99,
        descripcion: "001"

    },
    {
        categoria: "Accesorios",
        nombre: "Carcasa Thor iPhone XS",
        imagen: "./images/Accesorios/funda-thor.webp",
        precio: 15.05,
        descripcion: "002"

    },
    {
        categoria: "Accesorios",
        nombre: "Juguete Hulkbuster",
        imagen: "./images/Accesorios/hulkbuster.webp",
        precio: 125.99,
        descripcion: "003"

    },
    {
        categoria: "Accesorios",
        nombre: "Peluche Baby Groot",
        imagen: "./images/Accesorios/peluche-babygroot.webp",
        precio: 29.75,
        descripcion: "004"

    },
    {
        categoria: "Accesorios",
        nombre: "SpiderBot Black Widow",
        imagen: "./images/Accesorios/spider-bot-black-widow.webp",
        precio: 450.75,
        descripcion:"005" 

    },
    {
        categoria: "Accesorios",
        nombre: "Taza Wakanda",
        imagen: "./images/Accesorios/taza-wakanda.webp",
        precio: 9.75,
        descripcion: "006"

    },
    {
        categoria: "Comics",
        nombre: "Age of Ultron #1",
        imagen: "./images/Comics/age-of-ultron.jpg",
        precio: 80.25,
        descripcion: "007"

    },
    {
        categoria: "Comics",
        nombre: "Doctor Strange #9",
        imagen: "./images/Comics/doctor-strange9.jpg",
        precio: 30.55,
        descripcion: "008"

    },
    {
        categoria: "Comics",
        nombre: "Hulk Smash Avengers #1",
        imagen: "./images/Comics/hulk-smash-avengers.jpg",
        precio: 65.35,
        descripcion: "009"

    },
    {
        categoria: "Comics",
        nombre: "Magneto #4",
        imagen: "./images/Comics/magneto4.jpg",
        precio: 25.99,
        descripcion: "010"

    },
    {
        categoria: "Comics",
        nombre: "Spider-Boy #1",
        imagen: "./images/Comics/spider-boy.jpg",
        precio: 50.99,
        descripcion: "011"

    },
    {
        categoria: "Comics",
        nombre: "Spider-Man Unlimited #9",
        imagen: "./images/Comics/spider-man9.jpg",
        precio: 25.75,
        descripcion: "012"

    },
    {
        categoria: "Comics",
        nombre: "The Marvels Project #4",
        imagen: "./images/Comics/the-marvels-project4.jpg",
        precio: 100,
        descripcion: "013"

    },
    {
        categoria: "Comics",
        nombre: "Ultimate Universe #1",
        imagen: "./images/Comics/ultimate-universe.jpg",
        precio: 60.25,
        descripcion: "014"

    },
    {
        categoria: "Comics",
        nombre: "Venom #27",
        imagen: "./images/Comics/venom27.jpg",
        precio: 40.55,
        descripcion: "015"

    },
    {
        categoria: "Comics",
        nombre: "White Widow #1",
        imagen: "./images/Comics/white-widow.jpg",
        precio: 50.75,
        descripcion: "016"

    },
    {
        categoria: "Comics",
        nombre: "X-Men #111",
        imagen: "./images/Comics/x-men111.jpg",
        precio: 20.35,
        descripcion: "017"

    },
    {
        categoria: "Ropa",
        nombre: "Camiseta Capitana Carter",
        imagen: "./images/Ropa/camiseta-captain-carter.webp",
        precio: 20.99,
        descripcion: "018"

    },
    {
        categoria: "Ropa",
        nombre: "Camiseta Spider-Man",
        imagen: "./images/Ropa/camiseta-spider-man.webp",
        precio: 30.99,
        descripcion: "019"

    },
    {
        categoria: "Ropa",
        nombre: "Hoodie Avengers",
        imagen: "./images/Ropa/hoodie-avengers.webp",
        precio: 80.99,
        descripcion: "020"

    },
    {
        categoria: "Ropa",
        nombre: "Hoodie Spider-Man/Venom",
        imagen: "./images/Ropa/hoodie-spider-venom.webp",
        precio: 99.99,
        descripcion: "021"

    },
    {
        categoria: "Ropa",
        nombre: "Camiseta I love you 3000",
        imagen: "./images/Ropa/i-love-you-3000.webp",
        precio: 20.99,
        descripcion: "022"

    },
    {
        categoria: "Ropa",
        nombre: "Camiseta Miss Minutes",
        imagen: "./images/Ropa/miss-minutes-tshirt.webp",
        precio: 25.99,
        descripcion: "023"

    },
    {
        categoria: "Ropa",
        nombre: "Pijama Spider-Man",
        imagen: "./images/Ropa/spiderman-pijama.webp",
        precio: 15.99,
        descripcion: "024"

    }


]



function producto(categoria,nombre,imagen,precio,id){
  this.categoria=categoria
  this.nombre=nombre
  this.imagen=imagen
  this.precio=precio
  this.id=id
}


 
localStorage.setItem("Productos", JSON.stringify(listaProductos))

function agregarProducto(listaProductos){

    const categoriaProducto=document.getElementById("categoria-producto").value
    const nombreProducto=document.getElementById("nombre-producto").value
    const imagenProducto=document.getElementById("imagen-producto").value
    const precioProducto=document.getElementById("precio-producto").value
    const idProducto=document.getElementById("id-producto").value

    const nuevoProducto=new producto(categoriaProducto,nombreProducto,imagenProducto,precioProducto,idProducto)
    console.log(nuevoProducto)

    let idEncontrado=false


    for(let i =0;i<listaProductos.length;i++){
        if(listaProductos[i].id===nuevoProducto.id){
            idEncontrado=true
            break
        }
    }
    if(idEncontrado===false){
        listaProductos.push(nuevoProducto)
        localStorage.setItem("Productos", JSON.stringify(listaProductos))
        
    }
}    

const botonAgregar = document.querySelectorAll(".agregar")

botonAgregar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id === "agregar-producto") {
            e.preventDefault();
            agregarProducto(listaProductos)
            
        }
    })
})


function redirigir(direccion) {
    window.location.href =direccion;
}