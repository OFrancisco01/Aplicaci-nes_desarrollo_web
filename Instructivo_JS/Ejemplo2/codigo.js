// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var boton = document.getElementById("random");

var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

/* Obtenemos el div que muestra el resultado
y lo almacenamos en una variable llamada "resultado" */
var resultadoRandom = document.getElementById("resultadoRandom");

var resultado = document.getElementById("resultado")
/* Obtenemos los dos input y los almacenamos en variables "inputUno"
y "inputDos" */
var input1 = document.getElementById("numero1");
var input2 = document.getElementById("numero2");

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

// Añadimosel evento click ala variable "btn"

boton.addEventListener("click", function () {
   /* Obtenemos el valor de cada input accediendo a su atributo "value" */
   var num1 = input1.value;
   var num2 = input2.value;
   /* Llamamos a una función que permite realizar la suma de los números y los mostramos al usuario" */
   resultadoRandom.innerHTML = random(num1, num2);
});

btn.addEventListener("click", function () {
   /* Obtenemos el valor de cada input accediendo a su atributo "value" */
   var n1 = inputUno.value;
   var n2 = inputDos.value;

   if (inputUno.value == "" || inputDos.value == "") {
      resultado.innerHTML = verificarInput()

   }
   else {
      /* Llamamos a una función que permite realizar la suma de los números y los mostramos al usuario" */
      resultado.innerHTML = sumar(n1, n2);
   }

});

btn1.addEventListener("click", function () {
   /* Obtenemos el valor de cada input accediendo a su atributo "value" */
   var n1 = inputUno.value;
   var n2 = inputDos.value;
   /* Llamamos a una función que permite realizar la suma de los números y los mostramos al usuario" */

   if (inputUno.value == "" || inputDos.value == "") {
      resultado.innerHTML = verificarInput()

   } else {
      resultado.innerHTML = restar(n1, n2);
   }

});

btn2.addEventListener("click", function () {
   /* Obtenemos el valor de cada input accediendo a su atributo "value" */
   var n1 = inputUno.value;
   var n2 = inputDos.value;
   /* Llamamos a una función que permite realizar la suma de los números y los mostramos al usuario" */

   if (inputUno.value == "" || inputDos.value == "") {
      resultado.innerHTML = verificarInput()

   } else {
      resultado.innerHTML = multiplicar(n1, n2);
   }

});

btn3.addEventListener("click", function () {
   /* Obtenemos el valor de cada input accediendo a su atributo "value" */
   var n1 = inputUno.value;
   var n2 = inputDos.value;
   /* Llamamos a una función que permite realizar la suma de los números y los mostramos al usuario" */

 
  
   if (inputUno.value == "" || inputDos.value == "") {
      console.log("ERROR");
      resultado.innerHTML = verificarInput()

   }
   else if(inputUno.value == 0 || inputDos.value == 0 ){
      resultado.innerHTML = verificarCeros();
     } 
   else {
      resultado.innerHTML = dividir(n1, n2);
   }

});

/* Función que retorna la suma de dos números */
function random(min, max) {
   return Math.round(parseInt(min) + Math.random() * (parseInt(max) - parseInt(min)));
}

function sumar(n1, n2) {
   // Es necesario aplicar parseInt a cada número
   return parseInt(n1) + parseInt(n2);
}

function restar(n1, n2) {
   return parseInt(n1) - parseInt(n2);
}

function dividir(n1, n2) {
   return parseInt(n1) / parseInt(n2);
}

function multiplicar(n1, n2) {
   return parseInt(n1) * parseInt(n2);
}

function verificarInput() {
   var mensaje = "LOS INPUT POSEEN VALORES VACÍOS";
   return mensaje;

}

function verificarCeros() {
   return "NO ES POSIBLE LA DIVISIÓN POR CEROS"; 
}
