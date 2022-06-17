'use strict';

/* boton para alladir elemetos */

let ayadirBtn = document.getElementById("btn");
ayadirBtn.addEventListener("click",ayadir);



function ayadir(x){ 
let caja = [];

/*crendo elementos*/
 for(let i = 0; i < 1; i++){
  x = prompt("elementos");
     caja.push(x);   
};
/*metiebdo informcion */
 return credorDeTexto(caja);
};


function credorDeTexto(j = []){ 
let contenedor = document.getElementById("contenedor");
/*credor de los elementos */
let etiqueta = document.createElement("li");
let etiqueta1 = document.createElement("ul");

/*pegar nodos*/
etiqueta1.appendChild(etiqueta);

/*donde se agrega el texto */
for (let i = 0; i < j.length; i ++){
    etiqueta.textContent =  j; 
}
/*se retorna en el contendor*/
  return contenedor.append(etiqueta1);
}

/*boton para eliminar el ultimo elemento */
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click" ,eliminar);

function eliminar(params) {
 let contendor = document.getElementById("contenedor");
 let recorrido = contendor.childNodes;

 for (let i = 0; i < recorrido.length; i++) {
     let elementos = recorrido[i].lastChild;
    return elementos.remove(); 
 }  
}










