//funciones
//hay que tipar las variables que les pasamos y lo que va a devolver la funcion
function add(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
var resul = add(1, 2);
//type function
var combineValues;
// let combineValues: (a:number , b:number)=>number; asi seria mas estricto
function sayHello() {
    console.log('hola');
}
var user = 'bob';
if (user === 'pep') {
    combineValues = add;
}
else {
    combineValues = sayHello;
}
combineValues(1, 2);
//never 
function generateError(message) {
    throw new Error(message);
}
var respuesta = generateError('Oops! Ha ocurrido un error');
console.log(respuesta);
