// declarando variables
let subMenu = document.querySelector(".sub-menu-wrap"); // 
let carrito = document.querySelector(".icono-carrito"); //
let boton = document.querySelectorAll(".botonciyo"); // 
let carritoCompras = document.querySelector(".sub-menu");


function abrirCarrito() {
    subMenu.classList.toggle("abrir-menu"); // cambiar de clase a una que definimos en nuestro css
}



// funcion 2: agregar compras y precios al carrito
function pruebaBotonciyo(e){ // 
    console.log("diste click en el botonciyo"); // pruebitas
    console.log(e.target.parentElement);

    //
    let itemCompra =  e.target.parentElement; // tarjeta
    let objetoComprado = itemCompra.querySelector(".item-compra").textContent; 
    let precioCompra = itemCompra.querySelector(".costo").textContent; 
    console.log(objetoComprado);
    console.log(precioCompra);

    // crear el elemento
    let nombreCompra = document.createElement('p'); 
    let costoCompra = document.createElement('p');
    let botonQuitar = document.createElement('button');
    nombreCompra.textContent = objetoComprado; 
    costoCompra.textContent = precioCompra;
    botonQuitar.textContent = "x";

    console.log(nombreCompra)
    console.log(costoCompra);

    // appendear
    let compraCarrito = document.createElement('div');
    compraCarrito.classList.add('compra-info');
    compraCarrito.appendChild(nombreCompra); 
    compraCarrito.appendChild(costoCompra);
    compraCarrito.appendChild(botonQuitar);
    carritoCompras.appendChild(compraCarrito); 

    

   
}

// 3. aplicar funcion
carrito.addEventListener('click', abrirCarrito); 

boton.forEach(function(boton) {
    boton.addEventListener('click', pruebaBotonciyo);
    

})

// Declarar una variable para almacenar el total
let totalCompra = 0;

function abrirCarrito() {
    subMenu.classList.toggle("abrir-menu");
}

function pruebaBotonciyo(e) {
    let itemCompra = e.target.parentElement;
    let objetoComprado = itemCompra.querySelector(".item-compra").textContent;
    let precioCompra = parseFloat(itemCompra.querySelector(".costo").textContent); // Convertir el precio a número

    // Agregar el precio al total
   
    totalCompra += precioCompra;

    // Restablecer el contenido del carrito
    actualizarCarrito(objetoComprado, precioCompra);
}

botonQuitar.addEventListener('click', function() {
    // Obtener el valor actual del total como número
  totalCompra = parseInt(totalElement.textContent);
  
    // Restar un valor específico (en este caso, 10)
    let resta = precioCompra;
    total -= resta;
  
    // Actualizar el valor del total en el HTML
    totalElement.textContent = total;
});

function abrirCarrito() {
    subMenu.classList.toggle("abrir-menu");
}

function pruebaBotonciyo(e) {
    let itemCompra = e.target.parentElement;
    let objetoComprado = itemCompra.querySelector(".item-compra").textContent;
    let precioCompra = parseFloat(itemCompra.querySelector(".costo").textContent); // Convertir el precio a número

    // Agregar el precio al total
   
    totalCompra += precioCompra;

    // Restablecer el contenido del carrito
    actualizarCarrito(objetoComprado, precioCompra);
}

function actualizarCarrito(objetoComprado, precioCompra) {
    let nombreCompra = document.createElement('p');
    let costoCompra = document.createElement('p');
    let botonQuitar = document.createElement('button');
    let tot=document.querySelector('span')
    nombreCompra.textContent = objetoComprado;
    costoCompra.textContent = precioCompra.toFixed(2); // Formatear el precio con dos decimales
    botonQuitar.textContent = "x";
    botonQuitar.style.width='40px'
    botonQuitar.style.height='40px'

    let compraCarrito = document.createElement('div');
    compraCarrito.classList.add('compra-info');
    compraCarrito.appendChild(nombreCompra);
    compraCarrito.appendChild(costoCompra);
    compraCarrito.appendChild(botonQuitar);
    carritoCompras.appendChild(compraCarrito);
    botonQuitar.addEventListener('click',function () {
        let eliminar= document.querySelector('p');
        if(eliminar){
            eliminar.remove();
        }
        let eliminary= document.querySelector('p');
        if(eliminary){
            eliminary.remove();
            
        }
        let eliminaro= document.querySelector('button');
        if(eliminaro){
            eliminaro.remove();
            tot.textContent=' 0'
            totalCompra=0
        }

       
    })


    // Actualizar el total en la interfaz
    document.getElementById('total').textContent = totalCompra.toFixed(2)+' Bs';
}









