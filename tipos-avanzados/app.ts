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
//interface mas para objetos
interface Personiner {
  name:String,
  age?:number,
  sayHello():void //asi podemos definir metodos
}
const personiner: Personiner = {
  name: 'Juan',
  sayHello: function(){}
};
const personiner2: Personiner = {
  name: 'Juan',
  age: 14,
  sayHello: function(){}
};
//Objetos
//Para crear un objeto tenemos que tiparlo como interface o como type

//Records
//Para objetos dinamicos
const myObjet:Record<string , any> = {};

//a partir de aqui se rellena solo
myObjet.name = 'pep';
myObjet.age = 29;
//Union
type PersonName ={
  name:string;
}
type PersonAge = {
  age:number;
}
type personUnion = PersonName & PersonAge;
const persona: personUnion = {
  name: 'Jonh',
  age: 12
}