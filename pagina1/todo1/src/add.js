'use strict';

/* boton para alladir elemetos */

let ayadirBtn = document.getElementById("btn");
ayadirBtn.addEventListener("click",ayadir());


function ayadir(x){ 
let caja = [];

/*crendo elementos */
 for(let i = 0; i <= 1; i++){
  x = prompt("elementos");
     caja.push(x);   
};
/*metiebdo informcion */
 return credorDeTexto(caja);
};


function credorDeTexto(j = []){
let contenedor = document.createElement("div");
let ojo = [];

/*donde grega el texto */
for (const elemento of j) {
let cambio = String(elemento);
ojo.push(cambio);
}

return document.write(ojo.join("."));
}


