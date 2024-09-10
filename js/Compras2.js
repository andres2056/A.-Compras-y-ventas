var = productos = JSON.parse(localStorage.getItem('productos')) || [];
var = proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];
 
function cargarProductos (){

}	

function buscarProveedores (){
    
}

function cargarProvedores (){   
    var cadena= '';
    for(let i = 0; i < proveedores.length; i++){
        cadena += `<option value="${proveedores[i].empresa}">${proveedores[i].empresa}</option>`;

    document.getElementById('proveedor').innerHTML = cadena;    

}
