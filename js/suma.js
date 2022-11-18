var num1, num2, respuesta;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");
var acer= 0
var inco= 0

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//genera la suma - Numeros aleatorios entre 0 1 9
	num1 = Math.round(Math.random()*9);
	num2 = Math.round(Math.random()*9);
	respuesta = num1 + num2;
	//asignamos lo números para que se muestren
	suma.innerHTML = num1 + " + " + num2 + " = ";

	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
}

function controlarRespuesta(opcionElegida){	

	if(bandera){
		
	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color="green";
		acer= acer+1;
		setTimeout(comenzar, 2000);
		
	}else{
		txt_msj.innerHTML = "INTENTA DE NUEVO!!";
		txt_msj.style.color="red";
		inco= inco +1;
		setTimeout(limpiar, 2000);

	}
document.getElementById("acer").value=acer;
document.getElementById("inco").value=inco;


}else{
	alert("sin tiempo");
}

}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();




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

























