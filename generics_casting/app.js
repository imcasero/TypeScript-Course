function identity(arg) {
    return arg;
}
var str = identity('one');
var bool = identity(true);
var num = identity(12);
//asi podremos usar cualqueir metodo propio
str.charAt;
bool.valueOf;
num.toExponential;
//Se pueden usar dos genericos tambien
function identityTwo(arg, argTwo) {
    return arg;
}
var strTwo = identityTwo('one', true);
var boolTwo = identityTwo(true, 5);
var numTwo = identityTwo(12, 'aguacate');
//Tambien puedes usar genericos con clases
var Generic = /** @class */ (function () {
    function Generic() {
        this.items = [];
    }
    return Generic;
}());
var inst = new Generic(); //Aqui lo defini como de number
inst.items.push(1);
var objeto = {
    name: 'Jong',
};
var item = 'hello'; //Primero tienes que pasarlo a any o unknown
