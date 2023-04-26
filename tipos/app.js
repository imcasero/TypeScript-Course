//tipo boolean
var myBool;
myBool = true;
myBool = false;
// tipos number
var num;
num = 2;
// var num = 2;
//num = 'hola'; //da error porque ya asimila el valor
//tipo string
var str;
str = 'Hola';
var strNum;
strNum = "Hola mi numero es ".concat(num);
//tipos arrays
var myActivities = [1, 'hello', true];
myActivities.push(2);
myActivities.push('POlicia');
myActivities.push(true);
var arrayString = ['Sport', 'Film'];
arrayString.push('string');
//arrayString.push(3); //Aqui el compilador se queja
arrayString.push("ok");
var results = [1, 2, 3];
results.push(2);
//Intentar evitar any siempre que se pueda
//tipo any
var item;
item = 'hello'; //por usar any no te mostrara autocompletado
var arr = [1, true, 'hello']; //En el caso de los arrays no
//pero a la hora de iterar el array no te completara el codigo
