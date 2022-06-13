/* boton para alladir elemetos */

let ayadirBtn = document.getElementById("btn");
ayadirBtn.addEventListener("click",ayadir());


function ayadir(){
 let caja = []; 
 
 for(let i = 0; i <= 2; i++){
  x = prompt("elementos");
        caja.push(x);      
}
  
  return console.log(caja);

};


