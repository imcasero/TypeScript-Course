function identity<T>(arg : T) : T{ //Usando genericos para no duplicar codigo
    return arg;
}

const str = identity<string>('one');
const bool = identity<boolean>(true);
const num = identity<number>(12);
//asi podremos usar cualqueir metodo propio
str.charAt;
bool.valueOf;
num.toExponential;

//Se pueden usar dos genericos tambien
function identityTwo<T , Z>(arg : T , argTwo : Z) : T{ //Usando genericos para no duplicar codigo
    return arg;
}
const strTwo = identityTwo<string , boolean>('one' , true);
const boolTwo = identityTwo<boolean , number >(true , 5);
const numTwo = identityTwo<number , string>(12 , 'aguacate');
//Tambien puedes usar genericos con clases
class Generic <M>{
    public items: M[] = [];
}
const inst = new Generic<number>();//Aqui lo defini como de number
inst.items.push(1);
// inst.items.push('2'); obviamente se queja

//Casting
type Person = {
    name: string;
}
const objeto = {
    name: 'Jong',
} as Person;
const item = ('hello' as any) as number; //Primero tienes que pasarlo a any o unknown

