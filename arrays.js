// ¿Qué son los arrays en JavaScript?
// Los arrays son una estructura de datos que permite almacenar múltiples valores en una sola variable. 
// En JavaScript, los arrays pueden contener elementos de cualquier tipo, como números, cadenas, objetos e incluso otros arrays.

// EJEMPLOS
// Crea un array vacío
let vacio = [];
console.log(vacio); // []

// Crea un array con elementos
let elementos = [1, 2, 3, 4, 5];
console.log(elementos); // [1, 2, 3, 4, 5

// indices comienzan en 0.

// EJEMPLOS

// Accede al primer elemento del array

// let primerElemento = elementos[0];
console.log(primerElemento); // 1

// Accede al último elemento del array

// let ultimoElemento = elementos[elementos.length - 1];
console.log(ultimoElemento); // 5

// ¿Cómo puedo agregar elementos a un array en JavaScript?

// Utilizando el método push()

// El método push() agrega uno o más elementos al final del array. Por ejemplo:
let miArray = [1, 2, 3];
miArray.push(4, 5, 6);
console.log(miArray); // [1, 2, 3, 4, 5, 6]

// Utilizando el método unshift()
// El método unshift() agrega uno o más elementos al principio del array. Por ejemplo:
miArray = [1, 2, 3];
miArray.unshift(0, -1);
console.log(miArray); // [-1, 0, 1, 2, 3

// Utilizando el método splice()
// El método splice() agrega uno o más elementos en una posición específica del array. Por ejemplo:
miArray = [1, 2, 3];
miArray.splice(1, 0, 'a', 'b');
console.log(miArray); // [1, 'a', 'b', 2, 3

// Crea un array con elementos de diferentes tipos
let mixto = ['hola', 1, true, null];
console.log(mixto); // ['hola', 1, true, null]

// ¿Cómo se accede a los elementos de un array en JavaScript?
// Los elementos de un array se acceden mediante su índice, que es un número que identifica la posición del elemento dentro del array.
// Los índices comienzan en 0, por lo que el primer elemento del array tiene un índice de 0, el segundo elemento tiene un índice de 1, y así sucesivamente.

// MAS EJEMPLOS

// ¿Cómo se pueden eliminar elementos de un array en JavaScript?
// Los elementos se pueden eliminar mediante el método pop() o mediante la sintaxis de eliminación de arreglo.

// Elimina el último elemento del array
elementos.pop();
console.log(elementos); // [1, 2, 3, 4
// Elimina el primer elemento del array
elementos.shift();
console.log(elementos); // [2, 3, 4
// ¿Cómo se pueden ordenar los elementos de un array en JavaScript?
// Los elementos se pueden ordenar mediante el método sort().
// EJEMPLOS
// Ordena el array en orden ascendente
elementos.sort((a, b) => a - b);
// MAS EJEMPLOS
// Ordena el array en orden ascendente
// EJEMPLOS AVANZADOS
// ¿Cómo se pueden buscar elementos en un array en JavaScript?
// Los elementos se pueden buscar mediante el método indexOf() o mediante la sintaxis de búsqueda de arreglo
// EJEMPLOS
// Busca el elemento 5 en el array
let indexx = array.indexOf(5);
// Logitud de un array
let longitud = array.length;
// Crea un array con elementos
let array = [5, 2, 8, 1, 9];




// ¿Cómo puedo acceder a los elementos de un array en JavaScript?

// Podes acceder a los elementos de un array utilizando su índice.

// Acceso por indice 

// Puedes acceder a un elemento específico de un array utilizando su índice (posición en el array). Los índices en JavaScript comienzan en 0, por lo que el primer elemento del array tiene un índice de 0.

const miArrayPri = ['apple', 'banana', 'orange'];
console.log(miArrayPri[0]); // Output: "apple"
console.log(miArrayPri[1]); // Output: "banana"

// Acceso utilizando métodos. 

// Un método es una función que se asocia con un objeto o un tipo de dato. Los métodos se utilizan para realizar acciones específicas sobre un objeto o un conjunto de datos.

// Métodos de array: se asocian con arrays y se utilizan para realizar acciones sobre el array.

// JavaScript proporciona varios métodos para acceder y manipular arrays. Algunos de los métodos más comunes son:

// - `push()`: agrega un elemento al final del array.
// - `pop()`: elimina el último elemento del array.
// - `shift()`: elimina el primer elemento del array.
// - `unshift()`: agrega un elemento al principio del array.
// - `indexOf()`: devuelve el índice del primer elemento que coincide con el valor especific
// - `includes()`: devuelve un booleano indicando si el array contiene el elemento especificado
// - `splice()`: elimina elementos del array y devuelve los elementos eliminados.
// - `slice()`: devuelve una copia de una parte del array.
// - `forEach()`: ejecuta una función para cada elemento del array.
// - `map()`: devuelve un nuevo array con los resultados de aplicar una función a cada
// - `filter()`: devuelve un nuevo array con los elementos que cumplen una condición.
// - `reduce()`: aplica una función a cada elemento del array y devuelve un valor result
// - `reduceRight()`: aplica una función a cada elemento del array desde la derecha

// EJEMPLOS

// Agrega un elemento al final del array

miArray.push('orange');
console.log(miArray); // Output: ["apple", "banana", "orange"]

// Elimina el último elemento del array
miArray.pop();
console.log(miArray); // Output: ["apple", "banana"]

// Elimina el primer elemento del array
miArray.shift();
console.log(miArray); // Output: ["banana"]

// Agrega un elemento al principio del array
miArray.unshift('kiwi');
console.log(miArray); // Output: ["kiwi", "banana"]

const miArraySeg = ['apple', 'banana', 'orange'];
console.log(miArraySeg.length); // Output: 3

miArray.forEach((elemento, indice) => {
  console.log(`Elemento ${indice}: ${elemento}`);
});
// Output:
// Elemento 0: apple
// Elemento 1: banana
// Elemento 2: orange

// Acceso utilizando desestructuración
// La desestructuración es una forma de asignar valores a variables de manera más elegante y flexible. Puede ser utilizada para acceder a elementos de arrays de la siguiente manera: 
const miArrayTer = ['apple', 'banana', 'orange'];
const [primero, segundo, tercero] = miArrayTer;
console.log(primero); // Output: apple
console.log(segundo); // Output: banana
console.log(tercero); // Output: ["orange"]
