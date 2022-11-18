
var num12, num22, respuesta2;
txt_resta = document.getElementById("resta");
op12 = document.getElementById("op12");
op22 = document.getElementById("op22");
op32 = document.getElementById("op32");
txt_msj2 = document.getElementById("msj2");
txt_resultado2 = document.getElementById("resultado2");
var acer= 0
var inco= 0

function comenzar2(){
	txt_resultado2.innerHTML = "?";
	txt_msj2.innerHTML = "";

	//genera la resta - Numeros aleatorios entre 0 1 9
	num12 = Math.floor(Math.random()*9);
	num22 = Math.floor(Math.random()*9);
	respuesta2 = parseInt(num12) - parseInt(num22);
	//asignamos lo números para que se muestren
	resta.innerHTML = num12 + " - " + num22 + " = ";

	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta2 = Math.floor(Math.random()*2);
	console.log(indiceOpCorrecta2);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta2 == 0){
		op12.innerHTML = parseInt(respuesta2);
		op22.innerHTML = parseInt(respuesta2) + 1;
		op32.innerHTML = parseInt(respuesta2) + 1
	}
	if(indiceOpCorrecta2 == 1){
		op12.innerHTML = parseInt(respuesta2) + 1;
		op22.innerHTML = parseInt(respuesta2);
		op32.innerHTML = parseInt(respuesta2) + 2;
	}
	if(indiceOpCorrecta2 == 2){
		op12.innerHTML = parseInt(respuesta2) + 2;
		op22.innerHTML = parseInt(respuesta2) + 3;
		op32.innerHTML = parseInt(respuesta2);
	}
}

function controlarRespuesta2(opcionElegida2){	

if(bandera){

	txt_resultado2.innerHTML = opcionElegida2.innerHTML;
	if(respuesta2 == opcionElegida2.innerHTML){
		txt_msj2.innerHTML = "EXCELENTE!!";
		txt_msj2.style.color="green";
		acer= acer+1;
		setTimeout(comenzar2, 2000);
	}else{
		txt_msj2.innerHTML = "INTENTA DE NUEVO!!";
		txt_msj2.style.color="red";
		inco= inco +1;
		setTimeout(limpiar2, 2000);

	}
	document.getElementById("acer").value=acer;
	document.getElementById("inco").value=inco;
	

}else{
	alert("sin tiempo");
}

}
function limpiar2(){
	txt_resultado2.innerHTML = "?";
	txt_msj2.innerHTML = "";
}

comenzar2();


var bandera=false;

let interval=0;
let seconds;
document.querySelector("button").addEventListener("click", function() {
    bandera=true;
    clearInterval(interval);
    const animation=document.querySelector(".animation");
    
    animation.classList.remove("start");
   
    animation.offsetWidth;
  
    animation.classList.add("start");
 
  
    seconds=30;
 
    const elSeconds=document.querySelectorAll(".animation span")[1];
    elSeconds.innerHTML=seconds;
    interval=setInterval(()=>{
        elSeconds.innerHTML=--seconds;
        if (seconds<=0) {
            bandera=false;
            clearInterval(interval);
        }
    },1000);
});



