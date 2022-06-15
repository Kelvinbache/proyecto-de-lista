'use strict';

/* boton para alladir elemetos */

let ayadirBtn = document.getElementById("btn");
ayadirBtn.addEventListener("click",ayadir);



function ayadir(x){ 
let caja = [];

/*crendo elementos */
 for(let i = 0; i < 1; i++){
  x = prompt("elementos");
     caja.push(x);   
};
/*metiebdo informcion */
 return credorDeTexto(caja);
};


function credorDeTexto(j = [],b){
let contenedor = document.getElementById("contenedor");
let etiqueta = document.createElement("li");
let etiqueta1 = document.createElement("ul");

/*pegar nodos*/
etiqueta1.appendChild(etiqueta);

/*donde grega el texto */
for (let i = 0; i < j.length; i ++){
   b = etiqueta.textContent = j + [i]; 
}

  return contenedor.append(etiqueta1);
}
/*forma de solucion de este problema */

// function ayadir(a,b){
// let etiqueta = document.createElement("li");

//   for (let i = 0; i <= 1; i++) {
//        a = prompt("hola"); 
//     b = etiqueta.textContent = a;
//   }
//   return document.body.append(b);
// }


