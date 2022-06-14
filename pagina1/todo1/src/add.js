'use strict';

/* boton para alladir elemetos */

let ayadirBtn = document.getElementById("btn");
ayadirBtn.addEventListener("click",ayadir());


function ayadir(x,y){
 y = []; 
 
 /*crendo elementos */
 for(let i = 0; i <= 2; i++){
  x = prompt("elementos");
        y.push(x);      
}
/*metiebdo informcion */
 return credorDeTexto(y);
};


function credorDeTexto(j = []){
let contenedor = document.createElement("div");
let elementoP = document.createElement("p");


/*bucle para recorrer*/
for(let numero of j){
let nodoT = document.createTextNode(numero);

/*crear texto*/
elementoP.appendChild(nodoT);
contenedor.appendChild(elementoP);
} 
 return document.write(contenedor);

}


