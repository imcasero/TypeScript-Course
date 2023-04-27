// const user = {};
//  if (user?.address?.street?.name === 'Plaza España') { // asi va comprobando una a uno si existe
//     doSomething();
//  }
function f(stringOrNull) {
    // if (stringOrNull === null) { Esta seria la forma tradicional de comprobar si es un string o un nulo
    //     return 'default';
    // }
    // return stringOrNull; 
    return stringOrNull !== null && stringOrNull !== void 0 ? stringOrNull : 'default'; //Esto seria lo mismo pero simplificado
}
var result = f(null);
console.log(result);
var result = f('hola');
console.log(result);
