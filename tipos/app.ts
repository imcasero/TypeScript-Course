//tipo boolean
var myBool:boolean;
myBool = true;
myBool = false;
// tipos number
var num:number;
num = 2;
// var num = 2;
//num = 'hola'; //da error porque ya asimila el valor
//tipo string
var str: string;
str = 'Hola';
var strNum:string;
strNum = `Hola mi numero es ${num}`;
//tipos arrays
var myActivities = [1 , 'hello' , true];
myActivities.push(2);
myActivities.push('POlicia');
myActivities.push(true);
var arrayString: string[] = ['Sport' , 'Film'];
arrayString.push('string');
//arrayString.push(3); //Aqui el compilador se queja
arrayString.push(`ok`);
var results: number[] = [1 ,2 ,3];
results.push(2);
//Intentar evitar any siempre que se pueda
//tipo any
var item:any;
item = 'hello';//por usar any no te mostrara autocompletado
var arr1:any[] = [1 , true , 'hello'];//En el caso de los arrays no
//pero a la hora de iterar el array no te completara el codigo
