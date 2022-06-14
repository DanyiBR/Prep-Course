// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    //console.log("1", array); codigo para probar por consola a la hora de hacer debugs.
    array[i] = array[i] + 1;
    //console.log("2", array);
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //palabras = ['Hello', 'world!']
  //return Hello world
  let frase = "";
  console.log(frase);
  for (var i = 0; i < palabras.length; i++) {
    console.log(palabras.length);
    console.log(i);
    console.log(palabras[i]);
    console.log(palabras.length - 1);
    console.log(frase);
    if (palabras[i] === palabras[palabras.length - 1]) {
      console.log(frase);
      frase = frase + palabras[i];
      console.log(frase);
    } else
      frase = frase + palabras[i] + " ";
      console.log(frase);
  } return frase;
}

console.log(dePalabrasAFrase(["hola", "danyeis", "bravo"]));

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) return true;
  }
  return false;
}
console.log(arrayContiene(["array", "hola", "mundo"], "mundo"));



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0
  for (var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0
  let suma = 0
  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]
    promedio = suma / (resultadosTest.length)
  }
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // numeros = [1, 2]
  //  
  // if (numeros[0] > numeros[1] ) return "el numero mayor es: " + numeros[0]
  //else return "el numero mayor es: " + numeros[1]
  //Creamos una variable fuera del for para guardar el numero mayor.
  let mayor = 0
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      console.log(numeros[i])
      mayor = numeros[i]
    }
  }
  return mayor
}

console.log(numeroMasGrande([1, 2]));


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  // Iniciamos la variable en uno porque en cero la multiplicacion daria cero de ahi en adelante.
  let producto = 1
  //arguments me permite acceder a n cantidad de parámetros pasados en la función, por ejemplo si son muchísimos es muy útil para acceder a ellos con esta palabra clave. Me convierte todos esos parámetros en un array con el que puedo interactuar.
  if (arguments.length === 0) return 0
  if (arguments.length === 1) return arguments[0]
  //Recorremos el array de los argumentos
  for (var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i]
  }
  return producto
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador++
      //es igual que codear contador = contador + 1
      //este contador++ me va sumando los numeros que son mayores a 18
    }
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana"
  if (numeroDeDia > 1 || numeroDeDia < 7) return "Es dia Laboral"
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si es entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  //Primero convertimos el numero a una cadena de texto y la guardamos en una variable para luego mirar si la posicion uno de ese string es igual a nueve.
  var numToString = n.toString();
  //el metodo charAt me permite ingresar a una posicion específica del texto
  //tambien podemos acceder a la primera posicion del numero asi:
  //if (numToString[0]) === "9") return true;
  if (numToString.charAt(0) === "9") return true;
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  for (var i = 0; i < arreglo.length - 1; i++) {
    //Si los dos primeros elementos son diferentes, en lugar de comparar todos y cada uno de los elementos, devolvemos false.
    if (arreglo[i] !== arreglo[i + 1]) {
      return false
    }
    return true
  }
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") nuevoArray.push(array[i])
  }
  if (nuevoArray.length < 3) return "No se encontraron los meses pedidos"
  return nuevoArray
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arrayMayoresACien = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100 &&  array[i] <= 200) arrayMayoresACien.push(array[i])
  }
  return arrayMayoresACien
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = []
  //Igualamos la variable suma a lo que recibamos por parámetro para irlo aumentando en 2 en el ciclo for.
  for (var i = 0; i < 10; i++){
    //Codigo debajo es igual que numero = numero + 2
    numero += 2
    if (numero === i) break;//El break me rompe todo el codigo del for. Rompe un pedazo de bloque de codigo a diferencia del return que termina por completo la funcion cuando se devuelve algun valor...
    else {
      nuevoArray.push(numero)
    }
  }
  if (i < 10) return "Se interrumpió la ejecución"
  return nuevoArray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = []
  //Igualamos la variable suma a lo que recibamos por parámetro para irlo aumentando en 2 en el ciclo for.
  var suma = numero
  for (var i = 0; i < 10; i++){
    if (i === 5) continue
    //Codigo debajo es igual que suma = suma + 2
    else {
      suma += 2;
      nuevoArray.push(suma)
    }
  }
  return nuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
