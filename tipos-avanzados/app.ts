//tuple
var arr: [number, number] = [1, 2]; //tupla , viene a ser un array con tipado fuerte
//si declaras tres number despues del igual salta error

//type
//Sirve para definir nuestros propios tipos
type Person = {
  //de esta forma obligas a que todos los tipos person , u objetos del estilo tengan un atributo nombre
  name: String;
  age?: number; //con la interrogacion el atributo sera opcional
};
const person: Person = {
  name: "Jonh",
};
const person2: Person = {
  name: "Doe",
  age: 12
};
