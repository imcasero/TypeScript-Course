//funciones
//hay que tipar las variables que les pasamos y lo que va a devolver la funcion
function add(a:number , b:number = 1):number{
    return a + b;
}
const resul = add(1 ,2);
//type function
let combineValues: Function;
// let combineValues: (a:number , b:number)=>number; asi seria mas estricto
function sayHello(){
    console.log('hola');
}
let user = 'bob';
if(user === 'pep'){
    combineValues = add;
} else{
    combineValues = sayHello;
}
combineValues(1 , 2);
//never 
function generateError(message:string ):never | boolean{
    throw new Error(message);
}
const respuesta = generateError('Oops! Ha ocurrido un error');
console.log(respuesta);